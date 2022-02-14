import {createApp} from 'vue';
import './assets/main.css';
import App from './App.vue';
import router from './router';
import store from './store';
import PrimeVue from 'primevue/config';
import primePlugin from './primePlugin';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import 'primevue/resources/themes/tailwind-light/theme.css';


createApp(App).use(store).use(router).use(PrimeVue).use(primePlugin).mount('#app');

