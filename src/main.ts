import { createApp } from 'vue';
import './assets/style/global.css';
// @ts-expect-error
import Toast from '@meforma/vue-toaster';
import App from './App.vue';

createApp(App).use(Toast).mount('#app');
