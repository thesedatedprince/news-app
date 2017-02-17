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

  var url;

  beforeEach(function() {
    url = testUrl();
    guardianApi(url);
  });

  it("it is able to return a news article using API", function(){
    expect(results()[4].webTitle).toContain("twitter");
  });

  it("gets an image URL with each story", function() {
    expect(results()[4].fields.thumbnail).toContain(".jpg")
  })
});
