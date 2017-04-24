from starbase import Connection

c = Connection(host='172.16.8.17', port=8080)
print(c.tables())
#t = c.table('test')
#t.create('column1', 'column2', 'column3')







