require("dotenv").config();
var request = require("request");
var keys = require("./keys");
var fs = require("fs");

var Twitter = require("twitter");
var client = new Twitter(keys.twitter);

var argument = process.argv;
