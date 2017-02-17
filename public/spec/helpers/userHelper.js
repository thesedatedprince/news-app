"use strict";

(function(exports) {
  // Maybe there's a better place to store these urls? 
  var cloud9SampleUrl = "https://ruby-learning-benjcarson.c9users.io/Projects/7week/news-app/public/sample_data.json";
  var localHostUrl = "http://localhost:8080/sample_data.json";
  var returnUrl = localHostUrl;
  
  function _userCloud9(bool) {
    if(bool) { returnUrl = cloud9SampleUrl }
  }

  function userCheck() {
    var errorMessage = "Failed to execute 'send' on 'XMLHttpRequest': Failed to load '"+localHostUrl+"'.";
    
    try {
      getURL(localHostUrl, function(){});
    }
    catch(error) {
      if(error.message === errorMessage) {
        _userCloud9(true);
      }
    }
  }
  
  function testUrl() {
    userCheck();
    return returnUrl;
  }
  
  exports.userCheck = userCheck;
  exports.testUrl = testUrl;
})(this);
