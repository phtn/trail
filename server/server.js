Places = new Mongo.Collection('places')

Meteor.methods({getPlaces: function (){
		var results = HTTP.call("GET", "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=500&types=food&key=AIzaSyDNknKfUx70tmTXXAYKeBQcUewPhvjUbmI");
		console.log(results);
	}
});

/*

_(results.data.results).each(function(loc){
			_.extend(loc, {loc: {type: "Point", coordinates: 
				[loc.geometry.location.lng, loc.geometry.location.lat]
			}});
			Places.upsert(
				{ id: loc.id },		
				{ $set: loc });
			
		});

<script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?libraries=places"></script>

http://maps.googleapis.com/maps/api/place/nearbysearch/json?Location=47.439858099999995,-122.11638519999998&radius=500&types=food&key=AIzaSyDNknKfUx70tmTXXAYKeBQcUewPhvjUbmI

https://maps.googleapis.com/maps/api/place/details/json?sensor=false&key=AIzaSyDNknKfUx70tmTXXAYKeBQcUewPhvjUbmI

https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=AIzaSyDNknKfUx70tmTXXAYKeBQcUewPhvjUbmI&location=47.439858099999995,-122.11638519999998&radius=500&types=food


47.4398580,-122.1163851
*/		