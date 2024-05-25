<script setup>

import {ref} from 'vue'

const list = ref([{userName:'cust1',age:14},{userName:'cuset2',age:25}])

</script>
<template>
    <ul v-if="list">
        <li v-for="item in list ">
        name:{{ item.userName }}
        age:{{ item.age }}
        </li>
    </ul>
</template>