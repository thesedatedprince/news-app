
function readGuardian(articles=5){
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/uk-news?show-fields=body&show-blocks=all');
  xhr.onload = function() {
      if (xhr.status === 200) {
        for (var i=0; i<=articles; i++){
          guardianObject = JSON.parse(xhr.responseText).response.results[i];
          document.write("<b>"+guardianObject.webTitle+"</b>");
          document.write(guardianObject.fields.body.substring(0,100)+"...<br><br>");
        }
      }
      else {
          alert('Request failed.  Returned status of ' + xhr.status);
      }
  };
  xhr.send();
}

readGuardian(5);
