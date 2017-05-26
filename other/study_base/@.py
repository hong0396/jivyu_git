def funA(arg):
    print('A')
    a=arg()

@funA
def funB():
    print('B')


def makebold(fn):
    def wrapped():
        return "<b>" + fn() + "</b>"

    return wrapped


def makeitalic(fn):
    def wrapped():
        return "<i>" + fn() + "</i>"

    return wrapped


@makebold
@makeitalic
def hello():
    return "hello world"
