var fs = require('fs');

// async functions require callback functions
var data_buffer = fs.readFile('nodeJs.txt', 'utf-8', (err, data) => {
    if (err) console.log(err);
    console.log(data)
});
console.log(data_buffer);

// if utf-8 is not used above then data returend will be binary