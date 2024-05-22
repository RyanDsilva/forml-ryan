import os
from flask import Flask, Response, request, jsonify
from flask_socketio import SocketIO, emit
from flask_cors import CORS
from dotenv import load_dotenv
from errors import errors
from random import randint, uniform
from flask_caching import Cache

load_dotenv()

config = {"DEBUG": True, "CACHE_TYPE": "SimpleCache", "CACHE_DEFAULT_TIMEOUT": 300}

app = Flask(__name__)
app.register_blueprint(errors)
app.config["SECRET_KEY"] = os.environ.get("SECRET_KEY")
app.config.from_mapping(config)
cache = Cache(app)

CORS(app, resources={r"/*": {"origins": "*"}})

socketio = SocketIO(app, cors_allowed_origins="*")


@app.route("/", methods=["GET"])
def home():
    return Response("Up!", status=200)


@cache.cached(timeout=50, key_prefix="combinations")
@app.route("/api/crack_safe", methods=["POST"])
def crack_safe_post():
    if not request.json["actual_combination"]:
        return jsonify({"status": 404, "error_code": "INVALID_INPUT"})
    return jsonify(
        {"attempts": randint(100, 10000), "time_taken": uniform(10.01, 30.01)}
    )


@socketio.on("connect")
def connected():
    print(f"{request.sid} connected")
    emit("connect", {"data": f"id: {request.sid} is connected"})


@socketio.on("crack_safe")
def handle_message(data):
    for i in range(0, 1000, 25):
        emit("crack_safe_response", {"attempts": i}, broadcast=True)


@socketio.on("disconnect")
def disconnected():
    print("disconnected")


if __name__ == "__main__":
    socketio.run(app, debug=True, port=5001)
