﻿import Layout from '../layout/Layout.vue'
import AboutView from '../components/MyRouter/AboutView.vue'
import AboutDetail from '../components/MyRouter/AboutDetail.vue'
import UserPost from '../components/MyRouter/UserPost.vue'
import UserPostProfile from '../components/MyRouter/UserPostProfile.vue'
import UserPostProfile2 from '../components/MyRouter/UserPostProfile2.vue'
import UserPostProfile3 from '../components/MyRouter/UserPostProfile3.vue'
import UserPostProfile4 from '../components/MyRouter/UserPostProfile4.vue'
import UsersLayout from '../components/MyRouter/UsersLayout.vue'
import UserList from '../components/MyRouter/UserList.vue'
import UserDetails from '../components/MyRouter/UserDetails.vue'
import FirstTable from '../components/table/FirstTable.vue'

import { createMemoryHistory, createRouter, createWebHistory } from 'vue-router'


const routes = [
    {
        path:'/table',
        component:Layout,
        name:'表格',
        children:[
            {
                path:'first',
                component:FirstTable,
                name:'第一个表格'
            }
        ]
    },
    {
        path: '/',
        component: Layout,
        name: '首页'
    },
    // {
    //     path: '/:id',
    //     components: {
    //         UserPostProfile3,
    //         UserPostProfile4
    //     },
    //     props:
    //     {
    //         default: true,
    //         UserPostProfile3: true,
    //         UserPostProfile4: false

    //     }
    // },
    {
        path: '/about',
        component: Layout,
        name: 'about',
        children: [
            {
                path: 'a',
                component: AboutView,
                name: 'aboutA'
            },
            {
                path: ':comp/:id',
                component: AboutDetail,
                name: 'AboutDetail'
            }
        ]
    },
    {
        path: '/users',
        component: Layout,
        name: "users",
        children: [
            {
                path: '',
                component: UserList,
                alias: ['/people', 'list']
            },
            {
                // 当 /user/:username/profile 匹配成功
                // UserProfile 将被渲染到 User 的 <router-view> 内部
                path: 'profile',
                component: UserPostProfile
            },
            {
                // 当 /user/:username/posts 匹配成功
                // UserPosts 将被渲染到 User 的 <router-view> 内部
                path: 'profile2',
                component: UserPostProfile2
            }, {
                path: ':id',
                component: UsersLayout,
                children: [
                    // 为这 3 个 URL 呈现 UserDetails
                    // - /users/24
                    // - /users/24/profile
                    // - /24
                    {
                        path: 'profile',
                        component: UserDetails,
                        alias: ['/:id', '']
                    },
                ]
            }
        ]
    },
    {
        path: '/re',
        component: Layout,
        name: "re",
        children: [
            {
                path: 'redirect1-about',
                redirect: {
                    name: 'about'
                }
            },
            {
                path: 'redirect2-about',
                redirect: '/about'
            },
            {
                path: 'redirect3-about',
                redirect: 'aaa'
            }
        ]
    },
    //别名 ：页面看到url是假的，其实访问的是别名的页面
    {
        //访问 /alias-user-list  /user/list  /user-list/li    都是UserList组件页面
        path: '/user-list',
        component: UserList,
        name: "userlist",
        alias: ['/alias-user-list', '/user/list', '/li']
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


export default router