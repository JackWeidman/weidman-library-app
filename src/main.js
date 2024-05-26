import { createApp } from 'vue';
import App from './App.vue';
import BaseCard from './components/UI/BaseCard.vue';
import { initializeApp } from 'firebase/app';
import { getAuth} from 'firebase/auth';
import { getDatabase } from 'firebase/database';
import firebaseConfig from './firebaseConfig'; // Make sure you have this file with your Firebase config

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const database = getDatabase(firebaseApp);
console.log('Firebase initialized:', firebaseApp);
console.log('Auth:', auth);
console.log('Database:', database);
// Create Vue app
const app = createApp(App);

// Provide Firebase services globally
app.provide('auth', auth);
app.provide('database', database);

app.component('base-card', BaseCard);

app.mount('#app');
