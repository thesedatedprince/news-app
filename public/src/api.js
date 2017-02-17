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
//  
    function guardianApi(url, articles=5) {
        // var shellURL = "http://news-summary-api.herokuapp.com/guardian";
        // var guardianURL = "?apiRequestUrl=http://content.guardianapis.com";
        // var generatedURL = shellURL + guardianURL
        var generatedURL = "http://localhost:8080/sample_data.json";
        getURL(url, guardianParser);

        function guardianParser() {
            for (var i = 0; i < articles; i++) {
                results(JSON.parse(this.responseText).response.results[i]);
            }
        }
        return results();
    }

    function aylienApi(url){
        getURL(url, aylienParser);
        var obj;
        function aylienParser() {
                obj = JSON.parse(this.responseText);
            }
        return obj;
    }
    
    exports.getURL = getURL;
    exports.results = results;
    exports.guardianApi = guardianApi;
    exports.aylienApi = aylienApi;

})(this);
