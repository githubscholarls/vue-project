<script setup>

const props = defineProps(['id'])

</script>

<template>

    上面命名视图
<router-view class="top" name="topview"></router-view>
    中间默认视图
 <router-view />
    下面命名视图
    <router-view class="bottom" name="bottomview"></router-view>
</template>