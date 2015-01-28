var fs = require('fs');

var bufferObj = fs.readFileSync(process.argv[2]);
var strSplit = bufferObj.toString().split('\n');

console.log(strSplit.length - 1);

