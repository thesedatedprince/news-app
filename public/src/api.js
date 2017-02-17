"use strict";

(function(exports) {

    var objArray = [];

    function getURL(url, loadedFunction) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, false);
        xhr.onload = loadedFunction;
        xhr.send();
    }

    function results(object) {
        var objArray = objArray || [object];
        if (object){
          objArray.push(object)
        }
        else{
        return objArray
      }

    }

    function guardianApi(url = "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com", articles=5) {
        // var shellURL = "http://news-summary-api.herokuapp.com/guardian";
        // var guardianURL = "?apiRequestUrl=http://content.guardianapis.com";
        // var generatedURL = shellURL + guardianURL
        var generatedURL = "http://localhost:8080/sample_data.json";
        getURL(url, guardianParser);
        function guardianParser() {
            for (var i = 0; i <= articles; i++) {
                results(JSON.parse(this.responseText).response.results[i]);
            }
        }
        return results();
    }

    //////////// example - this will be in the interface file ////////////
    // function updateHeadlines() {
    //     var stories = guardianApi("http://localhost:8080/sample_data.json");
    //     for (var i = 0; i < stories.length; i++) {
    //         var newsId = "<li class=note id=news-" + i + ">";
    //         var title = stories[i].webTitle;
    //         writeHeadline(newsId, title)
    //     }
    // }

    exports.getURL = getURL;
    exports.results = results;
    exports.guardianApi = guardianApi;

})(this);
