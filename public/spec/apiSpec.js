"use strict";

describe("getURL", function(){

  var url = 'http://localhost:8080/sample_data.json'
  it("is able to connect to the server", function(){
    getURL(url, function(){
      expect(this.status).toEqual(200);
    });
  })
  it("contains 'UK News'", function() {
    getURL(url, function(){
      expect(this.responseText).toContain("UK news")
    });
  })
})

describe("guardianApi", function(){
  it("it is able to return a news article using API", function(){
    guardianApi("http://localhost:8080/sample_data.json");
    expect(headlines()).toContain("Giggs and Neville skyscrapers 'threaten Manchester's heritage'");
  });
});
