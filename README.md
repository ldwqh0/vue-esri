# Vue-esri

arcgis Vue 插件

## 使用方法
组件仅支持Vue单文件模式的引用。  
请使用vue-cli搭建项目
通过如下命令安装依赖
``` bash
npm -S install vue-esri
```

```javascript
import VMapPlugin from './lib'

Vue.use(VMapPlugin, {
  url: '/arcgisAPI/3.22/init.js',
  dojoConfig: {
  }
})
```

```html

```

## 版本说明
* 0.0.4  
  去掉load-css属性，改用config属性加载css
* 0.0.3
  手抖了一下，发错了一个版本
* 0.0.2  
  增加ts定义