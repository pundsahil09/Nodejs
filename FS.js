const http = require('http');
const fs = require('fs');


http.createServer((req, resp)=>{
    console.log("Server Created");

    //Rename file
    fs.rename('demo1.js','renm.js',(err)=>{
        if (err) {
            console.log(err);
        }
        console.log("File Renamed")
        resp.end();
    })

    //Update file
/*    fs.writeFile('demo.js','let a = 10; console.log(a);',(err)=>{
        if (err) {
            console.log(err);
        }
        console.log('File Updated.');

        return resp.end();
    });
*/
    // Open file
/*    fs.open('demo.html','r',(err)=>{
        if(err) throw err;

        console.log("File Opened.")

        fs.readFile('demo.html',(err,data)=>{
            if(err) throw err;

            resp.writeHead(200,{'content-type':'text/plain'});

            resp.write(data)

            resp.end();
        })
        return fs.end();
    })
*/

    // remove file 
/*    fs.unlink('demo.js',(err)=>{
        if(err){
            throw err;
            
        } 


        console.log("File deleted");
    
        return resp.end();
    })
*/



    // appendFile
/*    fs.appendFile("demo.js","Hello........",(err, data)=>{
        if(err) throw err; 
        console.log("FIle Updated");

        return resp.end();
    });
*/


    // read file
/*    fs.readFile('demo.html',(err,data)=>{
        if(err) throw err
        resp.writeHead(200,{'content-type':'text/html'});
        resp.write(data);
        resp.end();
    })
*/

}).listen(4500);