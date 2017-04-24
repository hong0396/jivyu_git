import pyodbc
con = pyodbc.connect('DSN=mic_hive;charset=utf8',ansi=True,autocommit=True)
cursor = con.cursor()
##.execute("SELECT  * FROM sptcc_dm.tbl_edw_dm_ats_cust")
cursor.execute("select * from sptcc_dm.TBL_EDW_DM_OD_ORBIT limit 10")
row = cursor.fetchall()
for i in row:
    print(i)
cursor.close()
con.close()

