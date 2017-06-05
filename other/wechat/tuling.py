import itchat, time, re,requests,json
import urllib




@itchat.msg_register(itchat.content.TEXT)
def text_reply(msg):
    text = msg['Text']
    print(text)
    url  = 'http://openapi.tuling123.com/openapi/api'
    data = {"key":"68aadcc49e3e4804ae511028516ddd8a","info":str(text)}
    respon = requests.post(url,data).content
    js=json.loads(str(respon,encoding='utf-8'))
    #if js['code'] == 100000:
    print(js['text'])
    print(msg['FromUserName'])
    #itchat.send(js['text'],toUserName='filehelper')
    itchat.send(js['text'])
    itchat.send(js['text'], msg['FromUserName'])

    #itchat.send(respon,)



#itchat.auto_login(enableCmdQR=2, hotReload=True)
itchat.auto_login()
itchat.run()
#itchat.run(debug=True)
##itchat.send(u'测试消息发送', 'filehelper')



