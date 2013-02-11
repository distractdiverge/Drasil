var n3 = require("n3");
var http = require("http");
var server;


// Generate Dummy Content in n3 store
var store = new n3.Store();
store.add(":Pluto", "a", ":Dog");
store.add(":Mickey", "a", ":Mouse");
console.log("Loaded test data");

server = http.createServer(function(req, res){

	console.log("Processing request " + req);

   if(req.path == "/mickey") 
   {

   	var mickey = store.find(":Mickey", null, null)[0];
   	res.writeHead(200, {"Content-Type":"text/n3"});
   	res.end(mickey.subject, mickey.predicate, mickey.object, ".");
   
   }
   else 
   {
   	res.writeHead(404);
   	res.end();
   }

}).listen(1337, "127.0.0.1");
console.log("Server Running at http://127.0.0.1:1337");