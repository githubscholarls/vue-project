<template>
    <el-container>
        
        <el-aside>
            <el-menu default-active="1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">

                <el-submenu index="1">
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span slot="title">导航一</span>
                    </template>
                
                </el-submenu>
                <el-menu-item index="2">
                    <i class="el-icon-menu"></i>
                    <span slot="title">导航二</span>
                </el-menu-item>
                <el-menu-item index="3" disabled>
                    <i class="el-icon-document"></i>
                    <span slot="title">导航三</span>
                </el-menu-item>
                <el-menu-item index="4">
                    <i class="el-icon-setting"></i>
                    <span slot="title">导航四</span>
                </el-menu-item>
            </el-menu>
        </el-aside>
        <el-container>
            <el-header>
                "header"
            </el-header>
            <el-main>
                "main"
            </el-main>
        </el-container>
    </el-container>


</template>


<script setup>

const handleOpen = function (key, keyPath) {
    console.log(key, keyPath);
};
const handleClose = function (key, keyPath) {
    console.log(key, keyPath);
}

</script>