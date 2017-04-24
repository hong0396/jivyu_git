import pymysql
import tushare as ts
import pandas as pd

conn = pymysql.connect(host='localhost', port=3306, user='root', passwd='guihong',db='datebase')
cur = conn.cursor()
sql = 'create table stock_basics  '
df = ts.get_stock_basics()
df.to_sql("stock_basics", conn, if_exists='replace')

cur.close()
conn.close()