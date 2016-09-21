'use strict';

var articles = [];

//object constructor to create instances of blog post data
function Article(opts) {
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
  /*
  TODO: now use jQuery to fill in the rest of the current template clone with properties from this particular article instance.
  article body
  */

  $newArticle.find('h1').text(this.title); //good
  $newArticle.attr('data-category', this.category); //good
  $newArticle.find('a').text(this.author); //good
  $newArticle.attr('href', this.authorUrl); //good
  $newArticle.find('.article-body').html(this.body);

  $newArticle.find('time[pubdate]').attr('title', this.publishedOn); //good
  $newArticle.find('time').html('about ' + parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000) + ' days ago' ); //good

  $newArticle.removeClass('template');
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
articles.forEach(function(a) {
  $('#articles').append(a.toHtml());
});
