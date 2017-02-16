"use strict";
(function(exports) {

    function getURL(url, loadedFunction) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.onload = loadedFunction;
        xhr.send();
        return xhr;
    }

    function guardianApi(someotherstuff, loadedFunction) {
        var shellURL = "http://news-summary-api.herokuapp.com/guardian";
        var guardianURL = "?apiRequestUrl=http://content.guardianapis.com";
        // var generatedURL = shellURL + guardianURL
        var generatedURL = "http://localhost:8080/sample_data.json";

        function guardianParser(loadedFunction) {
            var articles = [];
            for (var i = 0; i <= 5; i++) {
                articles.push(JSON.parse(this.responseText).response.results[i]);
            }
            return articles;
        }
        return loadedFunction(articles);
        // return getURL(generatedURL, guardianParser);
    }
    exports.getURL = getURL;
    exports.guardianApi = guardianApi;


})(this);
