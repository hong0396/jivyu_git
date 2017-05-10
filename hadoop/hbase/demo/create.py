from starbase import Connection

c = Connection(host='172.16.8.17', port=8080)

t = c.table('test')

sql='select * from sptcc_soa.TBL_EDW_SOA_FTJ'
tjrlcardno


import pyodbc

def hive(sql):
	con = pyodbc.connect('DSN=mic_hive;charset=utf8',ansi=True,autocommit=True)
	cursor = con.cursor()
	cursor.execute('set hive.cli.print.header=true;')
	cursor.commit()
	cursor.execute(sql)
	row = cursor.fetchall()
	col =row[0].cursor_description
	head=[]
	for i in range(len(col)):
		head.append(col[i][0])
	list=[]
	for i in row:
		list.append(i)
	cursor.close()
	con.close()
	return head, list
