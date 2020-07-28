const http=require("http");
const fs=require("fs");
let accounts=[
{

name: "Jovana",
job:"Dev"

}

];
const server=http.createServer((req,res)=>{
	console.log(req.url);
	if(req.url==="/"){
	res.writeHead(200,{"Content-Type":"text/html"});
   	let rs=fs.createReadStream("indexx.html")
	rs.pipe(res);
 
 }else if(req.url=="/kontakt"){
 	 	res.writeHead(200,{"Content-Type":"text/html"});
 		let rs=fs.createReadStream("kontakt.html")
rs.pipe(res);

}else if(req.url=="/data"){
res.writeHead(200,{"Content-Type":"application/json"});
res.end(JSON.stringify(accounts));
ju8
}

})
server.listen(3000,()=>{
	console.log("text");

})
