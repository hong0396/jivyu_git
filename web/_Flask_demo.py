from flask import Flask
app = Flask(__name__)


@app.route('/')
def index():
 return '<h1>Hello World!</h1>'


@app.route('/user/<name>', methods=['GET'])
def user(name):
 return '<h1>Hello, %s!</h1>' % name

@app.route('/test')
def test():
    return 'this is response'

if __name__ == '__main__':
 app.run(debug=True)

