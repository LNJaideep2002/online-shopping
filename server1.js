var http=require("http");
var fs=require("fs");
var server=http.createServer(function(req,res)
{
    console.log(req.url);
    if(req.url=="/")
    {
        fs.readFile("sam.html","utf8",function(err,data)
        {
            res.setHeader("content-type","text/html");
            res.write(data);
            res.end();
        });
    }
    else
    if(req.url=="/sub?")
    {
        fs.readFile("sam.html","utf8",function(err,data)
        {
            
        }); 
    }

});
server.listen(5500,function()
{

     console.log("bnbhtiboih");
});