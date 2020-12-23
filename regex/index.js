let str1 = "hello this is test and after this test";

let regex1 = /test/;

console.log("log1", str1.match(regex1));

let str2 = "test5";

//  \d is for digit
let regex2 = /\d/g;

console.log("log2", str2.match(regex2));

let str3 = "atgd3783hgjh879";

//  \b is for boundary
let regx4 = /\d+/g; // ["3783","879"]

console.log("log3", str3.match(regx4));
// console.log("log4", str3.match(regx4));

//  kkkk-333

let regVanplate = /\b[a-z]{4}-[0-9]{3}\b/g;

let plate = "kkkk-567";

console.log("log 3", regVanplate.test(plate));

// \s for space
// \b boundary
//  \w for word
// \D non digit
let str4 = "there are some cats";

let regx5 = /cats| dogs|birds/;

let str5 = "hello evenryone";

let regx6 = /hello/i;

console.log("log6",regx6.test(str5));

let dateValidation = /\b[0-3][0-9]-[0-1][0-9]-[0-9]{4}/

console.log("date",dateValidation.test("39-19-1996"));

let dateValidation2 = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/;

console.log("date val",dateValidation2.test("39-12-1996"));
