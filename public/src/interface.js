var headlineArray = [];
var contentArray = [];

function getHeadlines(){
  guardianApi;

  console.log(results());
}

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
  contentArray.push(content);
  console.log(contentArray)
  return content;
}


function createHeadlines(){
    for (var i=0; i<contentArray.length; i++){
      document.getElementById('headlines').innerHTML += contentArray[i];
    }
 }

// function readGuardian(articles=5){
//
//   var xhr = new XMLHttpRequest();
//   xhr.open('GET', 'http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/uk-news?show-fields=body&show-blocks=all');
//   xhr.onload = function() {
//       if (xhr.status === 200) {
//         for (var i=0; i<=articles; i++){
//           guardianObject = JSON.parse(xhr.responseText).response.results[i];
//           headlineArray.push(guardianObject);
//         }
//         updateHeadlines();
//       }
//       else {
//           alert('Request failed.  Returned status of ' + xhr.status);
//       }
//   };
//   xhr.send();
// }

getHeadlines();
createHeadlines();
