console.log(Date());

clock = setInterval(() => {
    document.getElementById("time").innerText = `${new Date().getHours()};${new Date().getMinutes()};${new Date().getSeconds()};` ;
}, 1000)