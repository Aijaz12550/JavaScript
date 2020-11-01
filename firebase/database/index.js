
const database = firebase.database();
database.ref("/").child("users/").set("charlot")

database.ref("/").child("users2/").push({name:"abc"})

database.ref("/").child("users2").on("value",snap => {
    console.log("snap",snap.val());
    let data = []
    for(let key in snap.val()){
        data.push({...snap.val()[key],key})
    }
    console.log("data",data);
})


database.ref("/").child("users2").remove()
console.log("firebase",database);

const firestore = firebase.firestore();

firestore.collection("cities").doc("LA").set({
    name: "Los Angeles",
    state: "CA",
    country: "USA"
})
.then(function() {
    console.log("Document successfully written!");
})
.catch(function(error) {
    console.error("Error writing document: ", error);
});
db.collection("cities").doc("DC").delete().then(function() {
    console.log("Document successfully deleted!");
}).catch(function(error) {
    console.error("Error removing document: ", error);
});