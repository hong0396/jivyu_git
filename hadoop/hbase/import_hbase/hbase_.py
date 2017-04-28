import time
from _hive import *
from starbase import Connection

def hbase(sql, table):
    #start = time.clock()
    c = Connection(host='172.16.8.17', port=8080)
    head, list = hive(sql)
    t = c.table(table)
    if t.exists():
        t.drop()
    t.create('column')
    for i in range(len(list)):
        dic = dict(zip(head, list[i]))
        tem = {'column': dic}
        t.insert(str(i), tem)
    #end = time.clock()
   # print("read: %f s" % (end - start))



sql = ' select * from sptcc_dm.tbl_edw_dpa_dim_posgroup'
hbase(sql, 'test2')








# t.exists()
# t.columns()
# t.add_columns('column4', 'column5', 'column6', 'column7')
# t.drop_columns('column5','column6', 'column7')
#
# t.insert(
#     'my-key-1',
#     {
#         'column1': {'key11': 'value 11', 'key12': 'value 12',
#                     'key13': 'value 13'},
#         'column2': {'key21': 'value 21', 'key22': 'value 22'},
#         'column3': {'key32': 'value 31', 'key32': 'value 32'}
#     }
#     )
# t.update(
#     'my-key-1',
#     {'column4': {'key41': 'value 41', 'key42': 'value 42'}}
#     )
#
# # #t.drop()
# print(c.tables())
