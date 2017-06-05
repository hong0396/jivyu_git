import requests


url = 'http://sc.ftqq.com/SCU8633Ta29cf12dceeb8e5862925c0c9fc5b81e59269ff8df117.send'


requests.post(url, data={'text':'ceshi','desp':'内容'})

requests.get(url+"?text='.urlencode('主人第250号简历分析失败啦~')")