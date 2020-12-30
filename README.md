# About

**Front End:**
* 90 lines of HTML
* 200 lines of CSS
* 500 lines of JavaScript (including 300 lines of constants)

**Back End:**
* 210 lines of Node.js and Express.js (server-side JavaScript)

Check out the live website [HERE](https://translation-station.herokuapp.com)!

The website contained in this repository is a clone of Google Translate. I could 
have written it without the backend server code, but I wanted an excuse to teach 
myself Node.js and Express.js at the time.

# Technical Details

This Google Translate clone runs on [NodeJS](https://nodejs.org/), 
[Express 4](http://expressjs.com/) and [Angular 1.5.0](https://angularjs.org/). 
It also uses [Grunt](http://gruntjs.com/), 
[grunt-ng-annotate](https://github.com/mgol/grunt-ng-annotate) and 
[grunt-contrib-uglify](https://github.com/gruntjs/grunt-contrib-uglify) to 
automate minification tasks in development, and minimize load times in 
production. Those technologies are outdated but the site still works.

There's no reason to add a database now, although it could be useful for adding 
analytics features (e.g. to count queries and show users the most commonly 
searched translations for each language pairing).

In order to speed up the user experience and minimize costly API calls, I've 
taken advantage of Node's [node-cache](https://www.npmjs.com/package/node-cache) 
library to cache the results of recent translation queries. (The probability 
that someone requests a cached query is low at current usage levels.)
