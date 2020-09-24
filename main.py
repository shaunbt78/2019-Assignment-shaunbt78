import flask
from flask import request, jsonify, render_template
from flask_cors import CORS, cross_origin

app = flask.Flask(__name__)
cors = CORS(app)
app.config["DEBUG"] = True
app.config['CORS_HEADERS'] = 'Content-Type'

# use the user data from req res in

usrlst = [
    {"id": 1, "email": "george.bluth@reqres.in", "first_name": "George", "last_name": "Bluth",
     "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg"},
    {"id": 2, "email": "janet.weaver@reqres.in", "first_name": "Janet", "last_name": "Weaver",
     "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg"},
    {"id": 3, "email": "emma.wong@reqres.in", "first_name": "Emma", "last_name": "Wong",
     "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/olegpogodaev/128.jpg"},
    {"id": 4, "email": "eve.holt@reqres.in", "first_name": "Eve", "last_name": "Holt",
     "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg"},
    {"id": 5, "email": "charles.morris@reqres.in", "first_name": "Charles", "last_name": "Morris",
     "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/stephenmoon/128.jpg"},
    {"id": 6, "email": "tracey.ramos@reqres.in", "first_name": "Tracey", "last_name": "Ramos",
     "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/bigmancho/128.jpg"},
    {"id": 7, "email": "michael.lawson@reqres.in", "first_name": "Michael", "last_name": "Lawson",
     "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/follettkyle/128.jpg"},
    {"id": 8, "email": "lindsay.ferguson@reqres.in", "first_name": "Lindsay", "last_name": "Ferguson",
     "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/araa3185/128.jpg"},
    {"id": 9, "email": "tobias.funke@reqres.in", "first_name": "Tobias", "last_name": "Funke",
     "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/vivekprvr/128.jpg"},
    {"id": 10, "email": "byron.fields@reqres.in", "first_name": "Byron", "last_name": "Fields",
     "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/russoedu/128.jpg"},
    {"id": 11, "email": "george.edwards@reqres.in", "first_name": "George", "last_name": "Edwards",
     "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/mrmoiree/128.jpg"},
    {"id": 12, "email": "rachel.howell@reqres.in", "first_name": "Rachel", "last_name": "Howell",
     "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/hebertialmeida/128.jpg"}
]

usrs = {'jimbob1995': 'softwareDev', 'katyP2001': 'hardwareDev', 'shaunbt': 'Janitor'}


@app.route('/')
def mainusershome():
    return app.send_static_file('users.html')


@app.route('/js/<reqfile>')
def getjs(reqfile):
    return app.send_static_file('js/' + reqfile)


@app.route('/api/users', methods=['GET'])
def get_users():
    pagenum = int(request.args['page']) - 1
    usrshort = usrlst[pagenum * 6:(pagenum + 1) * 6 - 1]

    return jsonify({"per_page": 6,
                    "page": pagenum + 1,
                    "total": len(usrlst),
                    "total_pages": (len(usrlst) + 5) // 6,
                    "data": usrshort})


@app.route('/api/users/<usrid>', methods=['GET'])
def getuser(usrid):
    if len(usrid) == 0:
        return get_users()
    usridint = int(usrid) - 1
    if usridint < len(usrlst):
        usr = usrlst[usridint]
        return jsonify({"data": usr})
    else:
        return "user not found. Please try another ID"


@app.route('/api/users/', methods=['POST'])
def createusr():
    username = request.form['name']
    job = request.form['job']
    usrs[username] = job
    return usrs[username], 201


@app.route('/users/<usrname>', methods=['GET'])
def getusername(usrname):
    if usrname in usrs:
        job = usrs[usrname]
        complete = {'username': usrname, 'job': job}
        return jsonify(complete)
    else:
        return "user not found. Please try another username"


@app.route('/api/users/<usrid2>', methods=['DELETE'])
def deleteusr(usrid2):
    if len(usrid2) == 0:
        return get_users()
    usridint = int(usrid2) - 1
    if usridint < len(usrlst):
        del usrlst[usridint]
        return '', 204
    else:
        return "user not found. Please try another ID", 404


@app.route('/api/users/<usrid2>', methods=['PUT'])
def updateusr(usrid2):
    if len(usrid2) == 0:
        return get_users()
    usridint = int(usrid2) - 1
    if usridint < len(usrlst):
        usrid = request.form['id']
        usremail = request.form['email']
        usrfirst = request.form['first_name']
        usrlast = request.form['last_name']
        complete = {'id': usrid, 'email': usremail, 'first_name': usrfirst, 'last_name': usrlast}
        usrlst[usridint] = complete
        return jsonify(complete), 200
    else:
        return "user not found. Please try another ID", 404


app.run()
