# About

The website contained in this repository is a clone of pre-2018 Google 
Translate, before Google updated the UI (hence the defunct link to the Google 
Plus Translate site via the red G+ icon). One benefit of showing results from 
three translation services (instead of one) is to see multiple translations.

Check out the live website [HERE](https://translation-station.herokuapp.com)!

# Technical Details

**Front End:**
* 153 lines of HTML
* 204 lines of CSS
* 464 lines of JavaScript (including 255 lines of constants)

**Back End:**
* 151 lines of Node.js and Express.js (server-side JavaScript)

**Total:** 972 lines of application code

This Google Translate clone runs on [NodeJS](https://nodejs.org/), 
[Express 4](http://expressjs.com/) and [Angular 1.5.0](https://angularjs.org/). 
It also uses [Grunt](http://gruntjs.com/), 
[grunt-ng-annotate](https://github.com/mgol/grunt-ng-annotate) and 
[grunt-contrib-uglify](https://github.com/gruntjs/grunt-contrib-uglify) to 
automate minification tasks in development, and minimize load times in 
production. Those technologies are outdated but the site still works. I could 
have written it without the backend server code, but I wanted an excuse to teach 
myself Node.js and Express.js at the time. 

There's no need to add a database now, although it could be useful for adding 
analytics features (e.g. to count queries and show users the most commonly 
searched translations for each language pairing).

In order to speed up the user experience and minimize costly API calls, I've 
taken advantage of Node's [node-cache](https://www.npmjs.com/package/node-cache) 
library to cache the results of recent translation queries. (The probability 
that someone requests a cached query is low at current usage levels.)
