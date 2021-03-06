# computed VS methods VS watch

- **watch 和 computed 都是观察页面数据变化的。computed 只有当依赖的数据变化时才会计算, 当数据没有变化时, 它会读取缓存数据。watch 每次都需要执行函数。watch 更适用于数据变化时的异步操作。**
- computed 是计算属性的; 它会根据所依赖的数据动态显示新的计算结果, 该计算结果会被缓存起来。computed 的值在 getter 执行后是会被缓存的。如果所依赖的数据发生改变时候, 就会重新调用 getter 来计算最新的结果。
- computed 是基于响应性依赖来进行缓存的。只有在响应式依赖发生改变时它们才会重新求值, 也就是说, 当 msg 属性值没有发生改变时, 多次访问 reversedMsg 计算属性会立即返回之前缓存的计算结果, 而不会再次执行 computed 中的函数。但是 methods 方法中是每次调用, 都会执行函数的, methods 它不是响应式的。
- computed 中的成员可以只定义一个函数作为只读属性, 也可以定义成 get/set 变成可读写属性, 但是 methods 中的成员没有这样的。
- watch 它是一个对 data 的数据监听回调, 当依赖的 data 的数据变化时, 会执行回调。

## computed

- 计算属性有 lazy 和 active 两种模式，

active 模式：依赖更新立即计算，
lazy 模式：依赖变化仅设置 this.dirty = true，等访问计算属性时再重新计算，并加入缓存。

- 2.5.17 版本的计算属性实现思想是——多计算，少更新，也就是每次都去计算，只有计算结果变了，才会去触发更新，比如一个计算属性有多个依赖发生变化，但是它们最终计算的结果没变，是不会触发更新的。

- 2.6.11 版本的计算属性实现思想是——少计算，多更新，一旦计算属性的依赖发生变化，不管最终计算的结果有没有变化，都会触发更新。

## watch

- deep 设置为 true 用于监听对象内部值的变化，会递归访问对象的每个属性从而做到依赖收集
- immediate 设置为 true 将立即以表达式的当前值触发回调

## 应用场景

- computed 适合用在模板渲染中，某个值是依赖了其它的响应式对象甚至是计算属性计算而来；
- watch 适用于观测某个值的变化去完成一段复杂的业务逻辑（例如执行异步或开销较大的操作）
