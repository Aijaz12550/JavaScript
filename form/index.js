document.getElementById("form").addEventListener("submit", e => {
    e.preventDefault();
    let email = e.target.email.value;
    let password = e.target.password.value;

    console.log("==",email,password);
})


