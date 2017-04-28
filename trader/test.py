import easytrader
import requests

headers = {
"Accept-Encoding":"gzip, deflate, br",
"Accept-Language":"zh-CN,zh;q=0.8",
"Connection":"keep-alive",
"Content-Length":"0",
"Cookie":"s=fb1ifv92vd; webp=0; bid=1bb2f5fa86a17a849cfda41df0d672fb_j1zsvgld; snbim_minify=true; xq_a_token.sig=OfkwBmKBwnYETfT5NOuElwVwhBY; xq_r_token.sig=LV5APomGXuF1PJGnH9SmAPdxYHc; xq_a_token=dfd3378d3a6754292a9619fd1a5b42b7c4971aea; xqat=dfd3378d3a6754292a9619fd1a5b42b7c4971aea; xq_r_token=81503f54e6e036b3b264dfa08d3ea04c381bff50; xq_token_expire=Mon%20May%2022%202017%2014%3A08%3A49%20GMT%2B0800%20(CST); xq_is_login=1; u=5138025282; Hm_lvt_1db88642e346389874251b5a1eded6e3=1493260664,1493262653,1493262654,1493273266; Hm_lpvt_1db88642e346389874251b5a1eded6e3=1493273945",
"Host":"im2.xueqiu.com",
"Origin":"https://im2.xueqiu.com",
"Referer":"https://im2.xueqiu.com/proxy2.html",
"User-Agent":"Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.81 Safari/537.36" }
r = requests.post('https://im2.xueqiu.com/im-comet/v2/notifications/3398273/ping.json?user_id=5138025282', headers=headers)
#
#
#
# xq_follower = easytrader.follower('xq') # 还支持 'jq'
# xq_follower.login(user='xq 用户名', password='xq 密码')
#
# # 关联 用户 和 组合 并开始跟踪
# xq_follower.follow(xq_user, 'xq 组合 ID ，类似 ZH123456')


#
# # 登录 easytrader 支持的用户，以 银河证券 为例
# yh_user = easytrader.use('yh')
# yh_user.prepare(user='yh 账号', password='yh 密码'）
#
# # 创建 雪球组合 的 follower