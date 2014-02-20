// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to have to write it from scratch:

// used for stringifyJSON spec
// hint: JSON does not allow you to stringify functions or
// undefined values, so you should skip those key/value pairs.

var stringifyJSON = function (obj) {

  // Control flow
  if (Array.isArray(obj)) {
    // Copy array, so it doesn't alter original
    return mapArray(obj.slice(),0);
  } else if (Object.prototype.isPrototypeOf(obj)) {
    // Objects
    return mapObject(obj,0);
  } else {
    // All primitive values
    return numString(obj);
  }

  function numString(obj) {
    if ( typeof obj === 'string') {
        return '\"' + obj + '\"';
      } else {
        return obj + "";
      }
  }


  function mapArray(list,y) {
    // Base Case
    if ( y === list.length ) {
     return '[' + list.join() + ']';
    }
    // Recursive Case
    if (Array.isArray(list[y])) {
      list[y] = mapArray(list[y].slice(),0);
      return mapArray(list,y+1);
    } else if (Object.prototype.isPrototypeOf(list[y])) {
      list[y] = mapObject(list[y],0);
      return mapArray(list,y+1);
    } else {
    // Replace with string
      if ( typeof list[y] === 'string') {
        list[y] = "\"" + list[y] + "\"";
      } else {
        list[y] = list[y];
      }
    // Iterate through array
      return mapArray(list,y+1);
    }
  }

  function mapObject(list,y) {

    var sum = '';

    function loop (list,y) {
      var objKeys = Object.keys(list);
      var key = objKeys[y];
      // Base Case
      if ( y === objKeys.length ) {
       return '{' + sum + '}';
      }
      // Recursive Case
      if (typeof list[key] === 'undefined' || Function.prototype.isPrototypeOf(list[key])) {
        return loop(list, y+1);
      } else if (Array.isArray(list[key])) {
        sum += "\"" + objKeys[y] + "\"" + ':' + mapArray(list[key].slice(), 0);
      } else if (Object.prototype.isPrototypeOf(list[key])) {
        sum += "\"" + objKeys[y] + "\"" + ':' + mapObject(list[key], 0);
      } else {
      // Replace with string
        if ( typeof list[key] === 'string') {
          sum += "\"" + objKeys[y] + "\"" + ':' + "\"" + list[key] + "\"";
        } else {
          sum += "\"" + objKeys[y] + "\"" + ':' +  list[key];
        }
      }
      if (y+1 !== objKeys.length){
        sum += ',';
      }
      return loop(list, y+1);
    }

    return loop(list,0);
  }

};
var testObj = [
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
testObj.forEach( function (ele) {
  var sum = stringifyJSON(ele) + ' // ' + ele
  console.log(sum);
});
