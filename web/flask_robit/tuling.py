import itchat, time, re, requests, json
import urllib


def robit(text):
    url= 'http://openapi.tuling123.com/openapi/api'
    data = {"key":"68aadcc49e3e4804ae511028516ddd8a","info":str(text)}
    respon = requests.post(url, data).content
    js=json.loads(str(respon, encoding='utf-8'))
    print(js['text'])
    return js['text']