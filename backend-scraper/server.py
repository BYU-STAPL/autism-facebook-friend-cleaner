from flask import Flask, request, jsonify
from scraper import get_user

app = Flask(__name__)


@app.route('/')
def index():
    return '<p>STaPL FB profile information server</p>'


@app.route('/user_info')
def get_user_info():
    content = request.json
    response = [get_user(user) for user in content['users']]
    return jsonify(response)
