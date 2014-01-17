// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to have to write it from scratch:

// used for stringifyJSON spec
// hint: JSON does not allow you to stringify functions or
// undefined values, so you should skip those key/value pairs.

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