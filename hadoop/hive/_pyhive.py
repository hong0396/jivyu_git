# from pyhive import presto  # or import hive
# cursor = presto.connect('172.16.8.13', port='28080').cursor()
# cursor.execute('show tables;' )
# print(cursor.fetchone())
# print(cursor.fetchall())
#





from sqlalchemy import *
from sqlalchemy.engine import create_engine
from sqlalchemy.schema import *
# Presto
engine = create_engine('presto://c1:28080/hive/default')