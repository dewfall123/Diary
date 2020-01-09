# Serverless
[PPT1](http://ppt.geekbang.org/slide/download?cid=55&pid=2793)
<br>
[PPT2](http://ppt.geekbang.org/slide/download?cid=55&pid=2778)
<br>
[PPT3](http://ppt.geekbang.org/slide/download?cid=55&pid=2770)
<br>
`serverless`是这次大会最火的关键词，没有之一。

### 1. Serverless是什么?
Serverless = 广义Fass + Bass
> 无服务器云计算（ServerlessComputing）几乎封装了所有的底层资源管理和系统运维工作，使开发人员更容易使用云基础设施。它提供了一个方式，极大地简化了基于云服务的编程，犹如**汇编语言到高级编程语言般的转换**。



### 2. 直观感受
试下部署(有腾讯云账号的话，3分钟搞定):
1. 安装cli
`$ npm install -g serverless`

2. 在某个的目录下新建下面两个文件
`app.js`
```js
const express = require('express')
const app = express()

app.get('/', function(req, res) {
  res.send('Hello Express! this is serverless!')
})

// don't forget to export!
module.exports = app
```

serverless配置文件: serverless.yml
```yml
# serverless.yml

express:
  component: '@serverless/tencent-express'
  inputs:
    region: ap-shanghai
```

1. 部署

`yarn init`

`yarn add express`

`serverless` (需要扫码登录)

部署成功! 这是我测试部署可访问链接。
<br>
[http://service-hs8i20en-1258873517.sh.apigw.tencentcs.com/release/](http://service-hs8i20en-1258873517.sh.apigw.tencentcs.com/release/)


### 3. 缺点
1. 依赖云服务商，自己部署一套完整的serverless基础设施目前基本不太可能。
2. 冷启动时间，第一次加载的时候执行容器和环境需要较长时间。（这个其实问题不大）。
3. 目前生态还处于成长阶段，可能遇到各种bug，组件缺少等。
4. 无法保持状态，Serverless架构更适合无状态的应用。