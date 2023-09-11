
// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyC_oAyu150UhFio6c4JirAe7qN4wF_cws4",
    authDomain: "chat-app-project-5b30c.firebaseapp.com",
    databaseURL: "https://chat-app-project-5b30c-default-rtdb.firebaseio.com",
    projectId: "chat-app-project-5b30c",
    storageBucket: "chat-app-project-5b30c.appspot.com",
    messagingSenderId: "610026239831",
    appId: "1:610026239831:web:b743d9bee87d021d3b7012"
  };


// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function logout() {
    window.location = "chat_room.html" ;
    
}

user_name = localStorage.getItem("user_name")
room_name = localStorage.getItem("room_name")

function send() {
  msg = document.getElementById("msg").value ;
  firebase.database().ref(room_name).push({
        name : user_name,
        message : msg,
        like : 0
  }) ;
  document.getElementById("msg").value = ""
}