
let emailInput = document.getElementById("email")

emailInput.addEventListener("change", e => {
    console.log("e",e.target.value)
})

let btn = document.getElementById("submit")

btn.addEventListener("click", e => {
    alert("click")
})

let arr = ["val 1", "val 2", "val 3", "val 4","val 5", "val 6","val 7", "val 8"]