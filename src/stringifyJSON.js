// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to have to write it from scratch:

// used for stringifyJSON spec
// hint: JSON does not allow you to stringify functions or
// undefined values, so you should skip those key/value pairs.

var stringifyJSON = function (obj) {


  if (Array.isArray(obj)) {
    return mapArray(obj.slice(),0);
  } else if (Object.prototype.isPrototypeOf(obj)) {
    return mapObject(obj,0);
  } else {
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
      var propArray = Object.keys(list);
      var prop = propArray[y];
      var propVal = list[prop];
      // Base Case
      if ( y === propArray.length ) {
       return '{' + sum + '}';
      }
      // Recursive Case
      if (typeof propVal === 'undefined' || Function.prototype.isPrototypeOf(propVal)) {
        return loop(list, y+1);
      } else if (Array.isArray(propVal)) {
        sum += "\"" + propArray[y] + "\"" + ':' + mapArray(propVal.slice(), 0);
      } else if (Object.prototype.isPrototypeOf(propVal)) {
        sum += "\"" + propArray[y] + "\"" + ':' + mapObject(propVal, 0);
      } else {
      // Replace with string
        if ( typeof list[prop] === 'string') {
          sum += "\"" + propArray[y] + "\"" + ':' + "\"" + list[prop] + "\"";
        } else {
          sum += "\"" + propArray[y] + "\"" + ':' +  list[prop];
        }
      }
      if (y+1 !== propArray.length){
        sum += ',';
      }
      return loop(list, y+1);
    }

    return loop(list,0);
  }

};
var testObj = {'color': 'brown', 'eyes': [{'greetings': 'hello', 'energy': {'low': [2]} }] };
console.log(stringifyJSON(testObj));