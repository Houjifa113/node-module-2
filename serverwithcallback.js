const http= require('http');

cb = function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.end("hello  world");
}
const server = http.createServer(cb);

server.listen(3000,function(){
    console.log("started");
})