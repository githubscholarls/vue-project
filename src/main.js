import './assets/main.css'

import { createApp,ref } from 'vue'
import ElementPlus from 'element-plus';
import '../node_modules/element-plus/theme-chalk/index.css';
import App from './App.vue'
import App1 from './App1.vue'



const app = createApp(App)
app.mount('#app')

const app1 = createApp(App1)
app1.config.globalProperties.App1msg = 'hello'
app1.use(ElementPlus)
app1.mount('#app1')

// const newApp = createApp({
//     data() {
//         return {
//           count: 0
//         }
//       },
//       methods:{
//         AddCount(){
//             this.count++;
//         }
//       }
// }).mount('#app1')

