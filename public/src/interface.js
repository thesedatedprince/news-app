"use strict";


(function(exports) {


  function ApiInterface() {
    this.headlineArray = [];
    this.contentArray = [];
  }

  ApiInterface.prototype.getHeadlines = function() {
    this.headlineArray = guardianApi();
  };

  ApiInterface.prototype.updateHeadlines = function() {
    for (var i=0; i<this.headlineArray.length; i++){
      {
        var newsId = "<li class=note id=news-" + i + ">";
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
   };

  exports.ApiInterface = ApiInterface;

})(this);

var apiInterface = new ApiInterface;
apiInterface.getHeadlines();
apiInterface.updateHeadlines();
apiInterface.createHeadlines();
