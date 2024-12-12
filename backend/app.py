from flask import Flask, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/')
def index():
    return '<h1>Hello, World</h1>'

if __name__ == '__main__':
    app.run(debug=True)