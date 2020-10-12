// local storage...

// It is an object like storage.

// let name = prompt("name")
let data = [
    {name:"abc"},{name:"abc"},{name:"abc"},{name:"abc"},{name:"abc"},
]

localStorage.setItem("data1",JSON.stringify(data))
localStorage.setItem("data2","hgjhgjh")

 data = localStorage.getItem('data1')

 localStorage.charlotte = "Intelligent"

 
 btn.onclick = () => {
  delete localStorage.charlotte
 }



let baseUrl = "https://jsonplaceholder.typicode.com";


// get
fetch(`${baseUrl}/todos`,{
    method:"POST",
    headers:{
        authorization : 'bearer token'
    },
    body:JSON.stringify({name:"axy"})
})
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  });
