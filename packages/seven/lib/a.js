let {SyncLoopHook} = require('tapable');//SyncLoopHook,同步遇到某个不返回undefined的监听函数，就重复执行

class Lesson{
	constructor(){
		this.index = 0;
		this.hooks = {
			arch: new SyncLoopHook(['name'])
		}
	}
	tap(){
		this.hooks.arch.tap('node',(name) => {
			console.log('node',name)
			return ++this.index === 3? undefined : '继续学';
		})
		this.hooks.arch.tap('react',(data) => {
			console.log('react',data)
		})
	}
	start(){
		this.hooks.arch.call('yuhua');
	}
}

let l = new Lesson();
l.tap();
l.start();
