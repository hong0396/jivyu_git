import cx_Oracle

conn = cx_Oracle.connect('otcs/dwotcs@172.16.8.16:1521/oraapp1')
cursor = conn.cursor()
sql = """
select distinct  a.tjrlcardno,  substr(lpad(a.tjrltime_pre, 6,'0'),  0,  2) as hour,
round((to_date(lpad(a.tjrlrtime, 6, '0'),'hh24miss')-to_date(lpad(a.tjrltime_pre, 6, '0'),'hh24miss')) * 24, 5)  as  time,
  '01'|| '_' ||lpad(a.tjrlstatid_pre, 4,'0') || '_' ||  lpad(a.tjrlstatid, 4, '0') as line ,
  count(*) over(partition by a.tjrlcardno,  substr(lpad(a.tjrltime_pre, 6,'0'),  0,  2), a.tjrlstatid_pre, a.tjrlstatid) as ct
      from TBL_EDW_SOA_FTJ a  where a.tjrlinsid = '21' and a.ind_code = 1 and  a.tjrlpostkind = '1'
and a.tjrlstatid <> 0 and a.tjrlstatid_pre <> 0 and a.tjrlstatid_pre < 10000 and a.tjrlstatid < 10000
"""
cursor.execute(sql)
conn.commit()
cursor.close()
conn.close()