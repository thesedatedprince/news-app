"use strict";

describe("getURL", function(){
  it("is able to connect to the server", function(){
    getURL(function(){
      expect(this.status).toEqual(200);
    });
  })
  it("contains 'UK News'", function() {
    getURL(function(){
      expect(this.responseText).toContain("UK news")
    });
  })
})
