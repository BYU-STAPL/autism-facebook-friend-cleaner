from flask import Flask, request, jsonify

app = Flask(__name__)


@app.route('/')
def index():
    return '<p>STaPL FB profile information server</p>'


@app.route('/user_info')
def get_user_info():
    content = request.json
    print(f'server got content: {content}')
    return jsonify({
        'key': 'value'
    })
