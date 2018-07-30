require("dotenv").config();
var keys = require("./keys");
var fs = require("fs");

var spotify = require("spotify");
var client = require("twitter");

console.log("tweets, spotify this song");

var userInput = process.argv[2];
var userInput2 = process.argv[3];

 