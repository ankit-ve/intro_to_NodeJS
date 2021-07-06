var data = {
    name: 'ankit',
    age: 22,
    location: 'moradabad'
}

console.log('normal', data);
console.log('\nstringify', JSON.stringify(data));
var stringifiedData = JSON.stringify(data);
console.log('\nparse', JSON.parse(stringifiedData));