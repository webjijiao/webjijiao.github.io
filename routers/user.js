//引入express
const express=require('express');
//引入连接池模块
const pool=require('../pool.js');
//创建路由器对象
const router=express.Router();

//1:用户注册
//post
//2:用户登录
//post
router.get('/login',function(req,res){
//    获取post请求的数据
    var obj=req.query;
    console.log(obj)
    var uname=obj.$uname;
    var upwd=obj.$upwd;
    if(uname==""){
        return;
    }
    if(upwd==""){
        return;
    }
//执行sql语句
// 查询用户表ysl_user中是否有用户名和密码同时匹配的数据
    var sql="SELECT uname ,upwd FROM ysl_user WHERE uname=? AND upwd=?";
    pool.query(sql,[uname,upwd],function(err,result){
        if(err) throw err;
        //console.log(result);
        if(result.length>0){
            res.send({code:1,msg:"登录成功"});
        }else{
            res.send({code:-1,msg:"登录失败"});
        }
    });
});
//导出路由器对象
module.exports=router;

