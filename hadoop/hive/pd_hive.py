import pyodbc
import pandas as pd
con = pyodbc.connect('DSN=mic_hive;charset=utf8',ansi=True,autocommit=True)
cursor = con.cursor()
##.execute("SELECT  * FROM sptcc_dm.tbl_edw_dm_ats_cust")
##cursor.execute("select * from sptcc_dm.TBL_EDW_DM_OD_ORBIT where od_begin_cd<>od_end_cd limit 100")

sql ='''
select a.tjrlrdate,   a.start_station, b.station_name as end_station,  a.count from
(select a.tjrlrdate,   b.station_name as start_station, a.tjrlstatid_nxt ,a.count from
(select a.tjrlrdate,   a.tjrlstatid, a.tjrlstatid_nxt , count(*) as count
  from sptcc_soa.tbl_edw_soa_ftj a   where a.tjrlrdate = 20150302 and a.ind_code = 1  and a.tjrlpostkind = '1'
 group by a.tjrlrdate,   a.tjrlstatid, a.tjrlstatid_nxt) a , sptcc_dpa.TBL_EDW_DPA_DIM_LINE_STATION b
 where cast(station_id as int) = a.tjrlstatid)  a , sptcc_dpa.TBL_EDW_DPA_DIM_LINE_STATION b
 where cast(station_id as int) = a.tjrlstatid_nxt
'''


#
# sql ='''
# select a.tjrlrdate,  a.tjrlbusyflag, a.start_station, b.station_name as end_station,  a.count from
# (select a.tjrlrdate,  a.tjrlbusyflag, b.station_name as start_station, a.tjrlstatid_nxt ,a.count from
# (select a.tjrlrdate,  a.tjrlbusyflag, a.tjrlstatid, a.tjrlstatid_nxt , count(*) as count
#   from sptcc_soa.tbl_edw_soa_ftj a   where a.tjrlrdate = 20150302 and a.ind_code = 1  and a.tjrlpostkind = '1'
#  group by a.tjrlrdate,  a.tjrlbusyflag, a.tjrlstatid, a.tjrlstatid_nxt) a , sptcc_dpa.TBL_EDW_DPA_DIM_LINE_STATION b
#  where cast(station_id as int) = a.tjrlstatid)  a , sptcc_dpa.TBL_EDW_DPA_DIM_LINE_STATION b
#  where cast(station_id as int) = a.tjrlstatid_nxt
# '''
# #
# select a.* from sptcc_dm.TBL_EDW_DM_OD_ORBIT a, sptcc_dpa.tbl_edw_dpa_dim_date b
# where a.od_begin_cd<>a.od_end_cd  and a.DM_DATE=b.DATE_ID and b.work_day_flag = 1
# limit 10


df = pd.read_sql(sql,con,)
aa=pd.DataFrame(df)
aa.to_csv("dae.csv")


# cursor.execute(sql)
# row = cursor.fetchall()
# for i in row:
#     print(i)


cursor.close()
con.close()

