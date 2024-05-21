<script setup>

import { ref } from 'vue';

// 定义一个初始值为0的数字变量
const curIndex = ref(0);

const curName ='当前Welcomeitem组件数据'

defineProps(['title','tochildObj','name','age','posts','tochildValueObj2']);

const emit =defineEmits(['toTheWelcomeData'])
const toParentData =(childData)=>{
  console.log('子触发了');
  emit('child-click',childData);
};
</script>

<template >
  <div class="item">
    <h1>父传子数据：{{ title }} {{ tochildObj }} {{ name }} {{ age }}</h1>
    <i>
      <slot name="icon"></slot>
    </i>
    <div class="details">
      <h3>{{ curName }}</h3>
      <span>这是父传子 列表展示</span>

      <!-- <h2>
        posts : {{posts}}
      </h2> -->

      <!-- 可以用哦 -->      
      <!-- <h2 :curI="curIndex" @click="this.curIndex++">当前点击索引 {{curIndex  }}</h2> -->
      <ul>
        <!-- 这是双层循环 -->
        <li v-for="(item,index) of posts" :key="index"> {{ index }} {{ item.title  }} {{ item.tags }}
          <ul>
            <li v-for="(item,index) of item.tags">内层索引：{{ index }} 内层数据： {{ item }}</li>
          </ul>
        </li>
      </ul>
      
       <ul>
        <!-- 必须添加posts 检查  不然无法对posts任何操作都报错 -->
        <li v-if="posts" v-for="(item,index) in posts[2].tags" >
          ok la {{ index }} {{ item }}
        </li>
      </ul>
      <h3>
        <slot name="heading"></slot>
      </h3>
      <slot></slot>
    </div>

    <h1>子传父数据</h1>
    <button @click="toParentData(3)">传递</button>
  </div>
</template>

<style scoped>
.item {
  margin-top: 2rem;
  display: flex;
  position: relative;
}

.details {
  flex: 1;
  margin-left: 1rem;
}

i {
  display: flex;
  place-items: center;
  place-content: center;
  width: 32px;
  height: 32px;

  color: var(--color-text);
}

h3 {
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
  color: var(--color-heading);
}

@media (min-width: 1024px) {
  .item {
    margin-top: 0;
    padding: 0.4rem 0 1rem calc(var(--section-gap) / 2);
  }

  i {
    top: calc(50% - 25px);
    left: -26px;
    position: absolute;
    border: 1px solid var(--color-border);
    background: var(--color-background);
    border-radius: 8px;
    width: 50px;
    height: 50px;
  }

  .item:before {
    content: ' ';
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: 0;
    bottom: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .item:after {
    content: ' ';
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: 0;
    top: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .item:first-of-type:before {
    display: none;
  }

  .item:last-of-type:after {
    display: none;
  }
}
</style>
