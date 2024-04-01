import router from './router.js';
import { createApp } from 'vue'
import App from './App.vue'
import BaseCard from './components/UI/BaseCard.vue'

const app = createApp(App)

app.component('base-card', BaseCard);
app.use(router);
app.mount('#app')
