from flask import Flask
app = Flask(__name__)

@app.route("/")
def hello():
  return "Hello World from Flask in a uWSGI Nginx Docker container with Python 3.6 (default)"
