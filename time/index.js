

console.log("log 1");

// sync and async
//  single thread and miulti thread 

simpleLog = setTimeout(()=>{
    console.log(" log timeout");
},3000)


interval__ = setInterval(() => {
    console.log("interval");
}, 500);


btn.onclick = () => {

    clearTimeout(simpleLog)
    clearInterval(interval__)
}


console.log("log 2");