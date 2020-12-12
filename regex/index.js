
let str1 = "hello this is test and after this test";

let regex1 = /test/;


console.log("log1",str1.match(regex1));


let str2 = "test5";

//  \d is for digit
let regex2 = /\d/g

console.log("log2",str2.match(regex2));

let str3 = "atgd3783hgjh879";

//  \b is for boundary
let regx4 = /\d+/g; // ["3783","879"]

console.log("log3", str3.match(regx4));
// console.log("log4", str3.match(regx4));

//  kkkk-333

let regVanplate = /\b[a-z]{4}-[0-9]{3}\b/g;

let plate = "kkkk-567";

console.log("log 3",regVanplate.test(plate));