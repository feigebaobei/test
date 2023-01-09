// 'use strict';

// module.exports = seven;

// function seven() {
//     return "Hello from seven";
// }

const {
    SyncWaterfallHook
  } = require("tapable");
  //所有的钩子构造函数, 都接受一个可选的参数, (这个参数最好是数组, 不是tapable内部也把他变成数组), 这是一个参数的字符串名字列表
  //const hook = new SyncHook(["arg1", "arg2", "arg3"]);
  class lession {
    constructor() {
      //最好的实践就是把所有的钩子暴露在一个类的hooks属性里面:
      this.hooks = {
        arch: new SyncWaterfallHook(["name", 'h']),
      }
    }
    // 注册监听函数
    tap() {
      this.hooks.arch.tap('node', function (name,a ) {
        console.log('node', name, a)
        // return 'node学习的还可以'
        return
      })
      this.hooks.arch.tap('vue', function (name, a, b) {
        console.log('vue', name, a, b)
      })
    }
    start() {
      this.hooks.arch.call('jw', 'h');
    }
  }
  let ls = new lession();
  //注册
  ls.tap()
  //启动
  ls.start()