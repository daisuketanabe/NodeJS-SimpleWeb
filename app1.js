//console.log("Hello World");

const express = require ('express');
const bodyparser = require ('body-parser');
const path = require('path');
const fs = require('fs');

const app = express();


console.log("Web Server Loading...");

app.get('*',function(req,res){
    //console.log(req);
    const file = req.originalUrl;
    res.status(200);
    res.set('Content-Type', 'text/html');
    res.sendFile(path.join(__dirname+file),function(err){
        if (err)
        {
            res.sendFile(path.join(__dirname+file+'.html'),function(err){
                if (err)
                {
                    res.sendFile(path.join(__dirname+'/error.html'));
                }
            })
            //console.log(err);
            
        }
    });
})

app.listen(3000,function(){
    console.log("Web Server Started on Port 3000");
})

/*
console.log(__dirname);
fs.readFile(path.join(__dirname + '/index.html'), function(err, data){
    if (err){
        throw err;
    }
    app.get('/',function(req,res){
        res.header(200, {'Content-Type': 'text/html'});
        //res.send("Hello");
        console.log(data);
        console.log("Access");
    });
    app.listen(3000, function(){
        console.log("Web Server is running on Port 3000");
    })
})
*/


