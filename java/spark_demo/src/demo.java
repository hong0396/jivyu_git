import org.apache.spark.SparkConf;
import org.apache.spark.api.java.JavaRDD;
import org.apache.spark.api.java.JavaSparkContext;
import org.apache.spark.api.java.function.Function;
import org.apache.spark.api.java.function.Function2;
import org.apache.spark.storage.StorageLevel;
import org.apache.spark.api.java.JavaPairRDD;
import org.apache.spark.api.java.JavaRDD;
import org.apache.spark.api.java.JavaSparkContext;
import org.apache.spark.api.java.function.FlatMapFunction;
import org.apache.spark.api.java.function.Function;
import org.apache.spark.api.java.function.Function2;
import org.apache.spark.api.java.function.PairFunction;
import java.util.Arrays;
import java.util.List;
import java.util.regex.Pattern;


public class demo {
    public static void main(String[] args) throws Exception {


        //context ，用于读文件 ，类似于scala的sc
        //格式为：
        // JavaSparkContext(master: String, appName: String, sparkHome: String, jars: Array[String], environment: Map[String, String])
        JavaSparkContext ctx = new JavaSparkContext("spark://172.16.8.14:7077", "JavaWordCount");



        //一次一行，String类型    ,还有hadoopfile，sequenceFile什么的  ，可以直接用sc.textFile("path")
        JavaRDD<String> lines = ctx.textFile(args[1], 1);  //java.lang.String path, int minSplits
        lines.cache();   //cache，暂时放在缓存中，一般用于哪些可能需要多次使用的RDD，据说这样会减少运行时间


        //collect方法，用于将RDD类型转化为java基本类型，如下
        List<String> line = lines.collect();
        for(String val:line)
            System.out.println(val);


        //下面这些也是RDD的常用函数
        // lines.collect();  List<String>
        // lines.union();     javaRDD<String>
        // lines.top(1);     List<String>
        // lines.count();      long
        // lines.countByValue();


        /**
         *   filter test
         *   定义一个返回bool类型的函数，spark运行filter的时候会过滤掉那些返回只为false的数据
         *   String s，中的变量s可以认为就是变量lines（lines可以理解为一系列的String类型数据）的每一条数据
         */
        JavaRDD<String> contaninsE = lines.filter(new Function<String, Boolean>() {
            @Override
            public Boolean call(String s) throws Exception {


                return (s.contains("they"));
            }
        });
        System.out.println("--------------next filter's  result------------------");
        line = contaninsE.collect();
        for(String val:line)
            System.out.println(val);


        /**
         * sample test
         * sample函数使用很简单，用于对数据进行抽样
         * 参数为：withReplacement: Boolean, fraction: Double, seed: Int
         *
         */


        JavaRDD<String> sampletest = lines.sample(false,0.1,5);
        System.out.println("-------------next sample-------------------");
        line = sampletest.collect();
        for(String val:line)
            System.out.println(val);




        /**
         *
         * new FlatMapFunction<String, String>两个string分别代表输入和输出类型
         * Override的call方法需要自己实现一个转换的方法，并返回一个Iterable的结构
         *
         * flatmap属于一类非常常用的spark函数，简单的说作用就是将一条rdd数据使用你定义的函数给分解成多条rdd数据
         * 例如，当前状态下，lines这个rdd类型的变量中，每一条数据都是一行String，我们现在想把他拆分成1个个的词的话，
         * 可以这样写 ：
         */


        JavaRDD<String> words = lines.flatMap(new FlatMapFunction<String, String>() {
            @Override
            public Iterable<String> call(String s) {
                String[] words=s.split(" ");
                return Arrays.asList(words);
            }
        });




        /**
         * map 键值对 ，类似于MR的map方法
         * pairFunction<T,K,V>: T:输入类型；K,V：输出键值对
         * 需要重写call方法实现转换
         */
        JavaPairRDD<String, Integer> ones = words.map(new PairFunction<String, String, Integer>() {
            @Override
            public Tuple2<String, Integer> call(String s) {
                return new Tuple2<String, Integer>(s, 1);
            }
        });












        //A two-argument function that takes arguments
        // of type T1 and T2 and returns an R.
        /**
         *  reduceByKey方法，类似于MR的reduce
         *  要求被操作的数据（即下面实例中的ones）是KV键值对形式，该方法会按照key相同的进行聚合，在两两运算
         */
        JavaPairRDD<String, Integer> counts = ones.reduceByKey(new Function2<Integer, Integer, Integer>() {
            @Override
            public Integer call(Integer i1, Integer i2) {  //reduce阶段，key相同的value怎么处理的问题
                return i1 + i2;
            }
        });


        //备注：spark也有reduce方法，输入数据是RDD类型就可以，不需要键值对，
        // reduce方法会对输入进来的所有数据进行两两运算






        /**
         * sort，顾名思义，排序
         */
        JavaPairRDD<String,Integer> sort = counts.sortByKey();
        System.out.println("----------next sort----------------------");




        /**
         * collect方法其实之前已经出现了多次，该方法用于将spark的RDD类型转化为我们熟知的java常见类型
         */
        List<Tuple2<String, Integer>> output = sort.collect();
        for (Tuple2<?,?> tuple : output) {
            System.out.println(tuple._1 + ": " + tuple._2());
        }




        /**
         * 保存函数，数据输出，spark为结果输出提供了很多接口
         */
        sort.saveAsTextFile("/tmp/spark-tmp/test");






        // sort.saveAsNewAPIHadoopFile();
        //  sort.saveAsHadoopFile();
        System.exit(0);
    }

















































//    public static void main(String[] args) {
//
//        SparkConf conf=new SparkConf();//因为jvm无法获得足够的资源
//        JavaSparkContext sc = new JavaSparkContext("spark://172.16.8.14:7077", "First Spark App",conf);
//        System.out.println(sc);
//
//        //通过hdfs上的文件定义一个RDD 这个数据暂时还没有加载到内存，也没有在上面执行动作,lines仅仅指向这个文件
//        JavaRDD<String> lines = sc.textFile("hdfs://nameservice2/user/spark/applicationHistory");
//
//        //定义lineLengths作为Map转换的结果 由于惰性，不会立即计算lineLengths
//        //第一个参数为传入的内容，第二个参数为函数操作完后返回的结果类型
//        JavaRDD<Integer> lineLengths = lines.map(new Function<String, Integer>() {
//            public Integer call(String s) {
//                System.out.println("每行长度"+s.length());
//                return s.length(); }
//        });
//        //运行reduce  这是一个动作action  这时候，spark才将计算拆分成不同的task，
//        //并运行在独立的机器上，每台机器运行他自己的map部分和本地的reducation，并返回结果集给去驱动程序
//        int totalLength = lineLengths.reduce(new Function2<Integer, Integer, Integer>() {
//            public Integer call(Integer a, Integer b) { return a + b; }
//        });
//
//        System.out.println(totalLength);
//        //为了以后复用  持久化到内存...
//        lineLengths.persist(StorageLevel.MEMORY_ONLY());
//
//
//    }
}