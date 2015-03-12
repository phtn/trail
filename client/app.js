var loc = navigator.geolocation.getCurrentPosition(function(position){
    var lat = position.coords.latitude,
        lon = position.coords.longitude,
        
        request = {
            location: point,
            radius: '500',
            types: ['store']
        },
        map;

      var service = new google.maps.places.PlacesService(map);
      service.nearbySearch(request, callback);
    

    function callback(results, status) {
      if (status == google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
          var place = results[i];
          console.log(results[i]);
        }
      }
  }
});
Meteor.call('getPlaces');