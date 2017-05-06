def h():
    print('To be brave')
    yield 5
a = (x*x for x in range(3))
#生成器是迭代器，但你只能遍历它一次(iterate over them once)
#因为生成器并没有将所有值放入内存中，而是实时地生成这些值
# 这和使用列表解析地唯一区别在于使用()替代了原来的[]
# 注意，你不能执行for i in mygenerator第二次，因为每个生成器只能被使用一次:
# 计算0，并不保留结果和状态，接着计算1，然后计算4，逐一生成
for i in a:
    print(i)
for i in a:
    print(i+1)

# yield是一个关键词，类似return, 不同之处在于，yield返回的是一个生成器

def createGenerator():
    mylist = range(3)
    for i in mylist:
        yield i*i
mygenerator = createGenerator() # create a generator
print(mygenerator)
for i in mygenerator:
    print(i)