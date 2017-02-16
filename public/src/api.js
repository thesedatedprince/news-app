"use strict";

(function(exports) {

    var newsArray = [];

    function getURL(url, loadedFunction) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, false);
        xhr.onload = loadedFunction;
        xhr.send();
    }

    function newsItems(story) {
        // var newsArray = newsArray || [];
        return story ? newsArray.push(story) : newsArray;
    }

    function guardianApi(url = "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com", articles=5) {
        // var shellURL = "http://news-summary-api.herokuapp.com/guardian";
        // var guardianURL = "?apiRequestUrl=http://content.guardianapis.com";
        // var generatedURL = shellURL + guardianURL
        var generatedURL = "http://localhost:8080/sample_data.json";
        getURL(url, guardianParser);
        function guardianParser() {
            for (var i = 0; i <= articles; i++) {
                newsItems(JSON.parse(this.responseText).response.results[i]);
            }
        }
        return newsItems();
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
    exports.newsItems = newsItems;
    exports.guardianApi = guardianApi;

})(this);
