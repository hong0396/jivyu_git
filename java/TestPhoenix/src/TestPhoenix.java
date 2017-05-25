import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import org.apache.phoenix.jdbc.*;

public class TestPhoenix {

    private static String driver = "org.apache.phoenix.jdbc.PhoenixDriver";

    public static void main(String[] args) throws SQLException {
        try {
            Class.forName(driver);
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        }
        Statement stmt = null;
        ResultSet rset = null;

        //Connection con = DriverManager.getConnection("jdbc:phoenix:172.16.8.17:2181");
        Connection con = DriverManager.getConnection("jdbc:phoenix:172.16.8.17:8765");

        //Connection con = DriverManager.getConnection("jdbc:phoenix:c1,c2");
        con.setAutoCommit(true);
        stmt = con.createStatement();
        String sql = "select * from test";
        rset = stmt.executeQuery(sql);
        while (rset.next()) {
            System.out.println(rset.getString("mycolumn"));
        }
        stmt.close();
        con.close();
    }















//    public static void main(String[] args) throws SQLException {
//        Statement stmt = null;
//        ResultSet rs = null;
//        String viewName = "\"food:products\""; // 这是对HBase表"food:products"创建的Phoenix view
//
//
//
//        /* ecs1.njzd.com:2181是zookeeper的某一个节点的ip:port
//           即使集群中的ZooKeeper存在多个节点，这里也只需要写出一个节点的ip:port就可以了*/
//        // 如果是Scala，还需要这一句
//        //Class.forName("org.apache.phoenix.jdbc.PhoenixDriver");
//        Connection conn = DriverManager.getConnection("jdbc:phoenix:c1:2181");
//
//        /* 在Phoenix中，如果table name/view name、column name等字符串不加上双引号就会被认为是大写。所以，这里的brand_name要加上双引号  */
//        PreparedStatement pstmt = conn("select * from " + viewName + " where \"brand_name\" like '%雀巢%' limit 1");
//        rs = pstmt.executeQuery();
//
//        StringBuffer sb = new StringBuffer();
//
//        while (rs.next()) {
//            ProductData product  = new ProductData(rs.getString("pk"), rs.getString("product_name"), rs.getString("format"),
//                    rs.getString("regularity"), rs.getString("img_url"), rs.getString("brand_name"), rs.getString("producer_address"),
//                    rs.getString("shelf_life"), rs.getString("category_name"), rs.getString("ingredient"), rs.getString("brand_id"),
//                    rs.getString("producer_id"), rs.getString("category_code"), rs.getString("batch_id_list"), rs.getString("ingredient_id_list"));
//
//            System.err.println(product.toString());
//
//            System.err.println("\n=========================================================");
//        }
//        /* 关闭资源*/
//        rs.close();
//        pstmt.close();
//    }






}
