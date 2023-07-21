// Creating http server on localhost:4500
const http = require('http'); 
const uc = require('uppercase');

http.createServer((req,resp)=>{
    resp.writeHead(200,{'content-type':'text/html'}) // this is meta (plain/html)
    resp.write(uc("<h1> Hello Node Js </h1>"))
    resp.write(uc("<h1> hello </h1>"))
    resp.end();
}).listen(4500);

