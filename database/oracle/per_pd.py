import cx_Oracle
import time
import copy
import pandas as pd
#conn = cx_Oracle.connect('afcsys/afcsys@172.16.8.16:1521/oraapp1')
conn = cx_Oracle.connect('acc/acc@130.252.86.13:1521/orcl')
cursor = conn.cursor()
sql = "select *  from  TBL_METRO_SUB_ROAD_base t where  t.pass_stations is not null  order by t.enter_id desc"
df = pd.read_sql(sql,conn,)
d=pd.DataFrame(df)

a=d['PASS_STATIONS']=d['PASS_STATIONS'].str.split(',',expand=True)
b=d['CHANGE_STATIONS']=d['CHANGE_STATIONS'].str[1:].str.split(',', expand=True)
print(a)
print(b)


















cursor.close()  # 关闭cursor
conn.close()  # 关闭连接
