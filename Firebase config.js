/* ==========================================
   FIREBASE CONFIG — Layan Alamrah Portfolio
   Shared by: index.html, admin.html, blog.html
   ========================================== */

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore, doc, getDoc, setDoc, collection, getDocs, addDoc, updateDoc, deleteDoc, onSnapshot }
    from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey:            "AIzaSyBIxhqqk425SFWQXe6Y3KThpV83v5CJvLA",
    authDomain:        "layan-portfolio.firebaseapp.com",
    projectId:         "layan-portfolio",
    storageBucket:     "layan-portfolio.firebasestorage.app",
    messagingSenderId: "568091761785",
    appId:             "1:568091761785:web:a0020d59bf58167f7408a8",
    measurementId:     "G-3GNGZTL7MZ"
};

const app = initializeApp(firebaseConfig);
const db  = getFirestore(app);

export { db, doc, getDoc, setDoc, collection, getDocs, addDoc, updateDoc, deleteDoc, onSnapshot };