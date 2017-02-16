"use strict";

describe("getURL", function(){
  it("is able to connect to the server", function(){
    var xhr = getURL();
    expect(xhr.status).toEqual(200);
  })
})
