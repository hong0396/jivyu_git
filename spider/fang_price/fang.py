import  requests
from bs4 import BeautifulSoup
url="http://esf.sh.fang.com/"
def parse(url):
    res= requests.get(url)
    #res.encoding = 'utf-8'
    soup = BeautifulSoup(res.text, 'lxml')
    sumlink = soup.find_all('dd', 'info rel floatr')
    #print(sumlink)
    for lin in sumlink:
        #title=lin.find('p', 'title').text
        title = lin.find('p', 'mt10').find('span').text
        large=lin.find('div',"area alignR").find('p').text
        price=lin.find('div',"moreInfo").find('span','price').text
        print(title)
        print(large)
        print(price)
parse(url)
url2="http://esf.sh.fang.com/house/i3{}/"
for i in range(2,101):
    url3=url2.format(i)
    parse(url3)

