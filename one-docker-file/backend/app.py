import os
import datetime
from flask import Flask, jsonify, send_from_directory
from flask_cors import CORS

FLASK_ENV = os.environ.get('FLASK_ENV', 'development')

app_config = {}
if FLASK_ENV == 'production':
    app_config['static_folder'] = 'dist'
    app_config['static_url_path'] = ''

app = Flask(__name__, **app_config)

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
    date = datetime.datetime.now()
    return jsonify({
        'message': 'Hello from python!',
        'date': date
    })
