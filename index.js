const moment = require("moment");

console.log(moment().format("MMMM Do YYYY, h:mm:ss a"));
console.log(moment().format("dddd"));
console.log(moment().format("MMM Do YY"));

let dateOne = moment("2020-01-01");
let dateTwo = moment("2020-14-01");

console.log(dateOne.isValid());
console.log(dateTwo.isValid());
console.log(dateTwo.invalidAt());

console.log(moment().add(7, "d").calendar());
console.log(moment().add(7, "M").calendar());
console.log(moment().add(7, "y").calendar());

console.log(moment().subtract(7, 'days').calendar());
console.log(moment().subtract(7, 'months').calendar());
console.log(moment().subtract(7, 'years').calendar());

let date1 = moment('2014-11-11');
let date2 = moment('2015-09-11');

console.log(date1.diff(date2,"days"));


let date3 = moment('2014-11-27');
let date4 = moment('2015-09-16');

console.log(date3.diff(date4,"M"));

console.log(moment('2020-01-01').isAfter('2018-01-01'));

console.log(moment('2010-01-01').isAfter('2018-01-01'));

console.log(moment([2019]).isLeapYear());

console.log(moment([2020]).isLeapYear())


// lodash

const lodash = require("lodash");

let chr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k"];

let chunked = lodash.chunk(chr, 4);

console.log(chunked);

console.log(lodash.difference([2, 5], [2, 6]));

console.log(lodash.compact([0, 5, false, 8, 9,"", -5, null]));

console.log(lodash.drop([1,5,6,8,9,10],3));

console.log(lodash.flattenDeep([1,[4],[6,[7,[9,[10]]]],11]))

console.log(lodash.fromPairs([["a",1],["b",2],["c",3],["z",26]]));