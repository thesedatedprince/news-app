
(function(exports){

  getURL = function(){
    xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/uk-news?show-fields=body&show-blocks=all');
    xhr.onload = function(){
      console.log(xhr);
    };
    xhr.send();
    return xhr;

  };

  exports.getURL = getURL;
})(this);
