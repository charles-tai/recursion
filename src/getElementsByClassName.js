

// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But in stead we're going to implement it from scratch:
function getElementsByClassName(target) {

  var targetElements = []; // list of elements with class that matches target
  var index = 0; // for targetElements

  function loop (target, parentNode) {
    var elementNodes = parentNode.children;
    // Iterate through parentNode's elementNodes
    for (var i = 0; i < elementNodes.length; i++) {
      // Recursive Case: checks if iteration contains children
      if (elementNodes[i].children.length > 0) {
        loop(target, elementNodes[i]);
      }
      // Check if it possesses class
      if(elementNodes[i].classList.length !== 0) {
        // Check if class matches specified class
        var classNames = elementNodes[i].className.split(' ');
        for (var j = 0; j < classNames.length; j++) {
          if (classNames[j] === target) {
            targetElements[index] = elementNodes[i];
            index++;
          }
        }
      }
    }
  }
  loop(target,document.body);
  console.log(targetElements);
  return targetElements;
}