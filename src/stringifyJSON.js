// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to have to write it from scratch:

var obj = {'property': 'hello', butt: 'ass', number: function(){}};

var stringifyJSON = function (obj) {

  var keysArr = Object.keys(obj),
      strArr = [],
      index = 0;

  function loop () {

    if (index >= keysArr.length) {
      return strArr.join();
    } else {
      var prop =  keysArr[index],
          value = obj[prop],
          propVal;
      console.log('this is: ' + value)
      if (typeof value === 'undefined' || Function.prototype.isPrototypeOf(value)) {
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

};

console.log(stringifyJSON(obj));