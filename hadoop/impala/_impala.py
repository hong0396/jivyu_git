

from impala.dbapi import connect
from impala.util import as_pandas
import csv
import pandas as pd
conn = connect(host='172.16.8.13', port=21050)
cursor = conn.cursor()
cursor.execute('SHOW TABLES')
df = as_pandas(cursor)
type(df)

cursor.close()
conn.close()
