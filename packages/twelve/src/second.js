let cd = require('@vue/compiler-dom')
// let app = require('./app.vue')
let clog = console.log

// let template = '<div v-if="true">str</div>'
let template = '<div v-if="visible">str</div><script setup>let visible = false</script>'
let res = cd.compile(template)

clog(res.code)