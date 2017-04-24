import happybase

connection = happybase.Connection(host='172.16.8.17', port=9090)
connection.open()
#table = connection.table('member')
#row = table.row('row-key')
print(connection.tables())