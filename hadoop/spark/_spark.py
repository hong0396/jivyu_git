import os
import sys

# Path for spark source folder
#os.environ['SPARK_HOME']="E:\\迅雷下载\\spark-2.1.0-bin-hadoop2.7"
#os.environ['SPARK_HOME']="E:\\迅雷下载\\spark-2.1.0-bin-hadoop2.6"
os.environ['SPARK_HOME']="C:\\Users\\Gui\\Downloads\\spark-2.0.0-bin-hadoop2.6"
os.environ['JAVA_HOME']="C:\\Program Files\\Java\\jdk1.8.0_121"
os.environ['HADOOP_HOME']="C:\\Users\\Gui\\Downloads\\hadoop-common-2.2.0-bin-master\\bin"
#sys.path.append("E:\\迅雷下载\\spark-2.1.0-bin-hadoop2.6\\python")
#sys.path.append("E:\\迅雷下载\\spark-2.1.0-bin-hadoop2.7\\python")
sys.path.append("C:\\Users\\Gui\\Downloads\\spark-2.0.0-bin-hadoop2.6\\python")
try:
    from pyspark import SparkContext
    from pyspark import SparkConf
    # JAVA_HOME = "C:\\Program Files\\Java\\jdk1.8.0_121"

# Append pyspark  to Python Path

    print ("Successfully imported Spark Modules")

    conf = SparkConf().setMaster("local").setAppName("My App")
    # conf = SparkConf().setMaster("spark://172.16.8.13:7077").setAppName("My App")
    sc = SparkContext(conf = conf )
    strings = ["one", "two", "three"]
    s2 = sc.parallelize(strings)
    s3 = s2.map(lambda word: word.upper())
    print(s3.collect())
    # s3.saveAsTextFile('C:\\Users\\Gui\\Desktop\\canary_test')
except ImportError as e:
    print ("Can not import Spark Modules", e)
    sys.exit(1)