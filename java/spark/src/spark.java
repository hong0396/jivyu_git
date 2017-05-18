import java.util.Arrays;
import java.util.List;

import org.apache.spark.SparkConf;
import org.apache.spark.api.java.JavaRDD;
import org.apache.spark.api.java.JavaSparkContext;
import org.apache.spark.sql.DataFrame;
import org.apache.spark.sql.SQLContext;

public class spark {

    public static void main(String[] args) {
        //SparkConf conf = new SparkConf().setAppName("test").setMaster("spark://192.168.1.251:7077");
//        SparkConf conf = new SparkConf().setAppName("test").setMaster("local");
//        JavaSparkContext sc = new JavaSparkContext(conf);
        SparkConf conf=new SparkConf();
        //conf.set("spark.testing.memory", "2147480000");     //因为jvm无法获得足够的资源
        //JavaSparkContext sc = new JavaSparkContext("spark://192.168.52.140:7077", "First Spark App",conf);
        JavaSparkContext sc = new JavaSparkContext("local", "First Spark App",conf);
        System.out.println(sc);



    }
}
