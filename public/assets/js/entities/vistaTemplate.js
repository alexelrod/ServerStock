  MyApp.module("vista", function(vista, MyApp , Backbone , Marionette ,$ , _){
     vista.view = Backbone.Marionette.ItemView.extend({
       template : Handlebars.compile($("#mi-template").html())
     });
 });
