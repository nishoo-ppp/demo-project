"use strict";
const express = require("express");
const app = express();
const dotenv = require("dotenv");
const Transporter = require("./email");
const nodemailer = require("nodemailer");
const nodemailerSendgrid = require("nodemailer-sendgrid");
 
dotenv.config();
let name = false;
const option = {
    from: "nishoogupta09@gmail.com",
    to: "uai00333@eoopy.com",
    subject: "Sending mail from node js",
    text: "wow! it is simple"
};


app.get("/send-mail", (req, res)=>{
   
    Transporter.sendMail(option, (err, info)=>{
        if(err) throw err;
        console.log("Mail sent: "+info.response);
        res.send({
            message:"mail sent"
        });
    });
});
app.get("/send-mail-sendgrid", (req, res)=>{
    const transport = nodemailer.createTransport(
        nodemailerSendgrid({
            apiKey: process.env.SENDGRID_API_KEY
        })
    );
    transport.sendMail(option).then(()=>{ 
        console.log("Mail sent");
        res.send({
            message:"mail sent"
        });
    }).catch((err)=>{
        console.log(err);
        res.send({
            message:"Something went wrong"
        });
    });
});
app.listen("8000", ()=>{
    console.log("running on 8000 port");
});
