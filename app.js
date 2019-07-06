//引入express
const express=require('express');
//引入路由器
const userRouter=require('./routers/user.js');
//引入body-parser中间件
const bodyParser=require('body-parser');
//引入cors模块--解决跨越
const cors = require("cors");
// 引入session 对象
const session = require("express-session");
//创建web服务器
var server=express();
//创建端口
server.listen(8080);
// 跨域
server.use(cors({
    origin:
        ["*"], //允许访问的程序的地址
    credentials: true  //credentials 是Request接口的只读属性，用于表示用户代理是否应该在跨域请求的情况下从其他域发送cookies。这与XHR的withCredentials 标志相似
}))
//session
server.use(session({
    secret: "128为字符串", //自定义字符串用于加密数据使用
    resave: true,           //每次请求更新数据
    saveUninitialized: true  //保存初始化数据
}))
//托管静态资源到public下
server.use(express.static('public'));
//使用body-parser中间件,将post请求的数据格式化为对象
server.use(bodyParser.urlencoded({
    extended:false
}));


//使用路由器
//挂载url:/user
server.use('/user',userRouter);