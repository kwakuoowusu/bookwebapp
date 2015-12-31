var express = require('express');
var server = express();
var getIP= require('ipware')().get_ip;
var connected = true;
server.use(function(req, res, next) {
	if(connected){
	var ipInfo = getIP(req);
    console.log("Client connected")
    console.log(ipInfo);
    connected=false;
	}
    console.log(req.url);
    next();
});
server.use(express.static(__dirname + '/public'));
connected = true;
var port = 9586;
server.listen(port,'192.168.1.132', function() {
    console.log('server listening on port ' + port);
});