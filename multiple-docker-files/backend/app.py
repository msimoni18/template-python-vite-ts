import socket
import datetime
from flask import Flask, jsonify
from flask_cors import CORS


app_config = {}
app = Flask(__name__, **app_config)

cors = CORS(app, resources={r"*": {"origins": "*"}})


@app.route("/example")
def example():
    date = datetime.datetime.now()
    return jsonify({
        'message': 'Hello from python!',
        'date': date,
        'hostname': socket.gethostname()
    })
