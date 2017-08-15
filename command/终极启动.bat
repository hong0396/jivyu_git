netsh interface set interface name="无线网络连接" admin=disable
@ping 127.0.0.1 -n 10 -w 1000 > nul
netsh interface set interface name="无线网络连接" admin=enable
@ping 127.0.0.1 -n 10 -w 1000 > nul
netsh wlan stop hostednetwork
@ping 127.0.0.1 -n 10 -w 1000 > nul
netsh wlan start hostednetwork
