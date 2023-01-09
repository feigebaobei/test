let cd = require('@vue/compiler-dom')
let clog = console.log

// let template = '<div v-if="a">str</div>'
{/* <script setup>
</script> */}
let template = `
<template><div v-if="a">str</div></template>
<style>
</style>
`
let res = cd.compile(template)

clog(res.code)