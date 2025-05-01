const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        fs.readFile('index.html',(err,data)=>{
            
            if(err){
                res.writeHead(500,{"content-type":"text/plain"})


            }



            res.writeHead(200,{"content-type":'text/html'})
            res.end(data);

          

        })
       


    }else if (req.url === '/script.js') {
        fs.readFile(path.join(__dirname, 'script.js'), (err, data) => {
          if (err) { /* handle error */ }
          res.writeHead(200, { "content-type": "application/javascript" });
          res.end(data);
        });
      }
    else{
        res.writeHead(404,{"content-type":"text/plain"});
        res.end("404: Page Not Found")



    }
})

server.listen(3000,()=>{
    console.log('Server is running at localhost:3000')


})