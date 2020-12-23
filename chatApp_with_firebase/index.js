var firebaseConfig = {
  apiKey: "AIzaSyAxhqloSKVecxLigEXujtGCbFy6tEGAMSs",
  authDomain: "test-p-9e7f3.firebaseapp.com",
  databaseURL: "https://test-p-9e7f3.firebaseio.com",
  projectId: "test-p-9e7f3",
  storageBucket: "test-p-9e7f3.appspot.com",
  messagingSenderId: "1086787259902",
  appId: "1:1086787259902:web:7c3d72facd4893c06604af",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
let auth = firebase.auth();

let email = document.getElementById("email");
let password = document.getElementById("password");
let name = document.getElementById("name");

let errorElement = document.getElementById("signup_error");

const signupHandler = () => {
  let emailVal = email.value || "a@gmail.com";
  let passVal = password.value;
  console.log("passVal", passVal);
  let emailValidationRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  let isValidEmail = emailValidationRegex.test(emailVal);
  if (!isValidEmail) {
    alert("Please use correct email.");
    return;
  }
  if (passVal.length < 6) {
    alert("Password should be 6 charecters long");
    return;
  }

  auth
    .createUserWithEmailAndPassword(emailVal, passVal)
    .then((user) => {
      console.log("user", user.user.uid);
      db.collection("users")
        .doc(user.user.uid)
        .set({
          email: emailVal,
          createdAt: Date.now(),
          name: name.value,
          id: user.user.uid,
        })
        .then((data) => {
          console.log("data", data);
          location.replace("signin.html");
        })
        .catch((error) => {
          console.log("error", error);
        });
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      errorElement.innerText = errorMessage;
      // ..
      console.log("errorMessage", errorMessage);
    });
};
// auth.signOut().then(function() {
//     console.log("==>");
//   }).catch(function(error) {
//     console.log("==>",error);
//   });

const isUserHandler = async () => {
  let user = localStorage.getItem("cid");

  // if (user) {
  //   return;
  // } else {
  //   location.replace("signin.html");
  //   return;
  // }
};

const signinHandler = () => {
  console.log("email", email);
  let emailVal = email.value;
  let passwordVal = password.value;
  auth
    .signInWithEmailAndPassword(emailVal, passwordVal)
    .then((user) => {
      location.replace("index.html");
      console.log("user", user);
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log("error", error.message);
    });
};

let currentUser = () => {
  return new Promise((success, fail) => {
    auth.onAuthStateChanged(function (user) {
      if (user) {
        success(user);
      } else {
        success({});
      }
    });
  });
};

let getUsers = async () => {
  let { uid } = await currentUser();
  let container = document.getElementById("container");

  db.collection("users")
    .where("id", "!=", uid)
    .get()
    .then((data) => {
      console.log("data", data);
      data.forEach((val) => {
        console.log("val", val.data(), "id", val.id);
        container.innerHTML += `
        <div id="listItem" onclick="roomHandler('${val.id}')"> 
        <img src="https://picsum.photos/200/300" >
        <h3>
        ${val.data().name} 
        </h3>
        <span>
        ${val.data().email}
        </span>
        </div>
        `;
      });
    });
};

const roomHandler = (friendId) => {
  localStorage.setItem("friendId", friendId);
  location.replace("chatRoom.html");
};

const onRoomLoad = async () => {
  let friendId = localStorage.getItem("friendId");
  let { uid } = await currentUser();
  let isRoomExist = false;

 await db.collection("chatRooms")
    .where("users." + friendId, "==", true)
    .where("users." + uid, "==", true).get().then(data=>{
      console.log("data",data);
      data.forEach(val=>{
        console.log("val.data()",val.data(),"val.id",val.id);
        localStorage.setItem("roomid",val.id);
        isRoomExist = true
      })
    })
    if(!isRoomExist){

      let obj = {
        createdAt: Date.now(),
        users: {
          [friendId]: true,
          [uid]: true,
        },
      };
      
      db.collection("chatRooms")
      .add(obj)
      .then((data) => {
       
        localStorage.setItem("roomid",data.id);
      })
      .catch((error) => {
        console.log("error", error);
      });
    }
};

let sendMessage = async () => {
  let roomId = localStorage.getItem("roomid");
  let msg = document.getElementById("msg").value;
  let { uid } = await currentUser();

  let obj = {
    message: msg,
    timestamp: Date.now(),
    senderId: uid

  }

  db.collection("chatRooms").doc(roomId).collection("messages").add(obj);
}
let getMessages = async () => {
  let roomId = localStorage.getItem("roomid");
  let { uid } = await currentUser();

  let chatContainer = document.getElementById("chat-cont")
 
  db.collection("chatRooms").doc(roomId).collection("messages").orderBy('timestamp').onSnapshot(msgs=>{
    chatContainer.innerHTML = null
    msgs.forEach(val=>{
      console.log("msgs",val.data())
      if(val.data().senderId === uid){

        chatContainer.innerHTML += `
        <div class="user-msg">
        <p>${val.data().message}</p>
        </div>
        `
      }else{
        chatContainer.innerHTML += `
        <div class="friend-msg">
        <p>${val.data().message}</p>
      </div>
        `
      }
    })
    let cont1 = document.getElementById("scroll-bottom");
    cont1.scrollTop = cont1.scrollHeight
  })
  
}

