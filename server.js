//set up server
const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
//require database file
const db = require('./config/db');

const app = express();
const port = 5000;

app.use(bodyParser.urlencoded({ extended : true }))

// require('./app/routes')(app,{});
// app.listen(port,()=> {
//     console.log("We are live on" + port)
// });

//connect to database
// MongoClient.connect(db.url, (err, database) => {
//     if(err){
//         console.log(err)
//      }
//      require('./app/routes')(app,database);
//      app.listen(port,()=> {
//      console.log("We are live on" + port)
//    });
// })

const client = new MongoClient(db.url,{ useNewUrlParser : true });
client.connect(err => {
    if(err){
        console.log(err)
    }
    const db = client.db("noteable")
    require('./app/routes') (app,db);
    app.listen(port,()=>{
        console.log("We are live on " + port)
    })
})