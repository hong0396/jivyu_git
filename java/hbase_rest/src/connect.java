import java.io.IOException;
import java.util.LinkedList;
import java.util.List;
import org.apache.hadoop.conf.Configuration;
import org.apache.hadoop.hbase.HBaseConfiguration;
import org.apache.hadoop.hbase.HColumnDescriptor;
import org.apache.hadoop.hbase.HTableDescriptor;
import org.apache.hadoop.hbase.KeyValue;
import org.apache.hadoop.hbase.MasterNotRunningException;
import org.apache.hadoop.hbase.ZooKeeperConnectionException;
import org.apache.hadoop.hbase.client.*;
import org.apache.hadoop.hbase.client.Get;
import org.apache.hadoop.hbase.client.HBaseAdmin;
import org.apache.hadoop.hbase.client.HConnection;
import org.apache.hadoop.hbase.client.HConnectionManager;
import org.apache.hadoop.hbase.client.HTableInterface;
import org.apache.hadoop.hbase.client.Put;
import org.apache.hadoop.hbase.client.Result;
import org.apache.hadoop.hbase.io.compress.Compression.Algorithm;
import org.apache.hadoop.hbase.io.encoding.DataBlockEncoding;
import org.apache.hadoop.hbase.Cell;
import org.apache.hadoop.hbase.CellUtil;
import org.apache.hadoop.hbase.client.HTableInterface;
import org.apache.hadoop.hbase.client.Result;
import org.apache.hadoop.hbase.client.ResultScanner;
import org.apache.hadoop.hbase.client.Scan;
import org.apache.hadoop.hbase.filter.*;
import org.apache.hadoop.hbase.filter.PageFilter;
import org.apache.hadoop.hbase.util.Bytes;
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

public class HbaseConnection {
    private String rootDir;
    private String zkServer;
    private String port;
    private Configuration conf;
    private HConnection hConn=null;

    public HbaseConnection(String zkServer, String port) {
        super();
        //this.rootDir = rootDir;
        this.zkServer = zkServer;
        this.port = port;
        conf=HBaseConfiguration.create();
        // conf.set("hbase.rootdir", rootDir);
        conf.set("hbase.zookeeper.quorum ", zkServer);
        conf.set("hbase.zookeeper.property.clientPort", port);

        try {
            //HConnectionKey connectionKey = new HConnectionKey(conf);

            hConn=HConnectionManager.createConnection(conf);

        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    //创建表
    public void crateTable(String tableName,List<String> cols){
        try {
            HBaseAdmin admin=new HBaseAdmin(conf);
            if(admin.tableExists(tableName))
                throw new IOException("table exists");
            else{

                HTableDescriptor tableDesc=new HTableDescriptor(tableName);
                for(String col:cols){

                    HColumnDescriptor colDesc=new HColumnDescriptor(col);
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
    public void saveData(String tableName,List<Put> puts){

        try {
            HTableInterface table =hConn.getTable(tableName);
            table.put(puts);
            table.setAutoFlush(false);
            table.flushCommits();

        } catch (IOException e) {

            e.printStackTrace();
        }
    }

    //得到数据
    public Result getData(String tableName,String rowkey){
        try {
            HTableInterface table =hConn.getTable(tableName);
            Get get=new Get(rowkey.getBytes());
            return table.get(get);
        } catch (IOException e) {

            e.printStackTrace();
        }
        return null;

    }

    //输出result结果
    public void format(Result result){

        String rowkey=Bytes.toString(result.getRow());
        KeyValue[] kvs=result.raw();
        for (KeyValue kv:kvs){
            String family= Bytes.toString(kv.getFamily());
            String qualifier= Bytes.toString(kv.getQualifier());
            System.out.println("rowkey->"+rowkey+"family->"+family+"qualifier->"+qualifier);
        }
    }


    //全表扫描
    public void hbaseScan(String tableName){

        Scan scan=new Scan();//扫描器
        scan.setCaching(1000);//缓存1000条数据,一次读取1000条
        try {
            HTableInterface table =hConn.getTable(tableName);
            ResultScanner scanner=table.getScanner(scan);//返回迭代器
            for(Result res:scanner){
                format(res);
            }

        } catch (IOException e) {

            e.printStackTrace();
        }
    }


    //比较过滤器
    public void filterTest(String tableName){
        Scan scan=new Scan();//扫描器
        scan.setCaching(1000);//缓存1000条数据,一次读取1000条
        org.apache.hadoop.hbase.filter.RowFilter filter =new org.apache.hadoop.hbase.filter.RowFilter(CompareFilter.CompareOp.EQUAL,new BinaryComparator("Jack".getBytes()));
        org.apache.hadoop.hbase.filter.RowFilter filter1 =new org.apache.hadoop.hbase.filter.RowFilter(CompareFilter.CompareOp.EQUAL,new RegexStringComparator("J\\w+"));

        scan.setFilter(filter);
        try {
            HTableInterface table =hConn.getTable(tableName);
            ResultScanner scanner=table.getScanner(scan);//返回迭代器
            for(Result res:scanner){
                format(res);
            }

        } catch (IOException e) {

            e.printStackTrace();
        }
    }

    //PageFilter分页
    public void pageFilterTest(String tableName){
        PageFilter filter = new  PageFilter(4);
        byte[] lastRow=null;
        int pageCount=0; //记录第几页
        try {
            HTableInterface table =hConn.getTable(tableName);
            while(++pageCount>0){
                System.out.println("pageCount = "+ pageCount);
                Scan scan=new Scan();
                scan.setFilter(filter);
                if(lastRow!=null){
                    scan.setStartRow(lastRow);
                }

                ResultScanner scanner=table.getScanner(scan);
                int count=0;//计数器
                for(Result res:scanner){

                    lastRow=res.getRow();
                    if(++count>3)
                        break;
                    format(res);
                    if(count<3){
                        break;
                    }

                }
            }

        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public static void main(String[] args) {

        String rootDir="hdfs://nameservice2/hbase";
        String zkServer="172.16.8.17";
        String port="2181";
        connect conn=new connect("172.16.8.17");


        List<String> cols=new LinkedList<String>();
        cols.add("basicInfo");
        cols.add("moreInfo");
        conn._crateTable("students", cols);










//        Cluster cluster = new Cluster();
//        cluster.add("zkServer", 8080);
//        Client client = new Client(cluster);
//
//        RemoteHTable table = new RemoteHTable(client, 'test');
//
//        Get get =new Get(Bytes.toBytes("my-key-2"))
//        get.addColumn(Bytes.toBytes("column100"),Bytes.toBytes("col-3"));
//        Result result1=table.get(get);
//
//        System.out.printIn("Get result1:"+result1);
//
//        Scan scan = new Scan();
//        scan.getStartRow(Bytes.toBytes("my-key-1"))
//        ResultScanner scanner = table.getScanner(scan);
//
//        for (Result result2: scanner){
//            System.out.printIn("Scan row[" + Bytes.toString(result2.getRow());
//
//        }














        //System.out.println("1111");

        //conn._format(conn._getData("test","my-key-1"));
        //System.out.println("2222");






//        List<String> cols=new LinkedList<String>();
//        cols.add("basicInfo");
//        cols.add("moreInfo");
//        conn.crateTable("students", cols);





//        List<Put> puts=new LinkedList<Put>();
//        Put put1=new Put("Tom".getBytes());//rowkey
//        put1.add("basicInfo".getBytes(), "age".getBytes(), "27".getBytes());
//        put1.add("moreInfo".getBytes(), "tel".getBytes(), "110".getBytes());
//        Put put2=new Put("Jim".getBytes());
//        put2.add("basicInfo".getBytes(), "age".getBytes(), "28".getBytes());
//        put2.add("moreInfo".getBytes(), "tel".getBytes(), "111".getBytes());
//        puts.add(put1);
//        puts.add(put2);
//        conn.saveData("students", puts);




//        Result result=  conn.getData("students", "Tom");
//        conn.format(result);
//        //
//        conn.hbaseScan("students");
//        //
//        conn.filterTest("students");
//
//        //
//        conn.pageFilterTest("students");
    }

}



class connect{

    private String zkServer="172.16.8.17";
    private HConnection hConn = null;
    private Client client = null;
    private Configuration conf = HBaseConfiguration.create();

    // RemoteHTable table=new RemoteHTable(client, "test");

    connect(String zkServer) {
        super();

        Cluster cluster = new Cluster();
        cluster.add("zkServer", 8080);
        client = new Client(cluster);
        conf.set("hbase.rest.client.max.retries", "10");
        conf.set("hbase.rest.client.sleep", "1000");

    }



    //创建表
    public void  _crateTable(String tableName, List<String> cols) {
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
    private void saveData(String tableName, List<Put> puts) {

        try {
            RemoteHTable table=new RemoteHTable(client, tableName);

            table.put(puts);
            table.isAutoFlush();
            table.flushCommits();

        } catch (IOException e) {

            e.printStackTrace();
        }
    }

    //得到数据
    public Result _getData(String tableName, String rowkey) {
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
    public void _format(Result result) {

        String rowkey = Bytes.toString(result.getRow());
        KeyValue[] kvs = result.raw();
        for (KeyValue kv : kvs) {
            String family = Bytes.toString(kv.getFamily());
            String qualifier = Bytes.toString(kv.getQualifier());
            System.out.println("rowkey->" + rowkey + "family->" + family + "qualifier->" + qualifier);
        }
    }


    //全表扫描
    private void hbaseScan(String tableName) {

        Scan scan = new Scan();//扫描器
        scan.setCaching(1000);//缓存1000条数据,一次读取1000条
        try {
            RemoteHTable table=new RemoteHTable(client, tableName);
            ResultScanner scanner = table.getScanner(scan);//返回迭代器
            for (Result res : scanner) {
                _format(res);
            }

        } catch (IOException e) {

            e.printStackTrace();
        }
    }


    //比较过滤器
    private void filterTest(String tableName) {
        Scan scan = new Scan();//扫描器
        scan.setCaching(1000);//缓存1000条数据,一次读取1000条
        org.apache.hadoop.hbase.filter.RowFilter filter = new org.apache.hadoop.hbase.filter.RowFilter(CompareFilter.CompareOp.EQUAL, new BinaryComparator("Jack".getBytes()));
        org.apache.hadoop.hbase.filter.RowFilter filter1 = new org.apache.hadoop.hbase.filter.RowFilter(CompareFilter.CompareOp.EQUAL, new RegexStringComparator("J\\w+"));

        scan.setFilter(filter);
        try {
            RemoteHTable table=new RemoteHTable(client, tableName);
            ResultScanner scanner = table.getScanner(scan);//返回迭代器
            for (Result res : scanner) {
                _format(res);
            }

        } catch (IOException e) {

            e.printStackTrace();
        }
    }

    //PageFilter分页
    private void pageFilterTest(String tableName) {
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
                    _format(res);
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



