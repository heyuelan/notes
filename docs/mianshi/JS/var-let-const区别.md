# var、let 及 const 区别


- `var` 存在变量提升，我们在声明之前可以使用。`let`、`const` 因为存在暂时性死区的原因，不能在声明前使用

- `var` 在全局作用域下声明变量，会导致变量挂载在 `window` 上，其他两者不会

- `let` 和 `const` 作用基本一致，但是后者声明的变量不能再次赋值
