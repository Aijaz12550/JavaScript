
let currentDate = new Date()

// console.log(currentDate);

//it will give us Thu Jan 01 1970 05:00:00
// because it starts calculating dates from start of 1970

let msOfDay = -3*(24* 60 *60 *1000) //timestamp
console.log("msOfDay",msOfDay);
let c2 = new Date(msOfDay)
console.log("c2",c2)


let timestamp = new Date().getTime()
console.log("timestamp",timestamp)

let month = new Date().getMonth()
console.log("month",month); // 0 - 11

monthArr = ['jan', ' feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sept', 'oct', 'nov', 'dec']
month = monthArr[month]
console.log(month)

let day = new Date().getDay()
day = ['sun','mon','tue','wed'][day]

console.log("day",day);

