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


  if (Array.isArray(obj)) {
    return mapArray(obj,0);
  } else if ( typeof obj === 'string')
    return '\"' + obj + '\"';
  } else {
    return obj + "";
  }



  function mapArray(list,y) {
    // Base Case
    if ( y === list.length ) {
     return '[' + list.join() + ']';
    }
    // Recursive Case
    if (Array.isArray(list[y])) {
      list[y] = mapArray(list[y],0);
      return mapArray(list,y+1);
    } else {
    // Replace with string
      list[y] = list[y] + "";
    // Iterate through array
      return mapArray(list,y+1);
    }
  };



};
