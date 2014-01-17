// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to have to write it from scratch:
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
var nonStringifiableValues = [
  {
    'a-function': function(){},
    'an-integer': 1,
    'the-value-undefined': undefined,
    'a-string': 'sup?'
  }
];

var stringifyJSON = function (obj) {


  if (Array.isArray(obj)) {
    return mapArray(obj,0);
  } else {
    return numString(obj)
  };

  function numString(obj) {
    if ( typeof obj === 'string') {
        return '\"' + obj + '\"';
      } else {
        return obj + "";
      };
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
      if ( typeof list[y] === 'string') {
        list[y] = "\"" + list[y] + "\"";
      } else {
        list[y] = list[y];
      };
    // Iterate through array
      return mapArray(list,y+1);
    }
  };



};


console.log(stringifyJSON(arrayWithValidElements));