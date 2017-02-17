"use strict";


(function(exports) {

  function ApiInterface() {
    this.newsArray = [];
    this.contentArray = [];
  }

  ApiInterface.prototype.getHeadlines = function() {
    this.newsArray = guardianApi();
  };

  ApiInterface.prototype.updateHeadlines = function() {
    for (var i=0; i<this.newsArray.length; i++){
      {
        var newsId = "<li class=note id=news-" + i + ">";
        var title = this.newsArray[i].webTitle;
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
      for (var i=0; i<= (this.contentArray.length -1); i++){
        document.getElementById('headlines').innerHTML += this.contentArray[i];
      }
   };

   ApiInterface.prototype.extractor = function (contentType) {
     var arr = [];
     console.log(this.newsArray.length);
     for (var i=0; i<this.newsArray.length; i++){
       arr.push(this.newsArray[i].fields[contentType]);
     }
     return arr;
   };

   ApiInterface.prototype.extractImage = function() {
     this.extractor("thumbnail");
   }

  exports.ApiInterface = ApiInterface;

})(this);

var apiInterface = new ApiInterface;
apiInterface.getHeadlines();
apiInterface.updateHeadlines();
apiInterface.createHeadlines();
apiInterface.extractImage()
