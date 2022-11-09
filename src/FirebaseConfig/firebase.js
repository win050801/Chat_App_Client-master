import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

export const firebaseConfig = { 
  apiKey : 'AIzaSyB0PBzGpIejmZXEHsXb6C4jeNsCeBdjAHc' , 
  authDomain : 'otp-chatapp-51b04.firebaseapp.com' , 
  projectId : 'otp-chatapp-51b04' , 
  storageBucket : 'otp-chatapp-51b04.appspot.com' , 
  messagingSenderId : '127094998162' , 
  appId : '1:127094998162:web:20bc1dae238e54358c524b',
};

  if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

