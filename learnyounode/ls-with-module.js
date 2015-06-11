var ls = require('./lslib.js');

ls(process.argv[2], process.argv[3], function(err, data){
	if (err) throw err;
	data.forEach(function(i){
		console.log(i);
	});
});