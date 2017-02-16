"use strict";
(function(exports){

  function getURL(url, loadedFunction, parser){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onload = loadedFunction
    xhr.send();
    return xhr;
  };

  function guardianApi(someotherstuff,loadedFunction,parser){
    var shellURL = "http://news-summary-api.herokuapp.com/guardian"
    var guardianURL = "?apiRequestUrl=http://content.guardianapis.com"
    var generatedURL = shellURL + guardianURL
    function guardianParser(){}
    return getURL(generatedURL, guardianParser)
  };

  exports.getURL = getURL;
  exports.guardianApi = guardianApi;

})(this);








JSON.parse(xhr.responseText).response.results[i];
