// const Dogleg = require('../dist_cjs/index.cjs')

import Dogleg from './dogleg.js'

const clog = console.log
const j = (obj) => {
    return JSON.parse(JSON.stringify(obj))
}

let f = (stack) => {
    let r = fib(stack.value)
    clog(`第${stack.value}个的值：${r}`)
    return r
  }
// let f1 = async (stack) => {
//     clog('start')
//     clog(j(dogleg.stackList._box))
//     let r = await new Promise((s, j) => {
    // 这里使用异步任务会引起多输出。不是多运行。是event loop机制引起的。
//         setTimeout(() => {
//             s(stack.value)
//         }, 1000)
//     })
//     clog('end', r)
//     clog(`第${stack.value}个的值：${r}`)
//     return r
//   }
let fib = (n) => {
  if (n < 2) {
    // 0, 1
    return 1
  } else {
    return fib(n - 1) + fib(n - 2)
  }
}
let createStack = (value, priority) => {
  return {
    value,
    priority,
  }
}

let dogleg = new Dogleg(f)
// let dogleg = new Dogleg(f1)
dogleg.stackList.entryQueue(createStack(3, 2))
dogleg.stackList.entryQueue(createStack(4, 2))
dogleg.stackList.entryQueue(createStack(6, 1))
dogleg.stackList.entryQueue(createStack(7, 3))
dogleg.stackList.entryQueue(createStack(5, 2))
dogleg.runQueue()
setTimeout(() => {
  clog('取消')
  dogleg.interrupt()
  // isRunning = false
  dogleg.stackList.entryQueue(createStack(8, 3))
  dogleg.stackList.entryQueue(createStack(9, 1))
  dogleg.runQueue()
  // clog(j(stackList))
}, 2500)
