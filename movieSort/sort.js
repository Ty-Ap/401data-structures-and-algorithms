'use strict';

const {Movies} = require('./movies');

// need to write the "callback" 

function compareYear(movie1,movie2){
  if(movie1.year>movie2.year) return-1;
  if(movie1.year<movie2.year) return 1;
  return 0;
}

function sortYear(movies) {
  return movies.sort(compareYear)
}

function compareTitle(movie1,movie2){
  const title1 = movie1.title.replace(/^The\s/, '');
  const title2 = movie2.title.replace(/^The\s/, '');

  if(title1<title2) return-1;
  if(title1>title2) return 1;
  return 0;
}


function sortTitle(movies) {
  return movies.sort(compareTitle)
}


module.exports = {sortYear, compareYear, sortTitle, compareTitle}