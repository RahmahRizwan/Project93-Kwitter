var firebaseConfig = {
        apiKey: "AIzaSyBShZzysN1aSSHiifnWZeH1NGBNCvPvd_Q",
        authDomain: "let-chat-web-app-d1084.firebaseapp.com",
        projectId: "let-chat-web-app-d1084",
        storageBucket: "let-chat-web-app-d1084.appspot.com",
        messagingSenderId: "1051789243350",
        appId: "1:1051789243350:web:16f40f8245573347036a77"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);



  user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome "+user_name+" ! ";