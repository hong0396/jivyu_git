import os
import sys

# Path for spark source folder
#
os.environ['SPARK_HOME']="E:\\Downloads\\spark-2.0.0-bin-hadoop2.6"
os.environ['JAVA_HOME']="C:\\Program Files\\Java\\jdk1.8.0_121"
os.environ['HADOOP_HOME']="E:\\Downloads\\hadoop-common-2.2.0-bin-master\\bin"
sys.path.append("E:\\Downloads\\spark-2.0.0-bin-hadoop2.6\\python")
try:
    from pyspark import SparkContext
    from pyspark import SparkConf
    # JAVA_HOME = "C:\\Program Files\\Java\\jdk1.8.0_121"

# Append pyspark  to Python Path

    print ("Successfully imported Spark Modules")

    #conf = SparkConf().setMaster("local").setAppName("My App")
    conf = SparkConf().setMaster("spark://172.16.8.14:7077").setAppName("My App")\
        .set("spark.shuffle.service.enabled", "false").set("spark.dynamicAllocation.enabled", "false")\
        .set("spark.io.compression.codec", "snappy").set("spark.rdd.compress", "true")\
        .set("spark.serializer", "org.apache.spark.serializer.KryoSerializer") \
        .set("spark.sql.tungsten.enabled","true")\
        .set("spark.app.id","YourId").set("spark.cores.max","1")
    sc = SparkContext(conf = conf )
    strings = ["one", "two", "three"]
    s2 = sc.parallelize(strings)
    s3 = s2.map(lambda word: word.upper())
    print(s3.collect())
    # s3.saveAsTextFile('C:\\Users\\Gui\\Desktop\\canary_test')
except ImportError as e:
    print ("Can not import Spark Modules", e)
    sys.exit(1)