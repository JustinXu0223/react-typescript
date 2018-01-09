###版本环境
```html
node 6.0+(v6.11.2)
npm 3.0+(v3.10.10)
```

###配置
```html
$ npm install -g create-react-app yarn
```

### 项目结构
```html
|--public  此文件下打包盒测试会copy
  |--lib         类库
  |--images      (放页面img类似引入的图片, 页面引入就是images/**)
  |--index.html  全局入口
  
|--src     源文件
  |--actions        动作
  |--assets         静态资源(放css中使用的图片,直接相对路径引入)
  |--components     组件
  |--config         配置
  |--constants      常量
  |--entity         数据模型
  |--reducers       所有store函数
  |--routes         路由配置
  |--stores         store配置
  |--utils          工具
  |--views          容器视图
    |--app.less     程序入口
    |--app.test.tsx 程序测试入口
    |--app.tsx      程序入口
  
  |--index.tsx      全局入口js
  |--router.tsx     全局入口路由
  
|--config-overrides.js 覆盖create-react-app配置
|--package.json
|--README.md
|--tsconfig.json
|--tsconfig.test.json
|--tslint.json
```

### 安装依赖
* Run 'npm install'

### 开发环境
* Run 'npm run start'

### 注意安装依赖
```html
需要安装typeScript的版本
$ npm install -S redux react-redux @types/react-redux(类似)
```

### 参照引用
```html
https://zhuanlan.zhihu.com/p/27656067
https://www.cnblogs.com/zhuzhenwei918/p/7249357.html
https://www.cnblogs.com/baqiphp/p/7647912.html
```