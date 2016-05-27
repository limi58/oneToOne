# select-to-select
a component make two select linked  
将2个 `select` 组件联动的 js 组件

# Usage
1.将2个 `select` 组件放在一个 `id` 为 `oneToOneWrap` 的 `div` 里。第一个 `select` 加上属性 `data-primary='true'` ，2个 `select` 都要加上 `data-name` 属性，值自己定义。如下：
```html
<div id="oneToOneWrap">
    <select data-primary='true' data-name='name'></select>
    <select data-name='cities'></select>
</div>
````

2.引入 oneToOne.js，如下：
```html
<script type="text/javascript" src='../dist/select-to-select.js'></script>
````

3.启动，如下：
```js
oneToOne({
    data: [
        {name: 'beijign', cities: ['bj1', 'bj2']}, 
        {name: 'shanghai', cities: ['sh1', 'sh2']}
    ]
})
````
`oneToOne` 参数为对象，data 键的值为一串对象数组，对象的键要对应第一步设置的 `data-name`  

# Browser support
exclude IE 9-
