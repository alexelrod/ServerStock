/*
*One -to-Many Relathionship
*Modelo o Schema mongo 
*funcion createStock ->que guarda el objeto que recibimos de yahoo
*funcion update LastStock ->primero hace una consulta a el ultimo elemento insertado y obtenemos solo ciertos datos 
*armamos un objeto Json con los valores requeridos unicamente 
*/

var mongoose= require('mongoose');
var promise = require('promises-promises');
var	Schema= mongoose.Schema;
var Global;
var cantidadb;
var SCHEMAULTIMO;

var stockSchema = new Schema ({
    count:Number,
    contador:Number,
    created:String,
    lang:String,
    _v:0,
    results:
        {quote:[{},{},{},{},{}]
    
    
} });

var Stock=mongoose.model('Stock',stockSchema);

module.exports = {
    createStock: function(Objetostock ) {
        var newSchemastock = new Stock(Objetostock);
        newSchemastock.save();
        
        console.log('si guardamos correctamente');

     Stock.count(function(err,response){
        if(err) {
                
            } else {
                
                 cantidadb=response+1;
                 newSchemastock.contador=cantidadb;
                 newSchemastock.save();
                 console.log("cantidad en la base de datos:"+cantidadb);
                }

 
         });

      
    },

  updateLastStock: function(callback) {
      console.log('----------------recibi update'); 
    Stock.findOne({contador:cantidadb},function(err,response){
        if(err) {
               callback(err,null); // Si hay un error, devolvemos el callback con el error devuelto.
            }else {
           

                try{           
                              
                     
                    var countt=response.count;
                    var createdd=response.created;
                    var companies=response.results.quote;
                     console.log('created:-----'+createdd);
                     console.log('companies:-----'+companies);
                   
                      var name1=companies[0].Name;
                      var assk1=companies[0].Ask;
                      var bid1=companies[0].Bid;
                      
                       var percent1=companies[0].PercentChange;
                       
                       var change1=companies[0].Change;
                       

                      var name2=companies[1].Name;
                       var assk2=companies[1].Ask;
                      var bid2=companies[1].Bid;
                       var percent2=companies[1].PercentChange;
                       var change2=companies[1].Change;

                      var name3=companies[2].Name;
                      var assk3=companies[2].Ask;
                      var bid3=companies[2].Bid;
                       var percent3=companies[2].PercentChange;
                       var change3=companies[2].Change;

                       var name4=companies[3].Name;
                       var assk4=companies[3].Ask;
                      var bid4=companies[3].Bid;
                       var percent4=companies[3].PercentChange;
                       var change4=companies[3].Change;

                      var name5=companies[4].Name;
                       var assk5=companies[4].Ask;
                      var bid5=companies[4].Bid;
                       var percent5=companies[4].PercentChange;
                       var change5=companies[4].Change;

                       console.log('------ask1:'+assk1);
                       console.log('------bid1:'+bid1);
                       console.log('------percent1:'+percent1);
                       console.log('------change1:'+change1);
                       console.log('------------------------');
                       console.log('------------------------');
                       console.log('------ask2:'+assk2);
                       console.log('------bid2:'+bid2);
                       console.log('------percent2:'+percent2);
                       console.log('------change2:'+change2);
                       console.log('------------------------');
                       console.log('------ask3:'+assk3);
                       console.log('------bid3:'+bid3);
                       console.log('------percent3:'+percent3);
                       console.log('------change3:'+change3);
                       console.log('------------------------');
                       console.log('------ask4:'+assk4);
                       console.log('------bid4:'+bid4);
                       console.log('------percent4:'+percent4);
                       console.log('------change4:'+change4);
                       console.log('------------------------');
                       console.log('------ask5:'+assk5);
                       console.log('------bid5:'+bid5);
                       console.log('------percent5:'+percent5);
                       console.log('------change5:'+change5);
                       console.log('------------------------');

                    console.log('response es ......'+assk1);
                    //armamos nuestro JSON conforme a nuestras necesidades
                    response=[{
                      created:createdd,
                      name:name1,
                      ask:assk1,
                      bid:bid1,
                      change:change1,
                      percent:percent1,

                    },
                    {
                      name:name2,
                      ask:assk2,
                      bid:bid2,
                      change:change2,
                      percent:percent2,


                    },
                    {
                      name:name3,
                      ask:assk3,
                      bid:bid3,
                      change:change3,
                      percent:percent3,


                    },
                    {
                      name:name4,
                      ask:assk4,
                      bid:bid4,
                      change:change4,
                      percent:percent4,


                    },
                    {
                      name:name5,
                      ask:assk5,
                      bid:bid5,
                      change:change5,
                      percent:percent5,


                    }];
                    callback(null,response);

                    
                    
                }catch(e){
                  callback(err,null); 
                  
                  console.log(e);
                 }
              }
         });
  }
};