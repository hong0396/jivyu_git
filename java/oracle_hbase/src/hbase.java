import org.apache.hadoop.hbase.client.Put;
import org.apache.hadoop.hbase.util.Bytes;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.*;


public class hbase {
    public static void main(String[] args) {
        String rootDir="hdfs://nameservice2/hbase";
        String zkServer="172.16.8.17";
        String port="2181";
        connect conn=new connect("172.16.8.17");

        try {
            oracle base = new oracle();
            String sql = "select * from tbl_edw_card_temp";
            base.conn();
            Statement st = (Statement) base.conn.createStatement();
            ResultSet s = st.executeQuery(sql);
            int i = 1;

            while (s.next()) {
                System.out.println("正在导入第"+i+"行数据");
                String cardid = s.getString(1).toString();
                String sj = s.getString(2).toString();
                String od = s.getString(3).toString();
                String xf_je = s.getString(4).toString();
                String yh_je = s.getString(5).toString();
                String cx_cs = s.getString(6).toString();
                Put put = new Put(Bytes.toBytes(cardid));
                put.addColumn(Bytes.toBytes("sj"), Bytes.toBytes(od),
                        Bytes.toBytes(sj));
                put.addColumn(Bytes.toBytes("xf_je"), Bytes.toBytes(od),
                        Bytes.toBytes(xf_je));
                put.addColumn(Bytes.toBytes("yh_je"), Bytes.toBytes(od),
                        Bytes.toBytes(yh_je));
                put.addColumn(Bytes.toBytes("cx_cs"), Bytes.toBytes(od),
                        Bytes.toBytes(cx_cs));

                conn.PutData("tbl_edw_card", put);
                i++;

            }
            base.close();
        }catch (SQLException e){
            // TODO Auto-generated catch block
            e.printStackTrace();
        }







//        try{
//            if(rs != null){
//                rs.close();
//            }
//            if(pstmt != null){
//                pstmt.close();
//            }
//            if(conn != null){
//                conn.close();
//            }
//        } catch (SQLException e) {
//            e.printStackTrace();
//        }









//
//        Put put = new Put(Bytes.toBytes("row1"));
//        put.addColumn(Bytes.toBytes("basicInfo"), Bytes.toBytes("qual1"),
//                Bytes.toBytes("val1"));
//        put.addColumn(Bytes.toBytes("moreInfo"), Bytes.toBytes("qual2"),
//                Bytes.toBytes("val2"));
//        puts.add(put);














//        Map<String, Map> dicMap = new HashMap<String, Map>();
//        Map<String, List<String>> m = new HashMap<String, List<String>>();

//        //List<List<String>> mlist = new ArrayList<List<String>>();
//        //System.out.println(result);
//        for (List<String> s : result) {
//            System.out.println(s);
//            String cardid =s.get(0).toString();
//            String   sj   =s.get(1).toString();
//            String   od   =s.get(2).toString();
//            String co =cardid + '-'+od;
//            if (m.containsKey(co) == false) {
//                m.put(co, new ArrayList<String>());
//            }
//            m.get(co).add(sj);
//
////            Map map = new LinkedHashMap();
////            map.putAll(dicMap.get(dicId));
//
//
//        }
//
//        Set<Map.Entry<String, List<String>>> entryset = m.entrySet();
//        for (Map.Entry<String, List<String>> entry:entryset) {
//            String cardid=entry.getKey().split("-")[0];
//            String od=entry.getKey().split("-")[1];
//
//            if (dicMap.containsKey(cardid) == false) {
//                dicMap.put(cardid, new HashMap<String, Map>());
//            }
//            dicMap.get(cardid).put(od, entry.getValue());
//
//
//            //System.out.println(entry.getKey()+","+entry.getValue());
//        }
//
//
////        Set<String> set = m.keySet();
////        for (String s:set) {
////            String[] a =s.split("-");
////            a[0], a[1]
////            System.out.println(s+","+m.get(s));
////        }
//
//
//
//
//






//        String rootDir="hdfs://nameservice2/hbase";
//        String zkServer="172.16.8.17";
//        String port="2181";
//        connect conn=new connect("172.16.8.17");
//
//
//        List<String> cols=new LinkedList<String>();
//        cols.add("basicInfo");
//        cols.add("moreInfo");
//        conn._crateTable("students11", cols);

//        List<String> cols=new LinkedList<String>();
//
//        cols.add("basicInfo");
//        cols.add("moreInfo");
//
//
//
//        List<Put> puts=new LinkedList<Put>();
//        Put put = new Put(Bytes.toBytes("row1"));
//        put.addColumn(Bytes.toBytes("basicInfo"), Bytes.toBytes("qual1"),
//                Bytes.toBytes("val1"));
//        put.addColumn(Bytes.toBytes("moreInfo"), Bytes.toBytes("qual2"),
//                Bytes.toBytes("val2"));
//        puts.add(put);
//
//        conn.crateTable("students111", cols);
//        conn.saveData("students111",puts);
//







    }
}






