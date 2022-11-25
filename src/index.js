import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


/*import { initializeApp } from 'firebase/app';
import { getAuth ,
   onAuthStateChanged,
   connectAuthEmulator,
   signInWithEmailAndPassword, 
  } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

/*const firebaseApp = initializeApp({

  apiKey: "AIzaSyCZRz1z2jzq7AfeDFgVMBE787yK0QTbmts",
  authDomain: "myfoodrecipes-1cfe5.firebaseapp.com",
  projectId: "myfoodrecipes-1cfe5",
  storageBucket: "myfoodrecipes-1cfe5.appspot.com",
  messagingSenderId: "551748360213",
  appId: "1:551748360213:web:e13dbf83d3e9940f4cd61c"
});/*
//const app = initializeApp(firebaseConfig);

/*const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

// Detect authorication state
onAuthStateChanged(auth, user => {
  if (user != null){
  console.log('logged.in!');
  }else{
    console.log('No user!');
  }
});

connectAuthEmulator(auth, 'http://localhost:9099');

const loginEmailPassword = async () => {
  const loginEmail = txtEmail.value;
  const loginPassword = txtPassword.value;

  const usercredentials = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);

}

btnLogin.addEventlistener('click', loginEmailPassword);*/

