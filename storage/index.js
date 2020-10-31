// local storage...

// It is an object like storage.

// let name = prompt("name")
let data = [
    {name:"abc"},{name:"abc"},{name:"abc"},{name:"abc"},{name:"abc"},
]

localStorage.setItem("data1",JSON.stringify(data))
localStorage.setItem("data2","hgjhgjh")

 data = localStorage.getItem('data1')

<<<<<<< HEAD
// localStorage.setItem("data1","hello")
// localStorage.setItem("data2","hello2")
// localStorage.setItem("data3","hello3")

for (i=0; i < localStorage.length; i++){
    console.log(i, localStorage.key(i))

}
for (let key in localStorage){
    if (localStorage.hasOwnProperty(key)){

    }
    console.log(key);
    // console.log(localStorage.hasOwnProperty(key));
}

console.log(localStorage.hasOwnProperty())
let baseUrl = 'http://a7a9bc9ab5e3.ngrok.io/'

fetch(`${baseUrl}api/getData`).then(res => res.json()).then(data=>{
    console.log(data);
})
=======
 localStorage.charlotte = "Intelligent"

 
 btn.onclick = () => {
  delete localStorage.charlotte
 }

>>>>>>> 10f97fe02502835b9411dfc1d926c865651ea7cb

fetch(`${baseUrl}api/add`,{
    method:'POST',
    body:'hello 123',
    
}).then(res => res.json()).then(data=>{
    console.log(data);
})

<<<<<<< HEAD
sessionStorage.setItem("session1", "test1")
=======
let baseUrl = "https://jsonplaceholder.typicode.com";
>>>>>>> 10f97fe02502835b9411dfc1d926c865651ea7cb


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
