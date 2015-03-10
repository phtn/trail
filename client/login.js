ServiceConfiguration.configurations.upsert(
  { service: "google" },
  {
    $set: {
      clientId: "38399952744",
      loginStyle: "popup",
      secret: "SCcMG2uC6yfOH08ySyYVBhrb"
    }
  }
);

// accounts-google
Meteor.loginWithGoogle({}, function(){
	requestPermission: [user]
});