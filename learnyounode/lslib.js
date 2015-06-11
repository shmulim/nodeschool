var fs = require('fs');

module.exports = function(directory, extension, callbackFn){
	fs.readdir(directory, function(err, ls){
		if (err){
			return callbackFn(err, null);
		}

		ls = ls.filter(function(i){
			if (i.indexOf('.' + extension) > -1){
				return i;
			}
		});
		
		callbackFn(err, ls);
	});
};