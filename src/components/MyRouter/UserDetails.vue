<script setup>

import {useRoute} from 'vue-router'

var route = useRoute()

</script>
<template>
    <h2>UserDetails  id:{{ route.params.id }} </h2>
</template>