app.filter('kebabCase', function () {
  return function (input) {
    return input.replace(/_|\s+/g , "-");
  };
});

app.filter('camelCase', function () {
  return function (input) {
    var splitAtSpecified = input.split(/-|_|\s+/g);
    var camelArr = [];
    for (i=0; i<splitAtSpecified.length; i++) {
      i === 0 ? camelArr.push(splitAtSpecified[i].toLowerCase()) : camelArr.push(splitAtSpecified[i][0].toUpperCase()+ splitAtSpecified[i].slice(1));
    }
    return camelArr.join("");
  };
});


// function we(input) {
//   var splitAtSpecified = input.split(/-|_|\s+/g);
//   var camelArr = [];
//   for (i=0; i<splitAtSpecified.length; i++) {
//     i === 0 ? camelArr.push(splitAtSpecified[i].toLowerCase()) : camelArr.push(splitAtSpecified[i][0].toUpperCase()+ splitAtSpecified[i].slice(1));
//   }
//   return camelArr.join("");
// }