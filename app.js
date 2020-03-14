var fs = require("fs");
var http = require("http");
var path = require("path");
var url = require("url");

http.createServer(function(req,res){

    var parsed = url.parse(req.url);
    var filename = path.parse(parsed.pathname);
    var page = filename.name == "" ? "index.html" : filename.name;

    if(req.url === "/"){
        fs.readFile("index.html", "UTF-8", function(err, data){
            res.writeHead(200, {"Content-Type": "text/html"});
            res.write("<script> var page = '"+page+"'; </script>");
            res.end(data);
        });
    }else if(req.url.match("\.html$")){
        var htmlPath = path.join(__dirname, '/', req.url);
        var fileStream = fs.createReadStream(htmlPath, "UTF-8");
        res.writeHead(200, {"Content-Type": "text/html"});
        fileStream.pipe(res);
        res.write("<script> var page = '"+page+"'; </script>");

    }
    else if(req.url.match("\.css$")){
        var cssPath = path.join(__dirname, '/', req.url);
        var fileStream = fs.createReadStream(cssPath, "UTF-8");
        res.writeHead(200, {"Content-Type": "text/css"});
        fileStream.pipe(res);

    }else if(req.url.match("\.js$")){
        var cssPath = path.join(__dirname, '/', req.url);
        var fileStream = fs.createReadStream(cssPath, "UTF-8");
        res.writeHead(200, {"Content-Type": "application/javascript"});
        fileStream.pipe(res);

    }else if(req.url.match("\.png$")){
        var imagePath = path.join(__dirname, '/', req.url);
        var fileStream = fs.createReadStream(imagePath);
        res.writeHead(200, {"Content-Type": "image/png"});
        fileStream.pipe(res);
    }else if(req.url.match("\.ttf$")){
        var imagePath = path.join(__dirname, '/', req.url);
        var fileStream = fs.createReadStream(imagePath);
        res.writeHead(200, {"Content-Type": "image/ttf"});
        fileStream.pipe(res);
    }else if(req.url.match("\.woff$")){
        var imagePath = path.join(__dirname, '/', req.url);
        var fileStream = fs.createReadStream(imagePath);
        res.writeHead(200, {"Content-Type": "image/woff"});
        fileStream.pipe(res);
    }else if(req.url.match("\.woff2$")){
        var imagePath = path.join(__dirname, '/', req.url);
        var fileStream = fs.createReadStream(imagePath);
        res.writeHead(200, {"Content-Type": "image/woff2"});
        fileStream.pipe(res);
    }else{
        res.writeHead(404, {"Content-Type": "text/html"});
        res.end("No Page Found");
    }

}).listen("8080", function() {
    console.log("info", 'Server is at port: ' + 8080);
})