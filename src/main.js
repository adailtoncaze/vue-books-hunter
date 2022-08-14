import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./index.css";

import PrimeVue from 'primevue/config';
import Toast from 'primevue/toast';
import ToastService from 'primevue/toastservice';
import Button from 'primevue/button';
import ScrollPanel from 'primevue/scrollpanel';

import 'primevue/resources/themes/saga-blue/theme.css'       //theme
import 'primevue/resources/primevue.min.css'                //core css
import 'primeicons/primeicons.css'                           //icons
const app = createApp(App);
app.use(router);
app.use(PrimeVue);
app.use(ToastService);

app.component('PVToast', Toast);
app.component('PVButton', Button);
app.component('PVScrollPanel', ScrollPanel);

app.mount("#app");
