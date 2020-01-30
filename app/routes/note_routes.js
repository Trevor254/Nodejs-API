module.exports = function(app,db){
    app.post('/notes',(req,res)=>{
        //create note here
        res.send('Hello')
    })
}