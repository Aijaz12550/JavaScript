
// local storage...

// It is an object like storage.

// let name = prompt("name")
// let data = [
//     {name:"abc"},{name:"abc"},{name:"abc"},{name:"abc"},{name:"abc"},
// ]

// localStorage.setItem("data1",name)

// let data = localStorage.getItem('data1')
// alert(data)

let baseUrl = 'https://jsonplaceholder.typicode.com'

fetch(`${baseUrl}/todos`).then(res => res.json()).then(data=>{
    console.log(data);
})



