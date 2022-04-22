const fs = require('fs');

//synchronous way
const txtIn = fs.readFileSync('./txt/motivation.txt', 'utf-8');
console.log(txtIn);
const txtOut = `This is what I know about motivation: ${txtIn}.\nCreated on ${Date.now()}`;
fs.writeFileSync('./txt/syncout.txt', txtOut);
console.log('File created...');

//asynchronous way
fs.readFile('./txt/start.txt', 'utf-8', (err, data1) => {
    fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data2) => {
        console.log(data2);
        fs.readFile('./txt/syncout.txt', 'utf-8', (err, data3) => {
            console.log(data3);
            fs.writeFile('./txt/finish.txt', `${data2}\n${data3}`, 'utf-8', err =>{
                console.log("Everything's gonna be ok");
            });
        });
    });
});
console.log('Done!!!')