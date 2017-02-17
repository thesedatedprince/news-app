"use strict";

describe("getURL", function(){
  var url = testUrl();
  
  it("is able to connect to the server", function(){
    getURL(url, function(){
      expect(this.status).toEqual(200);
    });
  });
  
  it("contains 'UK News'", function() {
    getURL(url, function(){
      expect(this.responseText).toContain("UK news")
    });
  });
});

describe("guardianApi", function(){
  var url = testUrl();
  
  it("it is able to return a news article using API", function(){
    guardianApi(url);
    // this is a messy test and needs refactoring
    expect(results()[3].webTitle).toContain("Giggs and Neville skyscrapers 'threaten Manchester's heritage'");
  });
});
