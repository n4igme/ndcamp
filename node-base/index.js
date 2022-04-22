const fs = require('fs');

//synchronous way
const txtIn = fs.readFileSync('./txt/motivation.txt', 'utf-8');
console.log(txtIn);
const txtOut = `This is what I know about motivation: ${txtIn}.\nCreated on ${Date.now()}`;
fs.writeFileSync('./txt/syncout.txt', txtOut);
console.log('File created...');

//asynchronous way
fs.readFile('./txt/syncout.txt', 'utf-8', (err, data) => {
    console.log(data);
});
console.log('Will read file!')