
let emailInput = document.getElementById("email")

emailInput.addEventListener("change", e => {
    console.log("e",e.target.value)
})

let btn = document.getElementById("submit")

btn.addEventListener("click", e => {
    alert("click")
})