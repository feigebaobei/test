const _Vue = Vue

return function render(_ctx, _cache) {
  with (_ctx) { // 设置this
    const { 
        openBlock: _openBlock,                      // 构造Block Tree
        createElementBlock: _createElementBlock,    // 构造Block VNode
        createCommentVNode: _createCommentVNode     // 构造vnode
    } = _Vue

    return true
      ? (_openBlock(), _createElementBlock("div", { key: 0 }, "str"))
      : _createCommentVNode("v-if", true)
  }
}