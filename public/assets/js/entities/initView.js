MyApp.module("initView", function(initView, MyApp , Backbone , Marionette ,$ , _){
	
	initView.creaViews=function(){
		MyApp.ContactCollection=MyApp.collec.dataModel();
		MyApp.ContactItemView = MyApp.vista.view;
		MyApp.ContactsView = Marionette.CollectionView.extend({
  			
  			childView: MyApp.ContactItemView
		});
	}

});
