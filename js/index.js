let clog = console.log
let tryRegistry = () => {
    if ('serviceWorker' in navigator) {
        let t = navigator.serviceWorker.register('/js/sw.js', {
            // scope: './'
        })
        .then(res => {
            clog('then', res)
        })
        .catch(err => {
            clog('catch', err)
        })
    } else {
        alert('当前浏览器不支持service worker')
    }
}
// tryRegistry()