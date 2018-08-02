require("dotenv").config();
var request = require("request");
var keys = require("./keys");
var fs = require("fs");

var params = { screen_name: "_raCzech", count: 20 }
var Twitter = require("twitter")
var client = new Twitter(keys.twitter);

var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);

var argument = process.argv[2];
var input = process.argv[3];

switch (argument) {
    case "my-tweets":
        tweets();
        break;


    // case "spotify-this-song": 
    //     spotifyThis();
    //     break;

    // case "movie-this":
    //     movieThis();
    //     break;

    // case "do-what-it-says":
    //     doThis();
    //     break;

}

function tweets() {
    client.get("statuses/user_timeline", params, function (err, tweets, response) {
        if (err) throw err;

        for (var i = 0; i < tweets.length; i++) {
            var date = tweets[i].created_at;
            var tweet = tweets[i].text;
            console.log("\nCreated on: " + date + "\n______________________\n" + "\nTweeted: " + tweet + "\n______________________");
        }

    })
}