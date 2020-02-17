var odata = require('node-odata');
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

var server = odata('mongodb://mongo-db:27017/odata');
server.resource('Address', {
  Street: String,
  City: String,
  ZipCode: String,
  Country: String
});
server.resource('Cars', {
  Name: String,
  Description: String,
  Address: {type: ObjectId, ref: "Address"},
});
server.listen(3005);
console.log("Corriendo en http://localhost:3005");