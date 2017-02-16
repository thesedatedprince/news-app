
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/uk-news?show-fields=body');
  xhr.onload = function() {
      if (xhr.status === 200) {
          console.log(xhr.responseText.response);
          document.write(xhr.responseText["response"]);
      }
      else {
          alert('Request failed.  Returned status of ' + xhr.status);
      }
  };
  xhr.send();
