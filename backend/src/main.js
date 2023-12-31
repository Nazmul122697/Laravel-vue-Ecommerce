import { createApp } from 'vue'
import './style.css'
import './main.css';
import App from './App.vue'
import store from './store/index';
import router from './router/index';

createApp(App)
.use(store)
.use(router)
.mount('#app')
