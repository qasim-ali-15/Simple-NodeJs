//visit to: https://nodejs.org/api/fs.html#file-system

//const fs = require('node:fs/promises');
const fs = require('fs');

// fs.readFile('file.txt', 'utf8', (err, data)=>{
//     console.log(err, data);
// })

// const a = fs.readFileSync('file.txt')
// console.log(a.toString())

fs.writeFile('file2.txt','This is content of file 2', ()=>{
    console.log('Written finished')
})

console.log('Finished reading file')