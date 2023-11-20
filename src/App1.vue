<script setup>


</script>
<template>
      <h4>这是app1中的内容模板</h4>
      <button @click="count++">{{ count }}</button>
      <button @click="increment()">{{count}}</button>
      <span>{{msg}}</span>
      <div v-html="vhtml"></div>
      <div :id="dynamicid">这个div id 为 {{dynamicid}}</div>
      <button :disabled="isButtonDisabled">Button</button>
      <div v-bind="objectOfAttrs">自定义绑定标签属性</div>
      <div>这是全局属性 {{App1msg}}</div>
      <!-- 频繁切换建议vshow -->
      <p v-if="seen">Now you see me</p>
      <a :href="url">url链接</a>
      <!-- 动态参数 -->
      <a :[attributeName]="aVal"> ... </a>
      <!-- 测试失败   dom内嵌模板eventName 会被浏览器强制转eventname   单文件组件内模板不受影响 -->
      <a @[eventName]="alert1">这是自定义事件</a>

      <!-- 测试饿了么确认框 -->
      <el-button type="text" @click="open">点击打开 Message Box</el-button>

</template>

<script>

export default {
  // data() 返回的属性将会成为响应式的状态
  // 并且暴露在 `this` 上
  data() {
    return {
      count: 0,
      msg:'我是msg',
      vhtml:'<span style="color:red">我是vhtml内容</span>',
      dynamicid:500,
      isButtonDisabled:true,   //'asa' 等同于 true  将禁用
      objectOfAttrs:{
        id: 'container',
        class: 'wrapper',
        name:'custName'
      },
      url:"http://www.baidu.com",
      attributeName:"aHasVal",
      aVal:"我是自定义属性值",
      eventName:'focus',//focus   click
      eventVal:'alert1'
    }
  },

  // methods 是一些用来更改状态与触发更新的函数
  // 它们可以在模板中作为事件处理器绑定
  methods: {
    increment() {
      this.count++
    },
    alert1(){
      console.log('alert1');
      window.alert('11111');
    },
    alert2(){
      alert('2222')
    },
    open() {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
      }
  },

  // 生命周期钩子会在组件生命周期的各个不同阶段被调用
  // 例如这个函数就会在组件挂载完成后被调用
  mounted() {
    console.log(`The initial count is ${this.count}.`)
  }
}
</script>