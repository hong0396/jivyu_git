import pandas as pd
import pymysql
conn = pymysql.connect(host='127.0.0.1', port=3306, user='root', passwd='123456', db='db1')
cursor = conn.cursor()
# cursor.execute("DROP TABLE IF EXISTS test")#必须用cursor才行

sql = "select * from user"
df = pd.read_sql(sql,conn,)
aa=pd.DataFrame(df)
print aa