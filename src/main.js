import './assets/main.css'

import { createMemoryHistory, createRouter ,createWebHistory} from 'vue-router'

import { createApp,ref } from 'vue'
import ElementPlus from 'element-plus';
import '../node_modules/element-plus/theme-chalk/index.css';
import App from './App.vue'
import App1 from './App1.vue'



import HomeView from './components/MyRouter/HomeView.vue'
import AboutView from './components/MyRouter/AboutView.vue'
import AboutDetail from './components/MyRouter/AboutDetail.vue'
import UserPost from './components/MyRouter/UserPost.vue'
import UserPostProfile from './components/MyRouter/UserPostProfile.vue'
import UserPostProfile2 from './components/MyRouter/UserPostProfile2.vue'
import UserPostProfile3 from './components/MyRouter/UserPostProfile3.vue'
import UserPostProfile4 from './components/MyRouter/UserPostProfile4.vue'


  
const routes = [
    { path: '/', components:{
      UserPostProfile3,
      UserPostProfile4
    } },
    { path: '/about', component: AboutView },
    // 动态字段以冒号开始
    { path: '/users/:username/posts/:postId', component: UserPost },
    {path:'/about/:comp/:id',component:AboutDetail},
    {path:'/userpost/:id',UserPost,children:[
      {
        // 当 /user/:id/profile 匹配成功
        // UserProfile 将被渲染到 User 的 <router-view> 内部
        path: 'profile',
        component: UserPostProfile,
      },
      {
        // 当 /user/:id/posts 匹配成功
        // UserPosts 将被渲染到 User 的 <router-view> 内部
        path: 'profile2',
        component: UserPostProfile2,
      }
    ]}
  ]

  const router = createRouter({

    
    // history: createMemoryHistory(),
    // 这个页面url会变化
    history: createWebHistory(),
    routes,
  })


const app = createApp(App)
app.use(router)
app.mount('#app')

// const app1 = createApp(App1)
// app1.config.globalProperties.App1msg = 'hello'
// app1.use(ElementPlus)
// app1.mount('#app1')

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

