import { renderToString } from 'react-dom/server';
import myRoutes from '../Route/index.jsx'
import React from 'react'
import {StaticRouter} from 'react-router-dom'
export const render = (req) => {
  //构建服务端的路由
  const content = renderToString(
    <StaticRouter location={req.path} >
      {myRoutes}
    </StaticRouter>
  );
  const isDev = true
  // 使用client中的代码
  const url = isDev ? 'http://localhost:3000/index.js':'/index.js'
  return `
    <html>
      <head>
        <title>ssr</title>
      </head>
      <body>
        <div id="root">${content}</div>
        <script src="${url}"></script>
      </body>
    </html>
  `
}