var boldKeys = require("./key.js");
var inquirer = require("inquirer");
var omdb = require('omdb');
var request = require('ajax-request');


// fs.readFile("keys.js", "utf8", function(error, data) {
//   if (error) {
//     return console.log(error);
//   }
// 	console.log(data);

// 	var dataArr = data.split(",");

// 	console.log(dataArr);

// });

function displayTweets(){
	console.log("No tweets for now!");
}
function theatreShowings(){
	console.log("No movie info yet!");
}
function spotMyMusic(){
	console.log("No music yet!");
}
function youDoWhatYouWant(){
	console.log("No tweets for now!");
}
var movieYear = 0;



function getCommand(){
inquirer.prompt([
  		{
      type: "list",
      message: "What do you want to look at, boss?",
      choices: ["tweets", "movies", "music", "how do you want to do this?"],
      name: "command"
    }
  	]).then(function (command) {
  		console.log(command.command)
  		var theCall = command.command;
  		console.log(theCall);
		if (theCall === "tweets") {
			request('url', function(err, res, body) {});
 
				request({
				  url: '',
				  method: 'GET',
				  data: {
				    query1: boldKeys.tweet.URL
				  }
				}, function(err, res, body) {

				  
				});
				getCommand();
		} else {
			if (theCall === "movies") {
				inquirer.prompt({
					message: "What movie would you like to know about?"
					name: "movieCalledDesire"
				}).then()function(buy){
					var ticket = buy.movieCalledDesire;
					omdb.search(ticket, function(err, movies) {
					    if(err) {
					        return console.error(err);
					    }
					 
					    if(movies.length < 1) {
					        return console.log('No movies were found!');
					    }
					 
					    movies.forEach(function(movie) {
					        console.log('%s (%d)', movie.title, movie.year);
					       movieYear = movie.year[0];
					    });
					});
					 
					omdb.get({ title: ticket , year: movieYear }, true, function(err, movie) {
					    if(err) {
					        return console.error(err);
					    }
					 
					    if(!movie) {
					        return console.log('Movie not found!');
					    }
					 
					    console.log('%s (%d) %d/10', movie.title, movie.year, movie.imdb.rating);
					    console.log(movie.plot);
					});
				}
					getCommand();
			} else {
				if (theCall === "music") {
				request('url', function(err, res, body) {});
 
				request({
				  url: '',
				  method: 'GET',
				  data: {
				    query1: boldKeys.spotify.URL
				  }
				}, function(err, res, body) {

				  
				});
					getCommand();
				} else {
					if (theCall === "how do you want to do this?") {
						youDoWhatYouWant();
					}
				}
			}
		}
  	});
}
getCommand();
// https://api.twitter.com/1.1/search/tweets.json

