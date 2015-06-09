var fs = require('fs');
var contents = fs.readFileSync(process.argv[2]);
var newLines = contents.toString().split('\n');

console.log(newLines.length -1);
