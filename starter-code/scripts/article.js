'use strict';

var articles = [];

//object constructor to create instances of blog post data
function Articles(opts) {
  //opts is convention for data object we are passing in
  this.title = opts.title;
  this.category = opts.category;
  this.author = opts.author;
  this.authorUrl = opts.authorUrl;
  this.publishedOn = opts.publishedOn;
  this.body = opts.body;
}

//adds method to Article constructor that grabs blog template
//makes a copy assigns specific values to properties
Article.prototype.toHtml = function() {
  var $newArticle = $('article.template').clone();
  $newArticle.attr('data-category', this.category);
  /*
  TODO: now use jQuery to fill in the rest of the current template clone with properties from this particular article instance.
  author name
  author URL
  article title
  article body
  publication date
  */

  $newArticle.find('time[pubdate]').attr('title', this.publishedOn);
  $newArticle.find('time').html('about ' + parseINt(new Date() - newDate(this.publishedOn))/60/60/24/1000 + ' days ago' );

  /* TODO: This clone article is no longer a template,
 as it now has real data attached to it! We need to account
 for that before this current article gets rendered to our
 DOM. */

  return $newArticle;
};

//sorts each blog post by date
ourLocalData.sort(function(curElem, nextElem) {
  return (new Date(nextElem.publishedOn) - new Date(curElem.publishedOn));
});

//instantiates each blog post and pushes into array
ourLocalData.forEach(function(ele) {
  articles.push(new Article(ele));
});

//appends each blog post in the section w/id 'articles'
article.forEach(function(a) {
  $('#articles').append(a.toHtml());
});
