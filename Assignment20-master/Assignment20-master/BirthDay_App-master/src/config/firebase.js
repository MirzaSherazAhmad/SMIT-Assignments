
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";



const firebaseConfig = {
    apiKey: "AIzaSyAEUQqq3mcBr2SiWlyTvvo38jTrjpSF1C8",
    authDomain: "website-6c2aa.firebaseapp.com",
    projectId: "website-6c2aa",
    storageBucket: "website-6c2aa.appspot.com",
    messagingSenderId: "145738428096",
    appId: "1:145738428096:web:ba34eedcd53ad8d470c725"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app)

export { auth, db }

