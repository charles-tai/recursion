

// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But in stead we're going to implement it from scratch:
function getElementsByClassName(target) {

  var elementList = []; // list of elements with class that matches target
  var index = 0; // for elementList
  var location = document.body;

  function loop (target,location) {
    var docElements = location.children;
    // Iterate through document location's children
    for (var i = 0; i < docElements.length; i++) {
      // Recursive Case: checks if iteration contains children
      if (docElements[i].children.length > 0) {
        loop(target, docElements[i]);
      }
      // Check if it possesses class
      if(docElements[i].classList.length !== 0) {
        // Check if class matches specified class
        var namesList = docElements[i].className.split(' ');
        for (var j = 0; j < namesList.length; j++) {
          if (namesList[j] === target) {
            elementList[index] = docElements[i];
            index++;
          }
        }
      }
    }
  }
  loop(target,location);
  console.log(elementList);
  return elementList;
}