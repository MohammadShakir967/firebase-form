  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from  "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";
 
  
  const firebaseConfig = {
    apiKey: "AIzaSyC33zHQHMQ1Z6EzEf5F1Fw7ycq7KYBQ88E",
    authDomain: "practice-f3ea5.firebaseapp.com",
    projectId: "practice-f3ea5",
    storageBucket: "practice-f3ea5.appspot.com",
    messagingSenderId: "474139669794",
    appId: "1:474139669794:web:3b2552a342a4923f09217b"
  };

  
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  window.signUp = function () {
    let email = document.getElementById( "email").value
    let password = document.getElementById("password").value
    
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    
    alert("User Created")
    window.location.href = "login.html"
    const user = userCredential.user;
    console.log(user)
  
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
   
  });
  }

  
window.signIn = function () {
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value

    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {

    alert("Login Successfully")
    const user = userCredential.user;
    console.log(user)
   
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
  }