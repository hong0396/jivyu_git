def test(a,*args,**kwargs):
    print(a)
    print(args)
    print(kwargs)

#test(1,2,3,d='4',e=5)

# 可以看到，这两个是python中的可变参数。*args表示任何多个无名参数，它是一个tuple；
# **kwargs表示关键字参数，它是一个dict。
# 并且同时使用*args和**kwargs时，必须*args参数列要在**kwargs前，
# 像foo(a=1, b='2', c=3, a', 1, None, )这样调用的话，' \
#  '会提示语法错误“SyntaxError: non-keyword arg after keyword arg”。


def foo(*args, **kwargs):
    print('args = ', args)
    print('kwargs = ', kwargs)
    print('---------------------------------------')

if __name__ == '__main__':
    foo(1,2,3,4)
    foo(a=1,b=2,c=3)
    foo(1,2,3,4, a=1,b=2,c=3)
    foo('a', 1, None, a=1, b='2', c=3)

# 呵呵，知道*args和**kwargs是什么了吧。还有一个很漂亮的用法，就是创建字典：
#
#     def kw_dict(**kwargs):
#         return kwargs
#     print kw_dict(a=1,b=2,c=3) == {'a':1, 'b':2, 'c':3}
# 其实python中就带有dict类，使用dict(a=1,b=2,c=3)即可创建一个字典了。



#args是神马，就是所有参数的数组

#kwargs就是当你传入key=value是存储的字典
