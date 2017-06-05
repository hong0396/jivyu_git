from flask import Flask, flash,   render_template,  request
import tuling

app = Flask(__name__)


@app.route('/')
def hello():
    return render_template("index.html")



@app.route('/test2', methods=['POST', 'GET'] )
def hellot():
    form = request.form
    message = form.get("value")
    print(message)
    text = tuling.robit(message)
    html = '<li id="left">'+text+'</li>'
    return html



#
# @app.errorhandler(404)
# def not_found():
#     return render_template("404.html")


if __name__ == '__main__':
    app.run(debug=True)
