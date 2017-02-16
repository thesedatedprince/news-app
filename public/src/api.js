"use strict";

(function(exports) {

    var headlineArray = [];

    function getURL(url, loadedFunction) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, false);
        xhr.onload = loadedFunction;
        xhr.send();
        return xhr;
    }

    function headlines() {
        return headlineArray;
    }

    function guardianApi(url = "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com") {
        // var shellURL = "http://news-summary-api.herokuapp.com/guardian";
        // var guardianURL = "?apiRequestUrl=http://content.guardianapis.com";
        // var generatedURL = shellURL + guardianURL
        var generatedURL = "http://localhost:8080/sample_data.json";

        function guardianParser() {
            for (var i = 0; i <= 5; i++) {
                headlineArray.push(JSON.parse(this.responseText).response.results[i]);
            }
            updateHeadlines();
        }
        getURL(url, guardianParser);
    }

    function updateHeadlines() {
        for (var i = 0; i < headlineArray.length; i++) {
            var newsId = "<li class=note id=news-" + i + ">";
            headlineArray[i] = headlineArray[i].webTitle;
            var title = headlineArray[i];
            // writeHeadline(newsId, title)
        }
    }

    exports.getURL = getURL;
    exports.headlines = headlines;
    exports.guardianApi = guardianApi;

})(this);
