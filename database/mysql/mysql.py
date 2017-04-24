import pymysql

conn = pymysql.connect(host='localhost', port=3306, user='root', passwd='guihong',db='datebase')
cur = conn.cursor()

# cur.execute("")
#
# for r in cur.fetchall():
#
#            print(r)

cur.close()
conn.close()