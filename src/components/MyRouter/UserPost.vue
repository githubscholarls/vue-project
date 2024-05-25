<script setup >

</script>
<template>
    <div>
      User {{ $route.params.username }} with post {{ $route.params.postId }}
    </div>

    
    <router-link to="/users/eduardo/posts/20"
        >/users/eduardo/posts/20</router-link
      >
    <!-- 渲染子组件 -->
    <router-view></router-view>
    
    <!-- 添加链接 -->
    <!-- <router-link :to="{ name: 'UserPostProfile' }">Profile</router-link>
    <router-link :to="{ name: 'UserPostProfile2' }">Profile2</router-link>
    <router-view></router-view> -->

  </template>