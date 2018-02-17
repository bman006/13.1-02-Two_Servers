var http = require(`http`);

var PORTcolor = 7000;
var PORTsong = 7500;


function handleRequestColor(request, response) {
    response.end(`My favorite color is green`);
}

function handleRequestSong(request, response) {
    response.end(`My favorite song is Gimme Danger`);
}

var serverColor = http.createServer(handleRequestColor);
var serverSong = http.createServer(handleRequestSong);

serverColor.listen(PORTcolor, function() {
});

serverSong.listen(PORTsong, function() {
});