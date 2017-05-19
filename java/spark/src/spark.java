import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.apache.spark.SparkConf;
import org.apache.spark.api.java.JavaRDD;
import org.apache.spark.api.java.JavaSparkContext;
import org.apache.spark.api.java.function.Function;
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

//        List<Integer> data = Arrays.asList(1, 2, 3, 4, 5);
//        //并行集合，是通过对于驱动程序中的集合调用JavaSparkContext.parallelize来构建的RDD
//        JavaRDD<Integer> distData = sc.parallelize(data);


        List<String> list=new ArrayList<String>();
        list.add("a");
        list.add("b");
        list.add("c");
        JavaRDD<String> temp=sc.parallelize(list);



        JavaRDD<Integer> lines = sc.parallelize(Arrays.asList(1,2,3,4,5,6,7,8,9,10));
        JavaRDD<String> strlines = sc.parallelize(Arrays.asList("1 2","2 3","0 4"));

        //JavaRDD<Integer> lineLengths = lines.map(new GetLength());


        JavaRDD<String> str1RDD = strlines.map(new Function<String, String>(){
            public String call(String x)  {
                return x.split(" ")[0];
            }
        });
        for(String it:str1RDD.collect()){
            System.out.println(it);
        }


        JavaRDD<Integer> lineLengths = temp.map(s -> s.length());
        int totalLength = lines.reduce((a, b) -> a + b);
        System.out.println(totalLength);
        System.out.println(lineLengths.collect());


        SQLContext sqlContext = new org.apache.spark.sql.SQLContext(sc);
        DataFrame people = sqlContext.read().json("data/temp.json");

        // Displays the content of the DataFrame to stdout
        people.show();
        // The inferred schema can be visualized using the printSchema() method.
        people.printSchema();
        // root
        //  |-- age: integer (nullable = true)
        //  |-- name: string (nullable = true)

        // Register this DataFrame as a table.
        people.registerTempTable("people");



        // Print the schema in a tree format
        people.printSchema();
        // root
        // |-- age: long (nullable = true)
        // |-- name: string (nullable = true)

        // Select only the "name" column
        people.select("name").show();
        // name
        // Michael
        // Andy
        // Justin

        // Select everybody, but increment the age by 1
        people.select(people.col("name"), people.col("age").plus(1)).show();
        // name    (age + 1)
        // Michael null
        // Andy    31
        // Justin  20

        // Select people older than 21
        people.filter(people.col("age").gt(21)).show();
        // age name
        // 30  Andy

        // Count people by age
        people.groupBy("age").count().show();
        // age  count
        // null 1
        // 19   1
        // 30   1




        // SQL statements can be run by using the sql methods provided by sqlContext.
        DataFrame teenagers = sqlContext.sql("SELECT name FROM people WHERE age >= 13 AND age <= 19");

        // Alternatively, a DataFrame can be created for a JSON dataset represented by
        // an RDD[String] storing one JSON object per string.
        List<String> jsonData = Arrays.asList(
                "{\"name\":\"Yin\",\"address\":{\"city\":\"Columbus\",\"state\":\"Ohio\"}}");
        JavaRDD<String> anotherPeopleRDD = sc.parallelize(jsonData);
        DataFrame anotherPeople = sqlContext.read().json(anotherPeopleRDD);








    }
}
