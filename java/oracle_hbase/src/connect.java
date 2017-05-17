import org.apache.hadoop.conf.Configuration;
import org.apache.hadoop.hbase.*;
import org.apache.hadoop.hbase.client.*;
import org.apache.hadoop.hbase.filter.BinaryComparator;
import org.apache.hadoop.hbase.filter.CompareFilter;
import org.apache.hadoop.hbase.filter.PageFilter;
import org.apache.hadoop.hbase.filter.RegexStringComparator;
import org.apache.hadoop.hbase.io.compress.Compression.Algorithm;
import org.apache.hadoop.hbase.io.encoding.DataBlockEncoding;
import org.apache.hadoop.hbase.rest.client.Client;
import org.apache.hadoop.hbase.rest.client.Cluster;
import org.apache.hadoop.hbase.rest.client.RemoteAdmin;
import org.apache.hadoop.hbase.rest.client.RemoteHTable;
import org.apache.hadoop.hbase.util.Bytes;

import java.io.IOException;
import java.util.LinkedList;
import java.util.List;


public class connect{

    private String zkServer="172.16.8.17";
    private HConnection hConn = null;
    private Client client = null;
    private Configuration conf = HBaseConfiguration.create();



    connect(String zkServer) {
        super();
        Cluster cluster = new Cluster();
        cluster.add("zkServer", 8080);
        client = new Client(cluster);
        conf.set("hbase.rest.client.max.retries", "10");
        conf.set("hbase.rest.client.sleep", "1000");

    }



    //创建表
    public void  crateTable(String tableName, List<String> cols) {
        try {
            Configuration _conf = HBaseConfiguration.create();
            RemoteAdmin admin = new RemoteAdmin(client,_conf);
            if (admin.isTableAvailable(tableName))
                throw new IOException("table exists");
            else {
                HTableDescriptor tableDesc = new HTableDescriptor(tableName);
                for (String col : cols) {
                    HColumnDescriptor colDesc = new HColumnDescriptor(col);
                    colDesc.setCompressionType(Algorithm.GZ);
                    colDesc.setDataBlockEncoding(DataBlockEncoding.DIFF);
                    tableDesc.addFamily(colDesc);
                }
                admin.createTable(tableDesc);
            }

        } catch (MasterNotRunningException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        } catch (ZooKeeperConnectionException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        } catch (IOException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }


    }

    //插入数据
    public void saveData(String tableName, List<Put> puts) {

        try {
            RemoteHTable table=new RemoteHTable(client, tableName);

            table.put(puts);
            table.isAutoFlush();
            table.flushCommits();

        } catch (IOException e) {

            e.printStackTrace();
        }
    }

    public void PutData(String tableName, Put put) {

        try {
            RemoteHTable table=new RemoteHTable(client, tableName);

            table.put(put);
            table.isAutoFlush();
            table.flushCommits();

        } catch (IOException e) {

            e.printStackTrace();
        }
    }
    //得到数据
    public Result getData(String tableName, String rowkey) {
        try {
            RemoteHTable table=new RemoteHTable(client, tableName);
            Get get = new Get(rowkey.getBytes());
            return table.get(get);
        } catch (IOException e) {

            e.printStackTrace();
        }
        return null;

    }

    //输出result结果
    public void format(Result result) {

        String rowkey = Bytes.toString(result.getRow());
        KeyValue[] kvs = result.raw();
        for (KeyValue kv : kvs) {
            String family = Bytes.toString(kv.getFamily());
            String qualifier = Bytes.toString(kv.getQualifier());
            System.out.println("rowkey->" + rowkey + "family->" + family + "qualifier->" + qualifier);
        }
    }


    //全表扫描
    public void hbaseScan(String tableName) {

        Scan scan = new Scan();//扫描器
        scan.setCaching(1000);//缓存1000条数据,一次读取1000条
        try {
            RemoteHTable table=new RemoteHTable(client, tableName);
            ResultScanner scanner = table.getScanner(scan);//返回迭代器
            for (Result res : scanner) {
                format(res);
            }

        } catch (IOException e) {

            e.printStackTrace();
        }
    }


    //比较过滤器
    public void filterTest(String tableName) {
        Scan scan = new Scan();//扫描器
        scan.setCaching(1000);//缓存1000条数据,一次读取1000条
        org.apache.hadoop.hbase.filter.RowFilter filter = new org.apache.hadoop.hbase.filter.RowFilter(CompareFilter.CompareOp.EQUAL, new BinaryComparator("Jack".getBytes()));
        org.apache.hadoop.hbase.filter.RowFilter filter1 = new org.apache.hadoop.hbase.filter.RowFilter(CompareFilter.CompareOp.EQUAL, new RegexStringComparator("J\\w+"));

        scan.setFilter(filter);
        try {
            RemoteHTable table=new RemoteHTable(client, tableName);
            ResultScanner scanner = table.getScanner(scan);//返回迭代器
            for (Result res : scanner) {
                format(res);
            }

        } catch (IOException e) {

            e.printStackTrace();
        }
    }

    //PageFilter分页
    public void pageFilterTest(String tableName) {
        PageFilter filter = new PageFilter(4);
        byte[] lastRow = null;
        int pageCount = 0; //记录第几页
        try {
            RemoteHTable table=new RemoteHTable(client, tableName);
            while (++pageCount > 0) {
                System.out.println("pageCount = " + pageCount);
                Scan scan = new Scan();
                scan.setFilter(filter);
                if (lastRow != null) {
                    scan.setStartRow(lastRow);
                }

                ResultScanner scanner = table.getScanner(scan);
                int count = 0;//计数器
                for (Result res : scanner) {

                    lastRow = res.getRow();
                    if (++count > 3)
                        break;
                    format(res);
                    if (count < 3) {
                        break;
                    }

                }
            }

        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}