
const db = firebase.firestore()


// adding data

db.collection("users").doc("bio").set({
    name:"asd",
    age:"as"
})
.then(()=>{
    console.log("data added");
})
.catch(error =>{
    console.log("error",error);
})

// it will create random doc name
db.collection("users2").add({
    name:"abc",
    age:23
})
.then(()=>{
    console.log("data added");
})
.catch(error =>{
    console.log("error",error);
})

// delete method will delete the document
db.collection("users").doc("bio").delete()


// getting data from a document ...
db.collection("users2").doc("0msvBeYkQSPfx33AViT3").get().then(data=>{
    console.log("data =>",data.data())
})

// getting  data from collection

db.collection("users2").get().then(snap=>{
    snap.forEach(doc=>{
        // console.log("doc",doc.data(),doc.id,doc);
    })
})


// queries 
//  it will give data one time not real time
db.collection("users2").where("name","==","abc").get().then(snap=>{
    snap.forEach(doc=>{
        console.log(" query doc",doc.data(),);
    })
})


let name = prompt("Enter your name")
let country = prompt("Enter your country")


// add method creates new doc each time with random id
db.collection("newUsers").add({name,country})

db.collection("users2").onSnapshot(snap=>{
    snap.forEach(doc=>{
        console.log(" onSnapshot",doc.data(),);
    })
})