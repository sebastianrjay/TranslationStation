# About

**Front End:**
* 90 lines of HTML
* 200 lines of CSS
* 500 lines of JavaScript (including 300 lines of constants)

**Back End:**
* 210 lines of Node.js and Express.js (server-side JavaScript)

Check out the live website [HERE](https://limitless-spire-84378.herokuapp.com)!

The website contained in this repository is a clone of Google Translate. It 
didn't absolutely need a back end, but I wanted an excuse to teach myself 
Node.js and Express.js. Having a back end also keeps my API keys secret.

# Technical Details

This Google Translate clone runs on [NodeJS](https://nodejs.org/), 
[Express 4](http://expressjs.com/) and [Angular 1.5.0](https://angularjs.org/). 
It also uses [Grunt](http://gruntjs.com/), 
[grunt-ng-annotate](https://github.com/mgol/grunt-ng-annotate) and 
[grunt-contrib-uglify](https://github.com/gruntjs/grunt-contrib-uglify) to 
automate minification tasks in development, and minimize load times in 
production.

There's no reason to add a database now, although it could be useful for adding 
analytics features (e.g. to count queries and show users the most commonly 
searched translations for each language pairing). However, using an LRU cache to 
show users trending translation queries would yield much faster load times than 
saving every translation query in a database, and completing a database query to 
find the most-searched translations of all time.

In order to speed up the user experience and minimize costly API calls, I've 
taken advantage of Node's [node-cache](https://www.npmjs.com/package/node-cache) 
library to cache the results of recent translation queries. It isn't an LRU 
cache, but stores data until it expires. (The probability that someone requests 
a cached query is low at current usage levels.)
