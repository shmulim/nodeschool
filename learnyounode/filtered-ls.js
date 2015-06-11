var fs = require('fs');

fs.readdir(process.argv[2], function(err, files){
	files.forEach(function(i){
		if (i.indexOf('.' + process.argv[3]) > -1){
		console.log(i);
		}
	});
});
