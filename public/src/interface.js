var headlineArray = [];

function updateHeadlines(){
  for (var i=0; i<headlineArray.length; i++){
    {
      var newsId = "<li class=note id=news-" + i + ">";
      var title = headlineArray[i].webTitle;
      writeHeadline(newsId, title)
    }
  }
}

function writeHeadline(newsId, title){
  content = newsId + title + "</li>"
  createHeadlines(content, scriptCaller(element));
  return content;
}

function scriptCaller(element){
  return element;
}

function createHeadlines(content, target=scriptCaller(element)){
   console.log(document.getElementById(target))
     document.getElementById(target).innerHTML += content;
 }

function readGuardian(articles=5){

  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/uk-news?show-fields=body&show-blocks=all');
  xhr.onload = function() {
      if (xhr.status === 200) {
        for (var i=0; i<=articles; i++){
          guardianObject = JSON.parse(xhr.responseText).response.results[i];
          headlineArray.push(guardianObject);
        }
        updateHeadlines();
      //  return headlineArray
      }
      else {
          alert('Request failed.  Returned status of ' + xhr.status);
      }
  };
  xhr.send();
}
