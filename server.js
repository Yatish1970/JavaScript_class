var express = require("express");
var filer = require("fs");
var server = express();
server.use(express.urlencoded());
var path = require("path")
function start()
{
    console.log("Server is started on port")
}

server.get("/", function(req,resp)
{
    resp.send("<h1>Hello how are</h1>")
})

server.get("/index", function(req,resp)
{
    resp.sendFile(path.join(__dirname,"/index.html"))
})

server.get("/action_page", function(req,resp)
{
   // resp.sendFile("Username : " + req.query.)
})
server.get("/form", function(req,resp)
{
    resp.sendFile(path.join(__dirname,"/form.html"))
})
server.post("/post", function(req,resp) 
{
    var data = req.body;
    var output = "";
    var output1 = "";
    const path = "./database.txt";
    for(let x in data)
    {
        output += "Variable = " + x + " and Value = " + data[x] + " ";
        output1 += data[x] + ",";
    }
    if(filer.exists(path,function(isexist)
    {
        if(isexist)
        {
            filer.readFile();
        }
    }))
    filer.writeFile("database.txt", output1, err=>{
        if(err)
        {
            console.error(err)
        }}
    )
    resp.send(output);
})
server.listen(8080, start)