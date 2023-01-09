let four = require('../src/four.js')
let {axiosReq} = four
const clog = console.log
axiosReq().then(res => {
    clog(res)
})

