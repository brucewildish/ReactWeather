// Express is a web application framework (module) for Node.js
var express = require('express');  	// provides access to express api via object

  // Create our app as an instance of the express class
	var app = express();

  app.use(express.static('public'));  	// use folder "public"

  // start server takes port and function to call once server is up
  app.listen (3000, function() {
		console.log('Express server is up on port 3000')
});
