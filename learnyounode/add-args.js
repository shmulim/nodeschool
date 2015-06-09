var args = process.argv.slice(2);

result = args.reduce(function(a, b){
	return parseInt(a) + parseInt(b);
});

console.log(result);