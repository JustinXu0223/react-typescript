###版本环境
```html
node 6.0+(v6.11.2)
npm 3.0+(v3.10.10)
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
    |--Error        错误页面
    |--Hello        demo
    |--app.less     Layout入口less
    |--app.tsx      Layout入口
  
  |--index.tsx      全局入口js
  |--index.less     全局入口css
  
|--config-overrides.js 覆盖create-react-app配置
|--package.json
|--README.md
|--tsconfig.json
|--tsconfig.test.json
|--tslint.json
```

###配置
```html
$ npm install -g  yarn
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
