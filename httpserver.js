const http = require('http');
const { listenerCount } = require('process');

const port = process.env.PORT || 3000;

const server = http.createServer((req,res)=>{
    console.log(req.url);
    res.statusCode=200; // http status code , 200 for ok
     res.setHeader('Content-Type', 'text/html')
     res.end('<h1> This is First heading in Node JS</h1> <p> This is a first paragrpah in Node JS</p>')

})

server.listen(port,()=>{
    console.log(`Server is Listening on port ${port}`);
})