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
import UsersLayout from './components/MyRouter/UsersLayout.vue'
import UserList from './components/MyRouter/UserList.vue'
import UserDetails from './components/MyRouter/UserDetails.vue'


  
const routes = [
    { path: '/:id',components:{
      UserPostProfile3,
      UserPostProfile4
    },
    props: { default: true, UserPostProfile3: true,UserPostProfile4:false } 
  },
    { path: '/about', component: AboutView,name:'about' },
    // 动态字段以冒号开始
    { path: '/users/:username/posts/:postId', component: UserPost },
    {path:'/about/:comp/:id',component:AboutDetail,name:'adName'},
    {path:'/users/:username/posts/:postId',UserPost,children:[
      {
        // 当 /user/:username/profile 匹配成功
        // UserProfile 将被渲染到 User 的 <router-view> 内部
        path: 'profile',
        component: UserPostProfile,
      },
      {
        // 当 /user/:username/posts 匹配成功
        // UserPosts 将被渲染到 User 的 <router-view> 内部
        path: 'profile2',
        component: UserPostProfile2,
      }
    ]},
    {
      path:'/re/redirect1-about',redirect:{name:'about'}
    },{
      path:'/re/redirect2-about',redirect:'/about'
    },{
      path:'/re/redirect3-about',redirect:'aaa'
    },
    //别名 ：页面看到url是假的，其实访问的是别名的页面
    {
      //访问 /alias-user-list  /user/list  /user-list/li    都是UserList组件页面
      path:'/user-list',component:UserList,alias:['/alias-user-list','/user/list','/li']
    },{
      path: '/users',
      component: UsersLayout,
      children: [
        // 为这 3 个 URL 呈现 UserList
        // - /users
        // - /users/list
        // - /people
        { path: '', component: UserList, alias: ['/people', 'list'] },
      ],
    },{
      path: '/users/:id',
      component: UsersLayout,
      children: [
        // 为这 3 个 URL 呈现 UserDetails
        // - /users/24
        // - /users/24/profile
        // - /24
        { path: 'profile', component: UserDetails, alias: ['/:id', ''] },
      ],
    }
  ]

  const router = createRouter({

    
    // history: createMemoryHistory(),
    // 这个页面url会变化
    history: createWebHistory(),
    routes,
  })


  // router.beforeEach((to,from)=>{
  //   console.log('router-before-each-from',from);
  //   console.log('router-before-each-to',to);
  //   //这里会中断所有定义的路由，除了重定向
  //   // return false;

  //   //只有这个会一直死循环
  //   //router.push('/newurl');
  //   //or
  //   //router.push({name:'about'});


  // })

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

