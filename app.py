import os
from flask import Flask, jsonify, send_from_directory
from flask_cors import CORS

if os.environ['FLASK_DEBUG'] == '0':
    FLASK_ENV = 'production'
    app = Flask(__name__, static_folder='dist', static_url_path='')
else:
    FLASK_ENV = 'development'
    app = Flask(__name__)

cors = CORS(app, resources={r"*": {"origins": "*"}})

@app.route("/")
def home():
    """Access production build.

    This is needed in order to access the production build
    on the server.
    """
    if FLASK_ENV == 'production':
        return send_from_directory(app.static_folder, 'index.html')

@app.route("/example")
def example():
    return jsonify("Hello from python!")
