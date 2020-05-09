const fs = require('fs');
const path = require('path');

const file = fs.readFileSync('./lib.js').toString();

fs.appendFileSync('./lib.js', 'var me = 5');
