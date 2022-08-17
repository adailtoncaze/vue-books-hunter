import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./index.css";

import PrimeVue from 'primevue/config';
import Toast from 'primevue/toast';
import ToastService from 'primevue/toastservice';
import Button from 'primevue/button';
import ScrollPanel from 'primevue/scrollpanel';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Tooltip from 'primevue/tooltip';

import 'primevue/resources/themes/saga-blue/theme.css'       //theme
import 'primevue/resources/primevue.min.css'                //core css
import 'primeicons/primeicons.css'                           //icons
const app = createApp(App);
app.use(router);
app.use(PrimeVue);
app.use(ToastService);

app.directive('tooltip', Tooltip);

app.component('PVToast', Toast);
app.component('PVButton', Button);
app.component('PVScrollPanel', ScrollPanel);
app.component('PVDataTable', DataTable);
app.component('PVColumn', Column);

app.mount("#app");
