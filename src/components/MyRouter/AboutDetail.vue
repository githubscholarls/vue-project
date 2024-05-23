<script setup>
import { watch } from 'vue';

import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()

watch(()=>route.params,
      (toParams, previousParams) => {
        console.log('previousParams:::'+previousParams);
        console.log('toParams:::'+toParams);
      })


</script>
<template>
    <h3>AboutDetail  {{ this.$route.params }} </h3>
</template>


<!-- <h2>优化响应路由的样例  {{this.$route.params}}</h2> -->