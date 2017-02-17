'use strict';

describe("Guardian", function() {

  beforeEach(function() {
    var apiInterface = new ApiInterface;
    var url = testUrl();
    guardianApi(url);
  });

  // Pending, needs a spy
  // it("iterates over headlineArray and passes newsId and title to writeHeadline", function() {
  //     updateHeadlines();

  // })

  it("writes id and title to contentArray", function(){
    var newsId = "<li class=note id=news-test>";
    var title = "test title";
    expect(apiInterface.writeHeadline(newsId, title)).toContain("test title");
  });
});
