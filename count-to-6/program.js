// var name = process.argv[2];
// var lowerName = name.toLowerCase();
//
// console.log(
// `Hello, ${name}!
// Your name lowercased is \"${lowerName}\".`
// );


// Exercise 3
// var inputs = process.argv.slice(2);
//
// var result = inputs.map(input => input.slice(0,1))
//                    .reduce((input1, input2) => input1 + input2);
//
// console.log(`[${inputs}] becomes \"${result}\"`);

//Exercise 4

// var foot = {
//   kick: function() {
//     this.yelp = "Ouch!";
//     setImmediate(() => console.log(this.yelp));
//   }
// };
// foot.kick();

//Exercise 5
//
// var inputs = process.argv.slice(2);
// var min = Math.min(...inputs);
//
// console.log(`The minimum of [${inputs}] is ${min}`);

//Exercise 6
//
// module.exports = function average(...args) {
//   var total = args.reduce((soFar, arg) => soFar + arg);
//   return total / args.length;
// }


// Exercise 7
// module.exports = function midpoint(lower = 0, upper = 1) {
//   return upper + lower / 2
// };

// module.exports = (x = 0, y = 1) => (x + y)/2;


// // Exercise 8
// module.exports = (input = "", num = input.length) => {
//   return `${input}` + `!`.repeat(num);
// }
