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

  it('array contains element bean', function(){
    expect([1,2]).toContain(1);
  });

});

describe("Spies", function() {

  it('spies', function(){

    expect(returnTrue()).toBe(true); // currently true - will pass
    expect(returnTrue()).toBe(false); // currently true - will fail
    returnTrue = returns("returnTrue", false) // change the return value of returnTrue() to false
    expect(returnTrue()).toBe(false); // now we have set the spy, currently true - will pass

    expect(something()).toBe(1); // currently 1 - will pass
    expect(something()).toBe(0); // currently 0 - will fail
    something = returns("something", 0); // change the return value of something() to 0
    expect(something()).toBe(0); // now we have set the spy, currently 0 - will pass

  });

});

// examples for spies

function returnTrue(){
  return true;
}

function something(){
  return 1;
}
