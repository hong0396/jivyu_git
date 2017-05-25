import phoenixdb
database_url = '172.16.8.17:8765'
conn = phoenixdb.connect(database_url, autocommit=True)
cursor = conn.cursor()
#cursor.execute("CREATE TABLE users (id INTEGER PRIMARY KEY, username VARCHAR)")
#cursor.execute("UPSERT INTO users VALUES (?, ?)", (1, 'admin'))
#cursor.execute("SELECT * FROM users")
#print(cursor.fetchall())
cursor.close()



#
# import jpype
# import jaydebeapi
# import os
# phoenix_client_jar="/data/users/huser/phoenix/phoenix-4.3.0-client.jar"
# args=='-Djava.class.path=%s'% phoenix_client_jar
# jvm_path=jpype.getDefaultJVMPath()
# jpype.startJVM(jvm_path,args)
# conn=jaydebeapi.connect('org.apache.phoenix.jdbc.PhoenixDriver',['jdbc:phoenix:bj-g2hdp1,bj-g2hdp2,bj-g2hdp3:2181','',''],phoenix_clinent_jar)
# curs=conn.cursor()
# sql="select * from test"
# count=curs.execute(sql)
# results=curs.fetchall()
# for r in results:
#     print r




