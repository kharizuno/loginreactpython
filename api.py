from flask import Flask, jsonify, request
from flask_cors import CORS, cross_origin
from flask_mail import Mail, Message
import urllib
import requests
import json

app = Flask(__name__)
mail = Mail(app)

app.config['MAIL_SERVER']='smtp.mailgun.org'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USERNAME'] = 'testing@mg.skydu.net'
app.config['MAIL_PASSWORD'] = 'SkyduTest2018'
app.config['MAIL_USE_TLS'] = False
app.config['MAIL_USE_SSL'] = False
mail = Mail(app)

cosr = CORS(app)

@app.route("/", methods=['GET', 'POST'])
def index():
    if (request.method == 'POST'):
        data = request.get_json()
        if not data:
            data = request.form

        if 'email' in data:
            msg = Message('Hello', sender = ('Skydu', 'testing@mg.skydu.net'), recipients = [data['email']])
            msg.body = "Hello Flask message sent from Flask-Mail"
            mail.send(msg)

        return jsonify({'You sent': data}), 201
    else:
        return jsonify({"Welcome": "Hello World!"})

@app.route("/auth/social", methods=['POST'])
@cross_origin(allow_headers=['Content-Type'])
def auth():
    data = request.get_json()
    if not data:
        data = request.form

    if 'access_token' in data:
        token = data['access_token']
    else:
        token = data['token']

    fb_curl = 'https://graph.facebook.com/v2.10/me?fields=email,name,picture&access_token=' + token
    fb_response = requests.get(fb_curl)
    data = json.loads(fb_response.text)

    if 'email' in data:
        msg = Message('Welcome to the Skydu', sender = ('Skydu', 'testing@mg.skydu.net'), recipients = [data['email']])
        msg.body = "Hello ID " + data['id']
        mail.send(msg)
        
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)