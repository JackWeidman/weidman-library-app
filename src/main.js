import { initializeApp } from "firebase/app";
import { createApp } from 'vue'
import App from './App.vue'
import BaseCard from './components/UI/BaseCard.vue'

const firebaseConfig = {
    apiKey: "AIzaSyD9mS2ktlfVmR-VU4puo9aMmpAFLTXQZxo",
    authDomain: "weidman-family-library.firebaseapp.com",
    databaseURL: "https://weidman-family-library-default-rtdb.firebaseio.com",
    projectId: "weidman-family-library",
    storageBucket: "weidman-family-library.appspot.com",
    messagingSenderId: "166456432095",
    appId: "1:166456432095:web:75ec4d0b775d59659ca06a"
  };
  
  // Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);


const app = createApp(App)

app.component('base-card', BaseCard);

app.mount('#app')
