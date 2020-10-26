console.log("firebase",firebase);
console.log("database",firebase.database());

let db = firebase.database()

// Add Data
// simply adding some data

// set will replace the refernce if it is present previously otherwise it will create new one.
db.ref("user").set({age:"yyyy"})
.then(success => {
    console.log("data added");
}).catch(error => {
    console.log("error",error);
})

db.ref("company").child("hr").child("manager").push({name:"jhgj",age:33})
db.ref("company").child("hr").child("Recruiter").push({name:"jhgj",age:33})
// push method add new data with random key
db.ref("users").push({name:"new user"}).then(data=>{

}).catch(error => {
    console.log("error",error);
})

// function once(a){
//     if(a === "value"){
//         jhjhg
//     }
// }
// getting data

// once method is get data one time on network request
db.ref("company").child("hr").once("value",(snap)=>{
    console.log("snap",snap.val());
})

// it gets data real time
db.ref("company").child("hr").on("value",(snap)=>{
    console.log("snap on",snap.val());
})

// remove
db.ref("company").child("hr").remove()
db.ref("company").set(null);


