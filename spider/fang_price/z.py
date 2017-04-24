import pandas as pd
import pymysql
import  requests
import  re
from bs4 import BeautifulSoup

def parse(url):
    res = requests.get(url)
    if res.status_code == 200:
        return res.text
    return None
    #res.encoding = 'utf-8'
    soup = BeautifulSoup(res.text, 'lxml')
    # sumlin = soup.find('a', "laisuzhou").next_element
    # sumlink = soup.find('a', "laisuzhou").next_sibling
    # umli = soup.find('a', "laisuzhou").next_sibling.next_sibling
    # for li in sumlin:
    #     print(repr(li))
    #     #print(repr(sumli))
    _list=[]
    sumlin = soup.find_all('div', "info")
    #data=soup.find('div', "info").find_previous_sibling().find('img')
   # print(data)

    for i in sumlin:
        list=[]
        data=i.find_previous_sibling().find('img')
        text=str(data["data-img-layout"])
        m=re.search('\d{8}', text)
        if m:
            list.append(m.group(0))
        else:
            list.append(' ')
        #print(data["alt"])
        price=i.find('div', "info-col price-item main")
        priceper = i.find('span', "info-col price-item minor")
        mianji = i.find('span', "info-col row1-text")
        list.append(i.find('a','laisuzhou').text)
        list.append(i.find('a','laisuzhou').find_next('a').text)
        list.append(i.find('a', 'laisuzhou').find_next('a').find_next('a').text)
        list.append(str(mianji.text).replace('\n', '').lstrip().rstrip().split('|')[0].strip())
        list.append(str(mianji.text).replace('\n', '').lstrip().rstrip().split('|')[1].strip())
        list.append(str(price.text).replace('\n', '').lstrip().rstrip().strip())
        _list.append(list)
    return _list

list=[]
url="http://sh.lianjia.com/ershoufang/d{}s7"
for i in range(1,101):
    urls=url.format(i)
    list+=parse(urls)
pan=pd.DataFrame(list, columns = ['date', 'xiaoqu', 'qu', 'weizi', 'room', 'large', 'mianji'])
print(pan.head())
#
#
# conn = pymysql.connect(host='127.0.0.1', port=3306, user='root', passwd='123456', db='db1')
# cursor = conn.cursor()
# cursor.execute("DROP TABLE IF EXISTS test")#必须用cursor才行
#
# sql = "insert into table  lianjia  "
# df = pd.read_sql(sql,conn,)
# aa=pd.DataFrame(df)
# print aa