var ObjectID = require('mongodb').ObjectID

module.exports = function(app,db){
    //get data from server

    //read route
    app.get('/notes/:id', (req,res) => {
        const id = req.params.id;
        const details = {'_id' : new ObjectID(id)};
        db.collection('notes').findOne(details,(err,item) => {
            if(err){
                res.send({'error':'An error has occured'})
            } else {
                res.send(item);
            }
        })
    })

    //delete route
    app.delete('/notes/:id', (req,res) => {
        const id = req.params.id;
        const details = {'_id' : new ObjectID(id)};
        db.collection('notes').remove(details,(err,item) => {
            if(err){
                res.send({'error':'An error has occured'})
            } else {
                res.send('Note ' + id + 'deleted');
            }
        })
    })

     //update route
     app.put('/notes',(req,res)=>{
        const id = req.params.id;
        const note = { text:req.body.body, title:req.body.title }; //req.body.body gets the body variable from the request
        const details = {'_id' : new ObjectID(id)};
        db.collection('notes').update(details,note, (err,item) => {
           if(err){
               res.send({'error':'An error has occured'})
           } else {
               res.send(item)
           }
       })
    })
    
    //create route
    app.post('/notes',(req,res)=>{
        //create note here
        const note = { text:req.body.body, title:req.body.title }; //req.body.body gets the body variable from the request
        db.collection('notes').insert(note, (err,result) => {
           if(err){
               res.send({'error':'An error has occured'})
           } else {
               res.send(result.ops[0])
           }
       })
    })
};




