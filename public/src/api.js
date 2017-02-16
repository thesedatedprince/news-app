(function(exports){

  getURL = function(loadedFunction){
    xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://localhost:8080/sample_data.json');
    xhr.onload = loadedFunction;
    xhr.send();
    return xhr;

  };

  exports.getURL = getURL;

})(this);
