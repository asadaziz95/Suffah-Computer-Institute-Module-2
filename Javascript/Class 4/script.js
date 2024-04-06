var studentName = "Ahmed";
var age = 15.5;

var a; // declaration


console.log(typeof studentName);
console.log(typeof age);

studentName = 12;
console.log(typeof studentName);

a = studentName; // assigment

console.log(typeof 'hello'); // see Chapter 3
//<< 'string'
console.log(typeof 10); // see Chapter 4
//<< 'number'
console.log(typeof true); // see Chapter 6
//<< 'boolean'
console.log(typeof { name: 'JavaScript' }); // see Chapter 9
//<< 'object'
console.log(typeof [ 1, 2, 3 ]); // this is an array, covered in Chapter 5
// it's also considered an object
//<< 'object'
console.log(typeof function(){ }); // this is an empty function
// more interesting functions are covered in Chapter 8
//<< 'function