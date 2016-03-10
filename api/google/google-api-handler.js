var requestMaker = require('request');
var NodeCache = require('node-cache');
var Google = {};
Google.queryCache = new NodeCache();
