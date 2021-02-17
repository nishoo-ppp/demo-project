const http = require("http");
const fs = require("fs");
const server = http.createServer();
server.on("request", (req, res)=>{
    // fs.readFile("dummy.txt", (err, data)=>{
    //     if(err) throw err;
    //     res.end(data);
    // });
    let readStream = fs.createWriteStream("dummy.txt");
    readStream.on("data", (chunkData)=>{
        res.write(chunkData);
    });
    readStream.on("end", ()=>{
        res.end();
    });
    readStream.on("error", (err)=>{
        console.log(err);
        res.end("file not found");
    })
});
server.listen("8008", ()=>{
    console.log("running on 8000");
})