   MyApp.module("collec", function(collec,MyApp){
     collec.dataModel=function(){
       var mod=Backbone.Model.extend({});
	 var collection=Backbone.Collection.extend({
	    url:'/api/updt',
	    model:mod
	  });
      return collection;
     }
   });
