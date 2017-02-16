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

guardianApi("this",function(){
  JSON.parse(this.responseText).response.results[i];
  console.log("whatever")
  console.log(this.responseText)

})
