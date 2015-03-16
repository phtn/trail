Messages = new Mongo.Collection('messages');

if (Meteor.isClient){

	
} 

if (Meteor.isServer){

	Meteor.startup(function (){
		//if (Messages.find().count() === 0) {
			Messages.insert({name: 'Sansa Stark'});

			Meteor.publish('ins', function(){
				return Messages.find();
		    });	
		//}
	});
}