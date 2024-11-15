import './assets/main.css';
import ElementPlus from "element-plus";
import { createApp,ref } from 'vue';
import '../node_modules/element-plus/theme-chalk/index.css';
import AppVueAdminTemplate from './AppVueAdminTemplate.vue';
import router from './router'

import store from './store'

const app = createApp(AppVueAdminTemplate)

console.log('当前环境变量',import.meta.env)

app.use(ElementPlus)
app.use(router)
app.use(store)
app.mount('#app')