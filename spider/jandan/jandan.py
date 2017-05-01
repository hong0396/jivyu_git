import  requests
from  urllib  import  request
import  re
import json
from  bs4 import BeautifulSoup
from urllib.request import urlretrieve
import imageio
import shutil
from multiprocessing import Pool
#from images2gif import writeGif
import  os
meiziurl="http://www.meizitu.com/"
janurl="http://jandan.net/ooxx/page-{}#comments"
headers = {  'User-Agent':'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko)'
                 ' Chrome/32.0.1700.76 Safari/537.36'
}
#writeGif(filename, images, duration=0.5, subRectangles=False)
def janmei(url):
    res=requests.get(url, headers=headers)
    soup = BeautifulSoup(res.content, 'lxml')
    lis=soup.find_all('img')
    for i in lis:
        img=str(i['src'])
        gif = i.get('org_src')
        html = requests.get('http:' + img, headers=headers)
        name = img.split(r'/')[-1]
        if not os.path.exists("E:\\picture\\"+name) :
            if gif:
                print('---------正在写入gif--------------')
                with open("E:\\picture\\"+name, 'wb') as f:
                    f.write(requests.get('http:' + gif, headers=headers).content)
                    f.close()
                print('---------写入完成gif--------------')
            else:
                print('---------正在写入jpg--------------')
                with open("E:\\picture\\"+name, 'ab') as file:
                    file.write(html.content)
                    file.close()
                print('---------写入完成jpg--------------')





        # html = requests.get('http:'+img, stream=True)
        # name=img.split(r'/')[-1]
        # print('http:'+img)
        #if str(name).split('.')[-1] == 'gif':
            # with open(name, 'wb') as f:
            #     f.write(requests.get('http:'+img).content)
            #     f.close()
            # with open(name, 'wb') as f:
            #     html.raw.decode_content = True
            #     shutil.copyfileobj(html.raw, f)
            #     f.close()

            # with imageio.get_writer(name, mode='I') as writer:
            #         image = imageio.imread(html.content)
            #         writer.append_data(image)

             #with Image.open(name, 'wb') as file:
                 #gifmaker.makedelta(file, html.content)
                 #.save('filename.gif', save_all=True)
        #        file.close()
        # else:
        #     with open(name, 'ab') as file:
        #         file.write(html.content)
        #         file.close()




def page():
    res=requests.get('http://jandan.net/ooxx',headers=headers)
    soup = BeautifulSoup(res.content, 'lxml')
    lis=soup.find('span','current-comment-page').string.replace('[','').replace(']','')
    return lis

    #for i in range(len(lis)):
        #print(lis[i]['src'])
        # img = str(lis[i]['src'])
        # urlretrieve(str(lis[i]['src']), img.split(r'/')[-1])
        #html = requests.get(lis[i]['src'], stream=True)
        # with open('meizipicture'+str(i)+'.jpg', 'wb+') as f:
        #     for chunk in html.iter_content(chunk_size=1024):
        #         if chunk:  # filter out keep-alive new chunks
        #             f.write(chunk)
        #             f.flush()
        #     f.close()


        # urllib.request.urlretrieve(html, 'D:\%s.jpg' % x)
        # x += 1
#mei(meiziurl)urls

#janmei(janurl.format(24))

#
if __name__ == '__main__':
    page=int(page())
    pool = Pool()
    pool.map(janmei,[ janurl.format(i)  for i in range(1,page+1)])
    # for i in range(1,page+1):
    #     urls = janurl.format(i)
    #     janmei(urls)
