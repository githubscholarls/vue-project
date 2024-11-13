import './assets/main.css';
import ElementPlus from "element-plus";
import 'element-ui/lib/theme-chalk/index.css';
import { createApp,ref } from 'vue';
import '../node_modules/element-plus/theme-chalk/index.css';
import AppVueAdminTemplate from './AppVueAdminTemplate.vue';
import router from './router'


const app = createApp(AppVueAdminTemplate)
app.use(ElementPlus)
app.use(router)
app.mount('#app')