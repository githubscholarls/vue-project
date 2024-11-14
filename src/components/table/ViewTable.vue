<template>
    <div>
        biaoti: {{ title }} {{ author }}
        <el-dialog v-model="dialogFormVisible" title="Shipping address" width="500">
            <el-form :model="obj">
                <el-form-item label="Promotion name" :label-width="formLabelWidth">
                    <el-input v-model="obj.title" autocomplete="off" />
                </el-form-item>
                <el-form-item label="Zones" :label-width="formLabelWidth">
                    <el-input v-model="obj.author" autocomplete="off" />
                </el-form-item>
            </el-form>
            <template #footer>
                <div class="dialog-footer">
                    <el-button @click="dialogFormVisible = false">Cancel</el-button>
                    <el-button type="primary" @click="dialogFormVisible = false">
                        Confirm
                    </el-button>
                </div>
            </template>
        </el-dialog>
    </div>
</template>

<script setup>

import { onMounted, ref } from 'vue'

const formLabelWidth = '140px'
const props = defineProps({
    obj: {},
    title: '',
    author: '',
    dialogFormVisible:false
})

onMounted(()=>{
    console.log('dialogFormVisible',props.dialogFormVisible)
})


</script>