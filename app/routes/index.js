//master route file

//requiring note routes module
const noteRoutes = require('./note_routes');

module.exports = function(app,db){
    noteRoutes(app,db);
}