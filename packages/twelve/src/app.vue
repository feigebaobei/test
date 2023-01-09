<template>
  <main>
    <h1>v-if</h1>
    <button @click="switchHandler1">切换</button>
    <p v-if="show1">string</p>
  </main>
</template>

<script setup lang="ts">
import {ref, reactive} from 'vue'
let clog = console.log

let show1 = ref(true)
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
let switchHandler5 = () => {
  show5.value = !show5.value
}

</script>

<style>
</style>
