<template>
  <main>
    <h1>v-if</h1>
    <button @click="switchHandler1">切换</button>
    <p v-if="show1">string</p>

    <h1>v-if & v-else</h1>
    <button @click="switchHandler2">切换</button>
    <p v-if="show2">one</p>
    <p v-else>two</p>

    <h1>v-if & v-for</h1>
    <button @click="switchHandler3">切换</button>
    <div v-if="show3">
      <p v-for="(item, index) in list1" :key="index">{{item}}</p>
    </div>

    <h1>v-show</h1>
    <button @click="switchHandler4">切换</button>
    <p v-show="show4">string</p>

    <h1>自定义指令</h1>
    <p>不显示</p>
    <p v-mock-if="show5">custom</p>
    <p>自动聚焦</p>
    <input v-fouce type="text" />
  </main>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
let clog = console.log

let show1 = ref(true)
let show2 = ref(true)
let show3 = ref(true)
let show4 = ref(true)
let show5 = ref(false)
let list1 = reactive(['one', 'two', 'three'])

let switchHandler1 = () => {
  show1.value = !show1.value
}
let switchHandler2 = () => {
  show2.value = !show2.value
}
let switchHandler3 = () => {
  show3.value = !show3.value
}
let switchHandler4 = () => {
  show4.value = !show4.value
}
const vMockIf = {
  mounted: (el, binding) => {
    if (!binding.value) {
      el.parentNode.removeChild(el);
    }
  },
}
const vFouce = {
  mounted: (el) => el.focus()
}
</script>

<style>
</style>
