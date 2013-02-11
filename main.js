var n3 = require("n3");
var http = require("http");
var router = require("router");
var route = router();
var server;
var store;


// Generate Dummy Content in n3 store
store = new n3.Store();
store.add(":pluto", "a", ":Dog");
store.add(":mickey", "a", ":Mouse");
console.log("Loaded test data");

route.get("/",function(req,res){
   res.writeHead(200, {"Content-Type":"text/html"});
   res.end("<html><head><title>Drasil</title></head><body>Drasil Index Page<br><a href=\"/mickey\">Mickey</a></body></html>");
});

route.get("/{subject}", function(req, res) {

   var result = store.find(":"+req.params.subject, null, null)[0];

   if( !result ) {
      res.writeHead(404);
      res.end();
      return;
   }

   res.writeHead(200, {"Content-Type":"text/n3"});
   
   res.end(""+result.subject+" "+result.predicate+" "+result.object+" .");
});
   
server = http.createServer(route).listen(1337);
console.log("Server Running at http://127.0.0.1:1337");