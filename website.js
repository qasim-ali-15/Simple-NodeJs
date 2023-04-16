const http = require('http');
const fs = require('fs')
const { listenerCount } = require('process');

const port = process.env.PORT || 3000;

const server = http.createServer((req,res)=>{
    console.log(req.url);
    res.setHeader('Content-Type', 'text/html')

    if(req.url == '/'){
        res.statusCode=200;
        const data = fs.readFileSync('index.html')
        res.end(data.toString());
     }
     else if(req.url == '/a'){
        res.statusCode=200;
        res.end('<h1> This is First heading in Node JS</h1> <p> This is a first paragrpah in Node JS</p>');
     }
     else if(req.url == '/about'){
        res.statusCode=200;
        res.end('<h1> This is First ABOUT in Node JS</h1> <p> This is a first ABOUT in Node JS</p>');
     } 
     else{
        res.statusCode=404;
        res.end('<h1> Page NOT FOUND!!</h1> <p> This page is not found in this server</p>');
     }

})

server.listen(port,()=>{
    console.log(`Server is Listening on port ${port}`);
})