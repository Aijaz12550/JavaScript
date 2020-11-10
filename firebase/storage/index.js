let storage = firebase.storage()


upload.onclick = () =>{
    let file = document.getElementById("myFile").files[0]
    storage.ref("myFiles").put(file).then(success=>{
        console.log(success)
        storage.ref("myFiles").getDownloadURL().then(success=>{
            console.log(success)
        }).catch(error=>{
            console.log(error);
        })
    }).catch(error=>{
        console.log(error)
    })
}