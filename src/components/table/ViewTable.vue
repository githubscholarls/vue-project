<template>
    <div>
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
                    <el-button @click="VTCloseClick(true)">Cancel</el-button>
                    <el-button type="primary" @click="HandleConfirm()">
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
//使用了setup，这里便可以直接使用
const props = defineProps({
    obj: {},
    title: '',
    author: '',
    dialogFormVisible:false
})

const emit = defineEmits(["VTClose"]);

onMounted(()=>{
    console.log('dialogFormVisible',props.dialogFormVisible)
})

const VTCloseClick = function(val){
    console.log('子组件准备触发父组件监听事件',val)
    emit('VTClose',!val)
}

const HandleConfirm = function(){
    console.log('子组件要提交数据了',props.title,props.author)
}


</script>