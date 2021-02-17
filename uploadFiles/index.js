const express = require("express");
const formidable = require("formidable");
const app = express();
app.get("/", (req, res)=>{
    res.sendFile(__dirname+"/index.html");
});
app.post("/", (req, res)=>{
    console.log(__dirname);
    const form = new formidable.IncomingForm();
    form.parse(req);
    form.on("fileBegin", (name, file)=>{
        file.path = __dirname+"/uploads/"+file.name;
    });
    form.onPart = function (part) {
        if(!part.filename || part.filename.match(/\.(jpg|jpeg|png)$/i)) {
            this.handlePart(part);
        }
        else {
            console.log(part.filename + ' is not allowed');
        }
    }
    form.on("file", (name, file)=>{
        console.log("Uploaded file : "+file.name);
    });
    form.on('error', (err) => {
        console.error('Error', err)
        throw err
    })
    form.on('end', () => {
        res.end()
    })
    
    res.send("File Uploaded");
})
app.get('/download', function(req, res){
    const file = `${__dirname}/uploads/highsch.jpg`;
    res.download(file); // Set disposition and send it.
});
app.listen("8000", ()=>{
    console.log("Upload project is running on port 8000");
});
