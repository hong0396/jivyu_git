from impala.dbapi import connect
conn = connect(host='172.16.8.18', port=21050)
cursor = conn.cursor()
cursor.execute('select * from sptcc_dm.TBL_EDW_DM_OD_ORBIT limit 10 ;')

results = cursor.fetchall()

