import pyodbc
con = pyodbc.connect('DSN=mic_hive;charset=utf8',ansi=True,autocommit=True)
cursor = con.cursor()
##.execute("SELECT  * FROM sptcc_dm.tbl_edw_dm_ats_cust")
##cursor.execute("select * from sptcc_dm.TBL_EDW_DM_OD_ORBIT where od_begin_cd<>od_end_cd limit 100")
sql ='''
 select * from sptcc_dm.tbl_edw_dpa_dim_posgroup
'''
#
# select a.* from sptcc_dm.TBL_EDW_DM_OD_ORBIT a, sptcc_dpa.tbl_edw_dpa_dim_date b
# where a.od_begin_cd<>a.od_end_cd  and a.DM_DATE=b.DATE_ID and b.work_day_flag = 1
# limit 10

cursor.execute(sql)
row = cursor.fetchall()
for i in row:
    print(i)
cursor.close()
con.close()

