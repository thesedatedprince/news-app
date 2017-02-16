'use strict';

describe("Guardian", function() {
  it("Reads Guardian JSON object", function(){
      var newsId = "<li class=note id=news-test>"
      var title = "test title";
    expect(writeHeadline(newsId, title)).toContain("test title");
  });
})
