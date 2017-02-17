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
        if (object) {
            objArray.push(object)
        } else {
            return objArray
        }
    }

    function guardianApi(url = "https://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/uk-news?show-fields=body,thumbnail,shortUrl,score,starRating,headline&show-blocks=all", articles = 5) {
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

    exports.getURL = getURL;
    exports.results = results;
    exports.guardianApi = guardianApi;

})(this);
