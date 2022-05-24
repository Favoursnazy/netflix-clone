// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCa5rz0pEExLK2gJgQHoAl7heSYbu8azO0",
    authDomain: "netflix-clone-dba5f.firebaseapp.com",
    projectId: "netflix-clone-dba5f",
    storageBucket: "netflix-clone-dba5f.appspot.com",
    messagingSenderId: "572639466413",
    appId: "1:572639466413:web:bc548af8bde89688a38724"
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }