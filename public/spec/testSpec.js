describe("Test suite 1", function() {

  it('Equal', function(){
    expect("HELLO").toEqual("HELLO");
  });

  it('Not equal', function(){
    expect("HELLO").toNotEqual("BYE");
  });

  it('Greater than', function(){
    expect(2).toBeGreaterThan(1);
  });

  it('Less than', function(){
    expect(1).toBeLessThan(2);
  });

  it('Contain', function(){
    expect("Yes").toContain("e");
  });

});

describe("Test suite 2", function() {

  it('Equal', function(){
    console.log("before")
    console.log(returnTrue)
    returnTrue = returns(false)
    console.log("after")
    console.log(returnTrue)
    expect(returnTrue()).toBe(true);
  });

  it('array contains element bean', function(){
    expect([1,2]).toContain(1);
  });

});

function returnTrue(){
  return true
}
