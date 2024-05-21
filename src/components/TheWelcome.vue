<script setup>
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
import { ref } from 'vue'

const tochildValueObj = ref({
  name:'lishuai',
  age:18
})
const tochildValueObj2 = {
  name:'lishuaiasdf',
  age:188
}
const parentTitle = ref('这是父传子defineprop 属性值')
const posts = ref([
  { id: 1, title: 'My journey with Vue' ,tags:[{'name':'高能'},{'name':'节能'},{'name':'华美'}]},
  { id: 2, title: 'Blogging with Vue' ,tags:[{'name':'高能1'},{'name':'节能1'},{'name':'华美1'}]},
  { id: 3, title: 'Why Vue is so fun' ,tags:[{'name':'高能2'},{'name':'节能2'},{'name':'华美2'}]}
])

const toTheWelcomeData = (childData)=>{
  console.log('子触发到父级事件了');
  console.log('子数据为：',childData);
}

</script>

<template>
  <WelcomeItem :title="parentTitle" :tochildObj="tochildValueObj" v-bind="tochildValueObj2" :posts="posts" @child-click="toTheWelcomeData">
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Documentation</template>

  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>Tooling</template>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>Ecosystem</template>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>Community</template>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>Support Vue</template>
  </WelcomeItem>
</template>
