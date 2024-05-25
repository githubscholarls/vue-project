<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'

import {useRouter } from 'vue-router'


const props = defineProps(['id'])

const router = useRouter()



function toAboutView(){
  router.push({ name: 'adName', params: { comp: 'erina',id:'333' } })
}





</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header>
  
  <h4>这是app中的内容模板</h4>

  <!-- <main>
    下面是TheWelcome模板
    <TheWelcome/>
    上面是TheWelcome模板
  </main> -->

<main>
  <ul>
    <li>
      <router-link to="/users/eduardo/posts/1"
        >/users/eduardo/posts/1</router-link
      >
    </li>
    <li>
      <router-link to="/users/eduardo/posts/20"
        >/users/eduardo/posts/20</router-link
      >
    </li>
    <li>
      <router-link to="/about/aaa/20"
        >/about/aaa/20</router-link
      >
    </li>
    <li>
      <router-link to="/about/bbb/30"
        >/about/bbb/30</router-link
      >
    </li>
    <li>
      <router-link to="/users/gggg/posts/profile"
        >嵌套路由 /users/gggg/posts/profile</router-link
      >
    </li>
    <li>
      <router-link to="/users/gggg/posts/profile2"
        >嵌套路由  /users/gggg/posts/profile2</router-link
      >
    </li>
    <li>
      <router-link :to="{name:'adName',params:{comp:'wuliu',id:'333'}}"
        >命名路由  /about/:comp/:id</router-link
      >
    </li>
    <li>
      <button @click="toAboutView">点击跳转  /about/:comp/:id    /about/erina/333 </button
      >
    </li>
    <li>
      <a href="/re/redirect1-about">重定向路由 /re/redirect1-about</a>
    </li>
    <li>
      <a href="/re/redirect2-about">重定向路由 /re/redirect2-about</a>
    </li>
    <li>
      <a href="/re/redirect3-about">重定向路由 /re/redirect3-about</a>
    </li>
    <li>
      <router-link to="/re/redirect3-about"
        >router-link 重定向路由 /re/redirect3-about</router-link
      >
    </li>
  </ul>
<p>头部内容结束</p>

  <router-view></router-view>

  <!-- 同时渲染多个嵌套路由组件 -->
  <router-view name="UserPostProfile3"></router-view>
  <router-view name="UserPostProfile4"></router-view>
</main>
  
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
