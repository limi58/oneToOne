# select-to-select
将2个 `select` 组件联动的 js 库

# Usage
1.将2个 `select` 组件放在一个 `id` 为 `sts_wrap` 的 `div` 里。第一个 `select` 加上属性 `data-primary='true'` ，2个 `select` 都要加上 `data-key` 属性，作为接下来的 json 的键名，键名自己定义。如下：
```html
<div id="sts_wrap">
    <select data-primary='true' data-key='name'></select>
    <select data-key='cities'></select>
</div>
````

2.引入 dist 文件夹的 sts.js：
```html
<script type="text/javascript" src='../dist/sts.js'></script>
````

3.调用 `STS()` 方法启动，如下：
```js
STS(
    [
        {name: '北京', cities: ['东城区', '西城区']}, 
        {name: '天津', cities: ['和平区', '河西区']}
    ]
)
````
`STS()` 函数的参数为 `Array`，为一串对象数组，对象的键要对应第一步设置的 `data-key`

demo 在demo文件夹里

# Browser support
exclude IE 9-
