/*
*Modulo encargado de controlar las peticiones en cierto intervalo de tiempo,si genera algun error es capturado en un dominio
*/

var eventos = require('events');
var getApi=require('./getController.js');

var EmisorEventos = eventos.EventEmitter;
var ee = new EmisorEventos();


var Client=require('node-rest-client').Client;
var client=new Client();
var dominioError=require('domain').create();


exports.lanzarEvento=function(){

dominioError.on('error',function(err){
	console.log(err);});

dominioError.run(function(){





ee.on('datos', function(Objeto){
	  console.log(Date.now());

});

setInterval(function(){
   ee.emit('datos', getApi.jsonObject());
}, 1000);



});


}

