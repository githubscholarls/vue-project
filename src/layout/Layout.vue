<template>
    <el-container>

        <el-aside>
            <el-menu default-active="1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">

                <sidebar-item v-for="route in routes" :key="route.path" :item="route" :base-path="route.path">
                    <el-row>
                        <RouterLink :to=route.path>
                            {{ route.name }}
                        </RouterLink>
                    </el-row>

                </sidebar-item>
            </el-menu>
        </el-aside>
        <el-container>
            <el-header>
                "header"
            </el-header>
            <el-main>
                
        <router-view /> 
            </el-main>
        </el-container>
    </el-container>


</template>


<script setup>
import { computed } from 'vue'
import { RouterView, useRoute, useRouter } from 'vue-router'

const router = useRouter();

const routes = computed(() => router.getRoutes());

const handleOpen = function (key, keyPath) {
    console.log(key, keyPath);
};
const handleClose = function (key, keyPath) {
    console.log(key, keyPath);
}

</script>