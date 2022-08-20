import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAnGqXOtScDkPari2NV6IOroy6w4t_Eego",
  authDomain: "giveback-dev.firebaseapp.com",
  projectId: "giveback-dev",
  storageBucket: "giveback-dev.appspot.com",
  messagingSenderId: "643537304589",
  appId: "1:643537304589:web:4b8ffe38fa52976a2b6944",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);


// import { initializeApp } from "firebase/app";
// // import { getAuth } from "firebase/auth";
// import { getFirestore, collection, getDocs } from "firebase/firestore";

// const firebaseConfig = {
//     apiKey: "AIzaSyBkc1z5iTNapiAMHriSCofAXugySzGbDTk",
//     authDomain: "oddaj-7ce87.firebaseapp.com",
//     projectId: "oddaj-7ce87",
//     storageBucket: "oddaj-7ce87.appspot.com",
//     messagingSenderId: "230838287625",
//     appId: "1:230838287625:web:61d131317cf77ec31c27d8",
//     // measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
// };

// export const app = initializeApp(firebaseConfig);
// // export const auth = getAuth();

