'use strict';
// let ai = require('./ai.js')
let axios = require('axios')
// let axiosInstance = ai.instance

module.exports = {
    four,
    forEach,
    axiosReq,
    req
};
function forEach(items, callback) {
    for (let index = 0; index < items.length; index++) {
      callback(items[index]);
    }
}
function four() {
    return "Hello from four";
}
function axiosReq () {
    // return axiosInstance({
    //     url: 'http://wushusandavercel.com:5000/forField',
    //     method: 'get',
    // })
}

function req () {
    return axios.get('sdfas')
}