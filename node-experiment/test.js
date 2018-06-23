var fs = require('fs');
var https = require('https');

fs.writeFile(__dirname + "/index.html","<h1>HTML is great1</h1>",function(error){
	if(error) {
		return console.log(error);
	}else {
		return console.log("Congrats");
	}
});

var myphotolocation = 'https://kids.nationalgeographic.com/content/dam/kids/photos/articles/Other%20Explore%20Photos/R-Z/Wacky%20Weekend/Wild%20Cats/ww-wild-cats-tiger.adapt.945.1.jpg';
https.get(myphotolocation, function(response){
	response.pipe(fs.createWriteStream(__dirname + "/mylandscape.jpg"));
});