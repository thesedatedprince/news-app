(function() {
  window.addEventListener("load", function() {
    var apiInterface = new ApiInterface;
    apiInterface.getHeadlines();
    apiInterface.updateHeadlines();
    apiInterface.createHeadlines();
  });
})();