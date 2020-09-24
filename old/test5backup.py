import flask
from flask import request, jsonify
from flask_cors import CORS, cross_origin


app = flask.Flask(__name__)
cors = CORS(app)
app.config["DEBUG"] = True
app.config['CORS_HEADERS'] = 'Content-Type'

# use the user data from req res in

userspg1 = {"page":1,"per_page":6,"total":12,"total_pages":2,"data":[{"id":1,"email":"george.bluth@reqres.in","first_name":"George","last_name":"Bluth","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg"},{"id":2,"email":"janet.weaver@reqres.in","first_name":"Janet","last_name":"Weaver","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg"},{"id":3,"email":"emma.wong@reqres.in","first_name":"Emma","last_name":"Wong","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/olegpogodaev/128.jpg"},{"id":4,"email":"eve.holt@reqres.in","first_name":"Eve","last_name":"Holt","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg"},{"id":5,"email":"charles.morris@reqres.in","first_name":"Charles","last_name":"Morris","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/stephenmoon/128.jpg"},{"id":6,"email":"tracey.ramos@reqres.in","first_name":"Tracey","last_name":"Ramos","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/bigmancho/128.jpg"}],"ad":{"company":"StatusCode Weekly","url":"http://statuscode.org/","text":"A weekly newsletter focusing on software development, infrastructure, the server, performance, and the stack end of things."}}

userspg2 = {"page":2,"per_page":6,"total":12,"total_pages":2,"data":[{"id":7,"email":"michael.lawson@reqres.in","first_name":"Michael","last_name":"Lawson","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/follettkyle/128.jpg"},{"id":8,"email":"lindsay.ferguson@reqres.in","first_name":"Lindsay","last_name":"Ferguson","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/araa3185/128.jpg"},{"id":9,"email":"tobias.funke@reqres.in","first_name":"Tobias","last_name":"Funke","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/vivekprvr/128.jpg"},{"id":10,"email":"byron.fields@reqres.in","first_name":"Byron","last_name":"Fields","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/russoedu/128.jpg"},{"id":11,"email":"george.edwards@reqres.in","first_name":"George","last_name":"Edwards","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/mrmoiree/128.jpg"},{"id":12,"email":"rachel.howell@reqres.in","first_name":"Rachel","last_name":"Howell","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/hebertialmeida/128.jpg"}],"ad":{"company":"StatusCode Weekly","url":"http://statuscode.org/","text":"A weekly newsletter focusing on software development, infrastructure, the server, performance, and the stack end of things."}}


@app.route('/', methods=['GET'])
def home():
    return '''<h1>Users Backend</h1>
<p>by Shaun BT.</p>'''


@app.route('/api/users', methods=['GET'])
def page_id():
    if 'page' in request.args:
        page = int(request.args['page'])
        if page == 1:
            return jsonify(userspg1)
        if page == 2:
            return jsonify(userspg2)
    else:
        return "Error: No id"


@app.route('/api/users/<id>', methods=['GET'])
def get(user_id):
    idusr = int(request.args['id'])
    results = []
    for user in userspg1.data:
        if user['id'] == idusr:
            results.append(user)
            response = user
            response.status_code = 200
    return response


app.run()
