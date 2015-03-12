
Router.configure({
	layoutTemplate: 'layout'
})

Router.route('/', function () {
  // render the Home template with a custom data context
  this.render('content', { data: {title: 'My Title'}});
});

// when you navigate to "/one" automatically render the template named "One".
Router.route('/subject', function () {
	this.render('Subject', { data: {title: 'Poo Poo Trail'}});
});
// when you navigate to "/two" automatically render the template named "Two".
Router.route('/login');