let cd = require('@vue/compiler-dom')
let clog = console.log

let template = '<div v-if="true">str</div>'
let res = cd.compile(template)

clog(res.code)