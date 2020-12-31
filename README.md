## 二次开发 Koa 的项目模板
### 路由处理
- 使用 ```koa-router``` 处理路由
- 使用 ```require-directory``` 对路由进行导入
- 将初始化路由代码抽离到 ```/core/init.js``` 中

### 异常处理
- 使用中间件进行全局异常捕获处理