
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

db.collection("users2").add({
    name:"asd",
    age:"as"
})
.then(()=>{
    console.log("data added");
})
.catch(error =>{
    console.log("error",error);
})

// delete method will delete the document
db.collection("users").doc("bio").delete()


// db.collection("users2").get().then(data=>{
//     console.log("data =>",data.docs;
// })
