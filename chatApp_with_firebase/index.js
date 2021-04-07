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

  let user = localStorage.getItem("cid");

  // if (user) {

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
      let i = 1;
      console.log("data", data);
      data.forEach((val, key) => {
        console.log("val", val.data());
        let userId = val.id;
        container.innerHTML += `
        <div id="listItem"  onclick="roomHandler('${userId}')"> 
        <img src="https://picsum.photos/200/${++i}00" >
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

var objDiv = document.getElementById("tt");
        objDiv.scrollTop = objDiv.scrollHeight;

        console.log("objDiv.scrollTop",objDiv.scrollTop)
        console.log("objDiv.scrollTop",objDiv.scrollHeight)

const roomHandler = (id) => {
  localStorage.setItem("friendId", id);
  location.replace("chatRoom.html");
  console.log("id ===>", id);
};

const onRoomLoad = async () => {
  let friendId = localStorage.getItem("friendId");
  let { uid } = await dashboardAuth();
  let roomExist = false;

  return db
    .collection("chatRooms")
    .where("users." + uid, "==", true)
    .where("users." + friendId, "==", true)
    .get()
    .then((room) => {
      console.log("room", room);
      room.forEach((val) => {
        localStorage.setItem("roomId", val.id);
        roomExist = {
          data: val.data(),
          id: val.id,
        };
      });

      if (!roomExist) {
        const obj = {
          createdAt: Date.now(),
          users: {
            [uid]: true,
            [friendId]: true,
          },
        };
        db.collection("chatRooms")
          .add(obj)
          .then((data) => {
            console.log("data ====> ==", data);
            localStorage.setItem("roomId", data.id);
          })
          .catch((error) => {
            console.log("error ===>", error);
          });
      }
    });
};

const sendMessage = async () => {
  let roomId = localStorage.getItem("roomId");
  let text = document.getElementById("msg_text");
  let { uid } = await dashboardAuth();

  let obj = {
    message: text.value,
    userId: uid,
    timestamp: Date.now(),
  };
  db.collection("chatRooms").doc(roomId).collection("messages").add(obj);
};

const getMessages = async () => {
  let roomId = localStorage.getItem("roomId");
  let cont = document.getElementById("chat_containerId");
  let { uid } = await dashboardAuth();
  db.collection("chatRooms")
    .doc(roomId)
    .collection("messages")
    .orderBy("timestamp")
    .onSnapshot((doc) => {
      cont.innerHTML = `<span></span>`
      doc.forEach((val) => {
        console.log("===", val.data());
        if (val.data().userId === uid) {
          cont.innerHTML += `
                    <div class="container darker">
                   <p>${val.data().message}</p>
                 </div>`;
          return;
        }
        cont.innerHTML += `
      <div class="container">
                  <p>${val.data().message}</p>
                </div>
      `;
      });
      var objDiv = document.getElementById("tt");
        objDiv.scrollTop = objDiv.scrollHeight;
    });
};
console.log("====>", auth.currentUser);
