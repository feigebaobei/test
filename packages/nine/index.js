"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.a = exports.hello = void 0;
const world = 'world';
function hello(who = world) {
    return `Hello ${who}! `;
}
exports.hello = hello;
exports.a = 's';
