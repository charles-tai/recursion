var arrayWithValidElements = [
  9,
  null,
  true,
  false,
  "Hello world",
  [],
  [8],
  ["hi"],
  [8, "hi"],
  [1, 0, -1, -0.3, 0.3, 1343.32, 3345, 0.00011999999999999999],
  [8, [[],3,4]],
  [[[["foo"]]]],
  {},
  {"a": "apple"},
  {"foo": true, "bar": false, "baz": null},
  {"boolean, true": true, "boolean, false": false, "null": null },
  // basic nesting
  {"a":{"b":"c"}},
  {"a":["b", "c"]},
  [{"a":"b"}, {"c":"d"}],
  {"a":[],"c": {}, "b": true}
];

// used for stringifyJSON spec
// hint: JSON does not allow you to stringify functions or
// undefined values, so you should skip those key/value pairs.
var objectWithInvalidAttributes = [
  {
    'a-function': function(){},
    'an-integer': 1,
    'the-value-undefined': undefined,
    'a-string': 'sup?'
  }
];

// used for stringifyJSON and parseJSON specs
var arrayWithInvalidStrings = [
  '["foo", "bar"',
  '["foo", "bar\\"]'
];

// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to have to write it from scratch:

var obj = {'property': 'hello', butt: 'ass', number: function(){}};

function testCaseRunner (func, array) {
  array.forEach( function (ele) {
    console.log('testcase: ' + ele + ' // ' + 'result: ' + func(ele))
    });
}

var stringifyJSON = function (obj) {

  var strArr = [];
  var index = 0;

  if (typeof obj == 'object' && obj !== null && !Array.isArray(obj)) {

    var keysArr = Object.keys(obj);

    function loop () {

      if (index >= keysArr.length) {
        return strArr.join();
      } else {
        var prop =  keysArr[index];
        var value = obj[prop];
        var propVal;

        if (typeof value == 'undefined' || Function.prototype.isPrototypeOf(value)) {
          index++;
          loop();
        }
        else if (typeof value == 'string') {
            propVal = '\"' + prop + '\"' + ':' + '\"' + value + '\"';
        } else {
            propVal = '\"' + prop + '\"' + ':' + value;
        }
        if (propVal) {
          strArr.push(propVal);
          index++;
          loop();
        }
      }
    }
    loop();
    return "{" + strArr.join() + "}";
  } else {
    if (Array.isArray(obj)){
      obj.forEach(function(ele){

        function loopEle() {
          if (Array.isArray(ele)) {
            ele.forEach(function (ele) {

            })
          }
        }

        if (Array.isArray(ele)) {

        }
        else if (typeof ele === 'string') {
        strArr.push('\"' + ele + '\"');
        } else {
        strArr.push(ele);
        }
      })
      return '[' + strArr.join() + ']';
    } else {
      if (typeof obj === 'string') {
        return '\"' + obj + '\"';
      } else {
        return obj + "";
      }
    }
  }



};

testCaseRunner(stringifyJSON, arrayWithValidElements);