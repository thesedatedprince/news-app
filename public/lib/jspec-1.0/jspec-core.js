(function(exports) {
    var pass = 0;
    var fail = 0;
    var tests = 0;
    var testTitles = [];
    var befores = {};
    var matchers = {};
    var firstArgs;
    var response;
    var spyRegistry;

    function expect(firstArg) {
        firstArgs = firstArg;
        return matchers;
    }

    matchers.toEqual = toEqual;
    matchers.toBe = toEqual;
    matchers.toNotEqual = toNotEqual;
    matchers.toBeGreaterThan = toBeGreaterThan;
    matchers.toBeLessThan = toBeLessThan;
    matchers.toContain = toContain;

    function toEqual(secondArg) {
        var outStr = "expected " + truncate(firstArgs) + " to be equal to " + secondArg
        var result = firstArgs === secondArg;
        output(result, outStr);
    }

    function toNotEqual(secondArg) {
        var outStr = "expected " + truncate(firstArgs) + " not to be equal to " + secondArg;
        var result = firstArgs !== secondArg
        output(result, outStr);
    }

    function toBeGreaterThan(secondArg) {
        var outStr = "expected " + truncate(firstArgs) + " to be greater than " + secondArg;
        var result = firstArgs > secondArg
        output(result, outStr);
    }

    function toBeLessThan(secondArg) {
        var outStr = "expected " + truncate(firstArgs) + " to be less than " + secondArg;
        var result = firstArgs < secondArg
        output(result, outStr);
    }

    function toContain(secondArg) {
        var outStr = "expected " + truncate(firstArgs) + " to contain " + secondArg;
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
        spyRegistry = new SpyRegistry()
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

    function truncate(string) {
        return string;
        if (string.length > 20) {
            return string.substring(0, 20) + "...";
        } else {
            return string;
        }
    }

    function returns(name,result){
      if(typeof(result)=== "object"){
        return objReturns(name, result)
      }else{
        return methodReturns(name, result)
      }
    }

    function methodReturns(name, result) {
        spyRegistry.add(name, result);
        var spy = function() {
            return spyRegistry.retrieve(name);
        }
        return spy;
    }

    function objReturns(obj, methods){
        var spy = {}
        methods.forEach(function(method){
            spy[method.name] = methodReturns(obj + "." + method.name,method.result)
        })
        return spy
    }


    function SpyRegistry(){this._registry = {}}

    SpyRegistry.prototype.add = function(name, result) {
        this._registry[name] = result;
    };

    SpyRegistry.prototype.retrieve = function(name, result) {
        return this._registry[name];
    };

    initiate();

    exports.expect = expect;
    exports.returns = returns;


    exports.beforeEach = beforeEach;
    exports.beforeEachCaller = beforeEachCaller;
    exports.clearBefores = clearBefores;

    exports.it = it;
    exports.describe = describe;

})(this);
