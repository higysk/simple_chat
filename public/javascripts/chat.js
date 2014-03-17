$(function() {
	var socket = io.connect('http://192.168.56.101');
	socket.on('connect', function() {
		console.log('connected');
	});

	$('#btn').click(function() {
		var message = $('#message');
		console.log(message);
		socket.emit('msg send', message.val());
	});

	socket.on('msg push', function(msg) {
		console.log(msg);
		var date = new Date();
		$('#list').prepend($('<div>' + date + '</dt><dd>' + msg + '</dd>'));
	});

	socket.on('msg updateDB', function(msg) {
		console.log(msg);
	});
});
