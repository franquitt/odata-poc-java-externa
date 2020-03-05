var odata = require('node-odata');
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

let addrSchema = {
  Street: String,
  City: String,
  ZipCode: String,
  Country: String
};

let carSchema = {
  Identificador: Number,
  Model: String,
  ModelYear: String,
  Price: Number,
  Currency: String,
};

mongoose.connect('mongodb://mongo-db:27017/odata');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
	console.log("CONECTADO A LA DB! GENERANDO OBJETOS DE EJEMPLO");
	var AddrModel = mongoose.model('Address', new Schema(addrSchema));
	var CarModel = mongoose.model('cars', new Schema(carSchema));
	
	/*const objAddr = new AddrModel({
	  Street: "Av Colon",
	  City: "Cordoba",
	  ZipCode: "5003",
	  Country: "AR"
	});*/
	const objCar = new CarModel({
		Identificador: 1,
		Model: "Sedan",
		ModelYear: "2014",
		Price: 150000,
		Currency: "ARS"
	});
	objCar.save(function (err, auto) {
		if (err) return console.error(err);
		console.log(auto);
		var server = odata('mongodb://mongo-db:27017/odata');
		server.resource('Address', addrSchema);
		server.resource('cars', carSchema);
		server.listen(3005);
		console.log("Corriendo en http://localhost:3005");
    });

});