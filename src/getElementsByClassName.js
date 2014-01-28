

// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But in stead we're going to implement it from scratch:
var getElementsByClassName =   function (target) {

  var index = 0; // for elementList
  var elementList = []; // list of elements with class that matches target
  var location = document.body;

  function loop (target,location) {
    // If location is undefined, location is set as body
    console.log(location);
    var docElements = location.children;
    console.log(docElements);
   // Iterate through document location's children
    for (var i = 0; i < docElements.length; i++) {
      // Recursive Case: checks if iteration contains children
      if (docElements[i].children.length > 0) {
        console.log(docElements[i]);
        loop(target, docElements[i]);
      }
      // Check if contains class
      if(docElements[i].classList.length !== 0) {
        console.log(docElements[i].className);
        var namesList = docElements[i].className.split(' ');
        // Check if class matches specified class
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
  return elementList;
}