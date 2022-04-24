# 一个简单的react服务端渲染应用

### 启动
1. npm i
2. npm run start-client
3. npm start
4. http://localhost:3001/

## 说明
1. 使用了webpack打包react代码生成index.js文件，随后放入到public文件夹。
2. express开启了public作为静态文件夹，将上面的打包文件给到返回客户端的html中，让其在请求返回后加载

## 报错
1. createRoot这里一定要引入react
2. 路径要写完整，'../container/home/index.jsx' 不要写成'../container/home'
3. react-router-dom版本问题，先不要用6，语法变了很多