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
                <template #default>
                    <el-button link type="primary" size="small" @click="handleClick">
                        查看
                    </el-button>
                    <el-button link type="primary" size="small">编辑</el-button>
                </template>
            </el-table-column>
        </el-table>



    </el-container>
</template>
<script setup>
import {ref} from 'vue'

const tableData = ref([
    {
        'title': "作品1",
        'author': '鲁迅',
        'area': "中国",

    }
])

const handleClick = function (row) {
    console.log(row);
}

</script>