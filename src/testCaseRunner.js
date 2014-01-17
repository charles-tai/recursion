function testCaseRunner (func, array) {
  array.forEach( function (ele) {
    console.log('testcase: ' + ele + ' // ' + 'result: ' + func(ele))
    });
}

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

function isObj (ele) {
  return typeof ele == 'object';
}


testCaseRunner(Array.isArray, arrayWithValidElements);