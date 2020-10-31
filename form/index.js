<<<<<<< HEAD
document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();
  let text = e.target.text.value;


  let password = e.target.password.value;
  console.log("==", email, password);
});
=======
document.getElementById("form").addEventListener("submit", e => {
    e.preventDefault();
    let email = e.target.email.value;
    let password = e.target.password.value;

    console.log("==",email,password);
})


>>>>>>> 10f97fe02502835b9411dfc1d926c865651ea7cb
