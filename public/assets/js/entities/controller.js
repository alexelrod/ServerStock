  MyApp.module("controller",function(controller,MyApp){
	controller.controller=function(){
	  var contacts = new MyApp.ContactCollection();
	  var contactsListView = new MyApp.ContactsView({
          collection: contacts
      });

  	MyApp.mainRegion.show(contactsListView);

	setInterval(function(){
          contacts.fetch({                     
            success:function(){
             contactsListView.render();
               console.log('recibimos objeto exitosamente'+JSON.stringify(contacts));
             }
          });  
        },2000);
  }

});
