// // //FOR LOOP
// var array=['Katie', 'Katie1', 'Katie2'];
// // debugger
// for (var i = 0; i < array.length; i++) {
//   console.log(array[i]);
// }
//to get last number we'd do
// console.log(array[array.length-1]);
// //
// //
// //WHILE LOOP
// var j = 0;
//
// while (j < 5) {
//   console.log('this loop has run' + j + 'times');
//   j++
// }
// // //if bottom j=10 it would only run once as after j is over 5 as equal to 10
// //
// //
// // //Do While - the loop will always run the code once before checking the condition
// var number;
//
// do {
//   number = Math.random();
//   console.log(number)
//
// } while (number < 0.5);
//
// //For in
//
// var myobject = new Object();
//
//
// myobject.a = "1";
// myobject.b = "2";
// myobject.c = "3";
//
// for( var key in myobject) {
//   // console.log(key);
//   console.log(myobject[key]);
// }
//first console section shows letters, second console shows numbers.

for (var i = 1; i <= 100; i++) {
  console.log(i);

  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  }
  else if (i % 3 === 0) {
    console.log('Fizz');
  }
  else if (i % 5 === 0) {
    console.log('Buzz');
  } else {
    console.log(i);
  }
}

//or do
// if (Number.isInteger(i/3) === true)
