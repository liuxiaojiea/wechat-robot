# nodejs版微信机器人

**注：** 从2017年6月下旬开始，使用基于web版微信接入方案存在大概率的被限制登陆的可能性。 主要表现为：无法登陆Web 微信，但不影响手机等其他平台。 验证是否被限制登陆： [https://wx.qq.com](https://wx.qq.com) 上扫码查看是否能登陆。 更多内容详见：

[Can not login with error message: 当前登录环境异常。为了你的帐号安全，暂时不能登录web微信。](https://github.com/Chatie/wechaty/issues/603)  
**网页版不能登录就不用往下看啦，此库用的是网页版的协议。**

### 克隆代码
```bash
git clone git@github.com:isnl/wechat-robot.git
```

### 安装依赖
```bash
npm install
```
依赖安装失败，可换淘宝源 
```bash
npm install --registry=https://registry.npm.taobao.org/
```
或者使用`cnpm`
```bash
cnpm install
```
### 修改`config`配置
打开`/config/index.js` 文件，将里面的配置改为自己的。

### 修改天行接口配置
天行api官网 ：[https://tianapi.com/](https://tianapi.com/)  
注册成功后，申请以下接口：  
- [每日英语一句话](https://www.tianapi.com/apiview/62)
- [神回复](https://www.tianapi.com/apiview/39)  

申请成功后打开`/superagent/index.js`，将顶部`APIKEY`改为自己天行的`key`即可

其他接口可随意申请，自行扩展~

### 运行测试
```bash
npm start
```



此工程基于 [https://github.com/gengchen528/wechatBot](https://github.com/gengchen528/wechatBot) 衍生而来。

较此工程有以下几个功能：  
- 热更新，修改代码后免重启，便于在线调试。
- 新增全国肺炎、各省市肺炎数据，按关键字回复即可。
- 添加好友自动同意请求
- 添加转大小写、颜色的rgb与base64互转等小工具。
- 每日毒鸡汤、神回复、英语一句话、实时毒鸡汤。
- 发送加群命令邀请好友进群。
- ~~采集京东联盟高佣商品，京粉转链后发送至指定群。~~
- ~~按指令获取百度云文件，分享给用户下载链接及提取码。~~

底层api基于nodejs的一个库 [wechaty](https://github.com/wechaty/wechaty)  

更多微信消息、群消息、好友、对话等相关api可查阅官方文档 [wechaty官方文档](https://github.com/wechaty/wechaty/blob/master/docs/index.md)  

有问题提issues吧
