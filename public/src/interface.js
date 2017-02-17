"use strict";


(function(exports) {


  function ApiInterface() {
    this.headlineArray = [];
    this.contentArray = [];
    this.guardianUrl = "https://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/uk-news?show-fields=body&show-blocks=all";
    this.aylienUrl = "https://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=";
  }

  ApiInterface.prototype.getHeadlines = function() {
    this.headlineArray = guardianApi(this.guardianUrl);
  };

  ApiInterface.prototype.updateHeadlines = function() {
    for (var i=0; i<this.headlineArray.length; i++){
      {
        var newsId = "<li class=news id=news-" + i + ">";
        var title = this.headlineArray[i].webTitle;
        this.writeHeadline(newsId, title);
      }
    }
  };

  ApiInterface.prototype.writeHeadline = function(newsId, title){
    var content = newsId + title + "</li>";
    this.contentArray.push(content);
    return content;
  };


  ApiInterface.prototype.createHeadlines = function(){
      for (var i=0; i<this.contentArray.length; i++){
        document.getElementById('headlines').innerHTML += this.contentArray[i];
      }
      var news = document.getElementsByClassName('news');
      for (var i=0; i<this.contentArray.length; i++){
        this.newsClick(news,i);
      }
   };

   ApiInterface.prototype.newsClick =  function(news,i) {
     var self = this;
       document.getElementById(news[i].id).addEventListener('click', function(event) {
            var elem = document.getElementById('news_summary');
            var fullAylienUrl = self.aylienUrl + self.headlineArray[i].webUrl;
            elem.innerHTML = self.createSummary(aylienApi(fullAylienUrl));
       }, false);
   };
   
   ApiInterface.prototype.createSummary = function(aylienObj) {
     // expand to change number sentences returned
     return aylienObj.sentences[0];
   };

  exports.ApiInterface = ApiInterface;

})(this);
