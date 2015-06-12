var http = require('http');

http.get(process.argv[2], function(response){
	var arr = [];

	response.setEncoding('utf8');
	response.on('data', function(chunk){
		arr.push(chunk);
	});

	response.on('end', function(){
		arr.forEach(function(i){
			console.log(i);
		});
	});
});