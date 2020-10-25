document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();
  let text = e.target.text.value;


  let password = e.target.password.value;
  console.log("==", email, password);
});
