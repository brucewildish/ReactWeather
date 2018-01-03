//var names = ['Bruce', 'Mike', 'Dave'];
//
// names.forEach(function (name) {
//   console.log('forEach', name);
// });
//
// names.forEach((name) => {
//   console.log('arrowFunc', name);
// });
//
// names.forEach((name) => console.log(name));

// var returnMe = (name) => name + '!';
// console.log(returnMe('Bruce'));

// var person = {
//   name: 'Bruce2',
//   greet: function () {
//     names.forEach((name) => {
//       console.log(this.name + ' says hi to ' + name)
//     });
//   }
// };
//
// person.greet();

// function add (a,b) {
//     return a + b;
// }

// addStatement
var addStatement = (a,b) => {
  return a + b;
}
console.log(addStatement(4,7));

// addExpression
var addExpression = (a,b) => a + b;
console.log(addExpression(3,-2));
console.log(addExpression(5,-5));
