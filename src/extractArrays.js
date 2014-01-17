// var obj = [ [ ['inner', [ ['hidden'] ]], 'outer' ] ];
// var newArr = [];

// function mapArrays (array, func) {

//   function checkArray (ele) {
//     ele.forEach( function (ele) {
//       if (Array.isArray(ele)) {
//         checkArray(ele);
//       } else {
//         return ele;
//       }
//     });
//   }

//   array.forEach( function (ele)  {

//     if (Array.isArray(ele)) {
//         checkArray(ele);
//     }

//   })
// }


// var obj = [ 'hello',['ass',[3]], 3, ['why'] ];
// var newArr = [];
// var insideArr = [];
// var obj = {};
// var count = 0;
// var current;

// function mapArrays (array) {

//   function checkArray (ele) {
//     ele.forEach( function (ele) {
//       if (Array.isArray(ele)) {
//         count++;
//         current = ele + count + '';
//         checkArray(ele);
//       } else {
//         insideArr.push(ele);
//       }
//     });
//     var sum = '[' + insideArr.join() + ']';
//     return sum;
//   }

//   array.forEach( function (ele)  {

//     if (Array.isArray(ele)) {
//         newArr.push(checkArray(ele));
//     } else {
//         newArr.push(ele);
//     }
//   })
//   return '[' + newArr.join() + ']';
// }
// console.log(mapArrays(obj));
// console.log(typeof mapArrays(obj) === 'string')

// // Newest

// var list = [ 'hello',['ass',[3]], 3, ['why'] ];

// function mapArray(array,y) {
//     // Base Case
//     if (y === array.length) {
//         return '[' + array.join() + ']';
//     }
//     // Recursive Case
//     if (!Array.isArray(array[y])) {
//         array[y] = array[y] + '';
//         return mapArray(array, y + 1);
//     } else {
//         array[y] = mapArray(array[y], 0, 0);
//         return mapArray(array, y+ 1);
//     }
// }

// console.log(mapArray(list,0,0))


var list = [ 'hello', [3]];

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


console.log(mapArray(list,0))