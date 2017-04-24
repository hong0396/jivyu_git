from pyspark import SparkContext
import numpy as np
sc=SparkContext('local','appname')
rdd1=sc.textFile('/home/kiki/soft/python/PSoft/allyears2k.csv').map(lambda x:x.split(','))
rdd_data1=rdd1.map(lambda f:(f[0],f[1],f[2],f[3],f[8]))
rdd_data2=rdd_data1.map(lambda x:(str(x[0])+'_'+str(x[1]),x[2]))
rdd_data3=rdd_data2.groupByKey()
rdd_data4=rdd_data3.map(lambda x:(x[0],list(x[1])))
def pingjia(d):
    l=len(d)
    y=list(np.zeros(l))
    z=list(np.ones(l))
    i=0
    while 1:
       j=i
       while j<l and d[j]<='15':
           j+=1
       y[i]=j-i
       if y[i]<=100:
           for k in range(i,j):
                z[k]=np.exp(y[i])
       else:
           for h in range(i,j):
                z[h]=np.exp(100)
       i=j+1
       if i>=l:break
    z=list(z)
    return z
rdd_data5=rdd_data4.map(lambda x:(x[0],pingjia(x[1])))

def fun(ping_list):
    length=len(ping_list)
    zz = list(np.ones(np.ceil(length / (100*0.1))))
    k = 0
    g = 0
    while 1:
        zz[g] = np.mean(ping_list[k:(k + 100)])
        g += 1
        k = k + 100
        if k > len(ping_list):
            break
    return zz
rdd_data6=rdd_data5.map(lambda x:(x[0],fun(x[1])))
def myfun(f):
    l=f[1]
    l1=[]
    for i in range(len(l)):
        l1.append((f[0].split('_')[0],f[0].split('_')[1],l[i],i))

    return l1
rdd_data7=rdd_data6.flatMap(lambda fields:myfun(fields))
print(rdd_data6.take(2))
print(rdd_data7.take(2))
rdd_data7.saveAsTextFile('/home/kiki/soft/python/PSoft/fenduan')

def fun_mean(myList):
    mean1 = np.mean(myList)
    base_line = (np.exp(4) + 6) / 10
    exp4 = np.exp(4) / 4
    if mean1 >= base_line:
        return mean1
    elif myList[0] < exp4 and myList[-1] < exp4:
        return mean1
    else:
        med = np.floor(len(myList) / 2)
        left = myList[0:med]
        right = myList[med:]
        sum = 0
        for i in left[::-1]:
            if i < exp4:
                sum += i
            else:
                sum += i*4;break
        for j in right:
            if j < exp4:
                sum += j
            else:
                sum += j*4;break
        return sum / len(myList)
rdd_data8=rdd_data5.map(lambda x:(x[0].split('_')[0],x[0].split('_')[1],fun_mean(x[1])))
print(rdd_data8.collect())
rdd_data8.saveAsTextFile('/home/kiki/soft/python/PSoft/mean')







