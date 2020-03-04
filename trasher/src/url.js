const production = false
var url = '';
if (production) {
    url = 'http://project-trasher.herokuapp.com/'
}
else {
    url = "http://192.168.56.1:3000/"
}

module.exports = url