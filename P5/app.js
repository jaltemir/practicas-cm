/**
 * Created by boyander on 11/10/16.
 */

var express = require('express');
var Item = require('./Item.js').Item;
var app = express();

// Configure jade to be our rendering engine
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');

// Enable boostrap from npm as a served static directory
app.use("/libs",express.static('node_modules/bootstrap/dist'));

// Our CSS and JS files
app.use("/public",express.static('public'));



// Use 500px API to get random pictures for our products
//var API500px = require('500px');
//var api500px = new API500px("YecP85RjzG08DN0MqvgFa0N780dNaDmJX6iTPbYp");

var pics = [
	new Item("http://www.elrocknomuere.com/blog/img/albums/nevermind.jpg",'Nirvana: Nevermind', 16.99),
	new Item("https://images-na.ssl-images-amazon.com/images/I/91FPr2T7MCL._SL1425_.jpg",'Metallica: Master of Puppets', 12.95),
	new Item("http://u2fanlife.com/wp-content/uploads/2011/10/Boy-u2.jpg",'U2: Boy', 8.55),
	new Item("https://upload.wikimedia.org/wikipedia/en/4/45/Rage_Against_the_Machine_-_Evil_Empire.png",'RATM: Evil Empire', 10.25),
	new Item("http://d817ypd61vbww.cloudfront.net/sites/default/files/styles/media_responsive_widest/public/tile/image/Revolver.jpg?itok=x5AXwZAm",'The Beatles: Revolver', 23.95),
	new Item("https://muse-cdn.warnerartists.com/ugc-1/discography/discog/3/46_square.jpg",'Muse: Black Holes and Revelations', 9.95),
	new Item("https://images-na.ssl-images-amazon.com/images/I/715jbEtLNcL._SL1489_.jpg",'Pink Floyd: The Wall', 24.95),
	new Item("https://images-na.ssl-images-amazon.com/images/I/61jzNOGKXJL.jpg",'Ramones: Rocket to Russia', 6.95)
	
];


// Render frontpage
app.get('/', function (req, res) {
    res.render('portada',{pics: pics});
});


// Server start
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
