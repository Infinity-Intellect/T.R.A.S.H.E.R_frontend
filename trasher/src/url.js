const production = false
var url = '';
if (production) {
    url = 'http://project-trasher.herokuapp.com/'
}
else {
    url = "http://172.16.11.208:3000/"
}

module.exports = url