let clog = console.log
self.addEventListener('install', (event) => {
    clog('install', event)    
    event.waitUntil(
        caches.open('v1').then(cache => {
            cache.addAll([
                '/',
                // 'index.html'
            ])
        })
    )
})
self.addEventListener('activate', (event) => {
    clog('activate', event)    
})
self.addEventListener('fetch', (event) => {
    clog('fetch', event)    
})



// self.addEventListener('install', (event) => {
//     event.waitUntil(
//         // 使用新版本号，不会与别的版本有冲突
//         caches.open('v2').then(cache => {
//             return cache.addAll([
//                 '/sw-test/',
//                 '/sw-test/index.html'
//             ])
//         })
//     )
// })

// demo3
// 删除旧缓存
// activate事件可用于删除旧缓存。  
// 每个浏览器对service worker可用缓存空间不同。
// 若不控制，则有可能浏览器会全部清空缓存的数据。  
// self.addEventListener('activate', event => {
//     let cacheWhiteList = ['v2']
//     event.waitUntil(
//         caches.keys().then(keyList => {
//             return Promise.all(keyList.map(key => {
//                 if (cacheWhiteList.
//                 includes(key)) {
//                     return caches.delete(key)
//                 }
//             }))
//         })
//     )
// })
