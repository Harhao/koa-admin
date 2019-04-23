# koa-admin
基于Koa2开发的电商平台管理系统
> 开发环境： window 10(VSCode)<br/>
  技术栈：koa2 Vue2 <br/>
  数据库：MongoDB

### 项目目录结构

```bash
  │  .gitignore(git忽略提交定义文件)
  │  app.js(项目入口文件)
  │  package-lock.json
  │  package.json(项目依赖定义文件)
  │
  ├─bin
  │      www(定义服务器启用的端口)
  │
  ├─config
  │      filterApi.js(koa-jwt需要过滤的接口文件)
  │      index.js(项目配置文件)
  │
  ├─controller
  │      user.js(用户控制)
  │
  ├─fruit-admin(前端Vue开发文件)
  │  │  .gitignore
  │  │  babel.config.js
  │  │  package-lock.json
  │  │  package.json
  │  │  README.md
  │  │
  │  ├─public
  │  │      favicon.ico
  │  │      index.html
  │  │
  │  └─src
  │      │  App.vue
  │      │  main.js
  │      │
  │      ├─assets
  │      │      logo.png
  │      │
  │      └─components
  │              HelloWorld.vue
  │
  ├─model
  │      goodsModel.js(商品model定义)
  │      init.js (连接数据库)
  │      userModel.js (用户model定义)
  │
  ├─routes
  │      index.js (路由文件)
  │
  └─util
          error.js (koa-jwt提供权限访问文件)
          index.js (工具类函数，jwt分发token和verify)
```
### 使用方法

- 下载项目文件并进入项目文件根目录，在命令终端输入:

```bash
  npm install
```
- 运行本地的mongodb数据库之后，启动项目文件:

```bash
  npm start
```
