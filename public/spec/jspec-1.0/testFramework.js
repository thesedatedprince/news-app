(function(exports) {
    var pass = 0;
    var fail = 0;
    var tests = 0;
    var testTitles = [];
    var befores = {};
    var assert = {};
    var firstArgs;
    var response;

    function expect(firstArg) {
        firstArgs = firstArg;
        return assert;
    }

    function toEqual(secondArg) {
        var outStr = "expected " + firstArgs + " to be equal to " + secondArg
        var result = firstArgs === secondArg;
        output(result, outStr);
    }

    function toNotEqual(secondArg) {
        var outStr = "expected " + firstArgs + " not to be equal to " + secondArg;
        var result = firstArgs !== secondArg
        output(result, outStr);
    }

    function toBeGreaterThan(secondArg) {
        var outStr = "expected " + firstArgs + " to be greater than " + secondArg;
        var result = firstArgs > secondArg
        output(result, outStr);
    }

    function toBeLessThan(secondArg) {
        var outStr = "expected " + firstArgs + " to be less than " + secondArg;
        var result = firstArgs < secondArg
        output(result, outStr);
    }

    function toContain(secondArg) {
        var outStr = "expected " + firstArgs + " to contain " + secondArg;
        var result = firstArgs.includes(secondArg)
        output(result, outStr);
    }

    function output(result, outStr) {
        result ? pass++ : fail++;
        var index = (tests - 1);
        var el = document.getElementById("tests");
        var elChild = document.createElement('div');
        elChild.innerHTML = testTitles[index] + ": " + outStr;
        el.appendChild(elChild);
        elChild.classList.add(result)
        document.getElementById('title').innerHTML = "Pass = " + pass + " Fail = " + fail;
    }

    function it(title, passFunction) {
        beforeEachCaller();
        tests++;
        testTitles.push(title);
        passFunction();
    }

    function initiate() {
        document.getElementById("title").innerHTML = "Pass = 0 Fail = 0";
    }

    function describe(title, passFunction) {
        var el = document.getElementById("tests");
        var elChild = document.createElement('h2');
        elChild.innerHTML = title;
        el.appendChild(elChild);
        clearBefores();
        passFunction();
    }

    function beforeEach(beforeEachFunction) {
        befores = beforeEachFunction;
    }

    function beforeEachCaller() {
        if (typeof(befores) === "function") {
            return befores();
        }
    }

    function clearBefores() {
        befores = {};
    }

    initiate();

    exports.expect = expect;

    assert.toEqual = toEqual;
    assert.toNotEqual = toNotEqual;
    assert.toBeGreaterThan = toBeGreaterThan;
    assert.toBeLessThan = toBeLessThan;
    assert.toContain = toContain;

    exports.beforeEach = beforeEach;
    exports.beforeEachCaller = beforeEachCaller;
    exports.clearBefores = clearBefores;

    exports.it = it;
    exports.describe = describe;

})(this);
