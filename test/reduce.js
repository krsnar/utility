require('../src/reduce.js');

let arr = [1,3,4,5,6];

let res = arr.reduce(function(x,y){ return x+y });

console.log(res +' : '+ (res == 19));