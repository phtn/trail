
Router.configure({
	layoutTemplate: 'layout'
})

Router.map(function () {
  	
  	this.route('messages', {
	  	path: '/',
	  	data: function (){
	  		return Meteor.subscribe('ins');
	  		}
  		});

  	this.route('subject', { 
		path: '/subject',
		data: {title: 'Poo Poo Trail'}
	});
	this.route('login', {
		path: '/login'
	});

});