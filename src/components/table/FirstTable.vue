<template>
    <el-container>
        <el-table :data="tableData">
            <el-table-column prop="title" label="作品名称" width="150">
            </el-table-column>
            <el-table-column prop="author" label="作者" width="150">
            </el-table-column>
            <el-table-column prop="area" label="所在区" width="150">
            </el-table-column>
            <el-table-column label="评审结果分布(人)" align="center">
                <el-table-column prop="prize1" label="一等奖">
                </el-table-column>
                <el-table-column prop="prize2" label="二等奖">
                </el-table-column>
                <el-table-column prop="prize3" label="二等奖">
                </el-table-column>
            </el-table-column>
            <el-table-column fixed="right" label="操作" min-width="120">
                <template #default="scope">
                    <el-button link type="primary" size="small" @click="handleClick(scope.row)">
                        查看
                    </el-button>
                    <el-button link type="primary" size="small">编辑</el-button>
                </template>
            </el-table-column>
        </el-table>

        <ViewTable :obj="curRow" :title="curRow.title" :author="curRow.author" :dialogFormVisible="showViewTable" @VTClose="tableCloseChildDialog"/>

    </el-container>
</template>
<script setup>
import {onMounted, ref} from 'vue'
import ViewTable from './ViewTable.vue'
import { getList } from '../../api/table'

const tableData = ref([
    {
        'title': "接口请求前数据",
        'author': '鲁迅',
        'area': "中国",

    }
])

//
const curRow = ref({})
const showViewTable = ref(false)


onMounted(async ()=>{
    var res = await getList();
    // debugger
    console.log('请求getList接口返回',res);
    if(res && res.code === 20000){
        console.log('data',res.data)
        tableData.value = res.data.items
    }
})


const handleClick = function (row) {
    console.log('查看之前row值',curRow.value)
    curRow.value = row;
    console.log('查看之后row值',curRow.value)
    console.log('查看之前弹框变量',showViewTable.value)
    showViewTable.value = true;
    console.log('查看之后弹框变量',showViewTable.value)
    //debugger
}

const tableCloseChildDialog = function(val){
    console.log('父组件接受到子组件事件了',val)
    curRow.value = {};
    showViewTable.value=val;
}

</script>