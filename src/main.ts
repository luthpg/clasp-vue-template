import { createApp } from 'vue';
import './assets/style/global.css';
// @ts-expect-error vue-toaster library is Plain Javascript
import Toast from '@meforma/vue-toaster';
import Vuetify from './helpers/vuetify';
import App from './App.vue';

createApp(App).use(Toast).use(Vuetify).mount('#app');
