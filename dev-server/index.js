const express = require('express')
const proxyMiddleWare = require('http-proxy-middleware')

const targetIp = 'xxxxxx'

let app = express()

// 这里是配置localhost:3000/ 指向根目录
app.use('/', express.static('./'))
// 这里是匹配接口 localhost:3000/QuerySug 开头的转向 http://www.xueersi.com/QuerySug
app.use('/QuerySug', proxyMiddleWare({ target: targetIp, changeOrigin: true }))


var server = app.listen(3000, function () {
  console.log('app 运行 http://localhost:3000')
})