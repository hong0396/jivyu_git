import itchat

# itchat.auto_login()
# itchat.send('Hello, filehelper', toUserName='filehelper')

itchat.auto_login(hotReload=True)
itchat.send(u'测试消息发送', 'filehelper')





# @itchat.msg_register(itchat.content.TEXT)
# def text_reply(msg):
#     return msg['Text']
#
# itchat.auto_login()
# itchat.run()