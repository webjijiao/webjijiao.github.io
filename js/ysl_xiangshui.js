//实现点击心型图标,背景颜色 黑白切换
$(function(){
    $(".xin").on("click",".xin1",
        function(){
            if($(".xin1").is(".icon-shoucang")){
                $(".xin1").removeClass("icon-shoucang")
                $(".xin1").addClass("icon-shoucang11")
            }else {
                $(".xin1").addClass("icon-shoucang")
                $(".xin1").removeClass("icon-shoucang11")
            }
        }
    )
})
//实现点击div  实现产品规格选择
$(function(){
    $(".dd").click(
        function(){
            var $th=$(this).parent("div").siblings("div").children([".dd"]);
            if($(this).is(".sed")) {
                $(this).addClass("nosed").removeClass("sed");
            }else if($(this).is(".nosed")) {
                $(this).addClass("sed").removeClass("nosed");
                $th.addClass("nosed").removeClass("sed");
                //实现选中产品规格  单价发生变化
                //查找div中span中的单价
                var $span=$(this).children("p").last("p").children("span");
                var $price=$span.html();
                //console.log($price);  测试
                //    查找要修改的内容
                var $pri=$(this).parent("div").parent("div").nextAll(".pri1").find("#pri").children("span").children("span");
                $pri.html($price);
            }
        }
    );
});
//实现点击div div背景颜色 黑白切换
$(function(){
    $(".kk").click(
        function(){
            $(this).children([".kks"]).toggleClass("my_white")
        }
    )

})
//实现点击 - 号 span的值减1
$(function(){
//    DOM 4步
//    1:查找触发事件的元素
    var $jian=$("#jian");
//    2:绑定事件处理函数
    $jian.click(function(){
//    3:查找要修改的元素
        var $n1=$(this).next().children("span");
        var $n = parseInt($n1.html());
        //console.log($n)  测试
//    4:修改元素
        if($n>1){
            $n--;
            $n1.html($n);
        }
    })
})
//实现点击 +号 span的值加1
$(function(){
//    DOM 4步
//    1:查找触发事件的元素
    var $jia=$("#jia");
//    2:绑定事件处理函数
    $jia.click(function(){
//    3:查找要修改的元素
        var $n1=$(this).prev().children("span");
        var $n = parseInt($n1.html());
        //console.log($n)  测试
//    4:修改元素
        if($n>=0&&$n<6){
            $n++;
            $n1.html($n);
        }
    })
})

//登录的AJAX
$(function(){
// //    DOM 4步
//    1:查找触发事件的元素
    var $dl=$("#dl");
    $dl.click(function(){
        //查找邮箱手机文本框
        var $un=$(this).parent("div").siblings("#uname").children(".uname")[0];
        //查找内容
        //console.log($uname);  //测试骗我的
        var $unamev=$un.value;
        //console.log($un.value);
        //查找密码文本框
        var $up=$(this).parent("div").siblings("#upwd").children(".upwd")[0];
        var $upwdv=$up.value;
        //console.log($up.value);
        var uname = this.uname;
        //    手机号验证
        var $reg1= /^1[3-9]\d{9}$/;
        //邮箱验证
        var $reg2= /\w+@[a-z0-9]+\.[a-z]{2,4}/;
        if(!$reg1.test($unamev) && !$reg2.test($unamev)){
            var $span1=$(this).parent("div").siblings("#uname").children(".uname").next();
            //console.log($span);
            $span1.html("手机号或邮箱输入有误");
            return;
        }
        //密码验证
        var $reg3 = /^[a-z0-9_-]{3,12}$/i;
        if(!$reg3.test($upwdv)){
            var $span2=$(this).parent("div").siblings("#upwd").children(".upwd").next();
            //console.log($span);
            $span2.html("输入密码格式有误");
            return;
        }
        //向127.0.0.1:8080发送aja请求,获得数据
        $.ajax({
            url:"http://127.0.0.1:8080/user/login",
            type:"get",//请求类型
            data: {
                $uname:$unamev,
                $upwd:$upwdv
            },
            //无请求参数
            dataType:"json"//返回值类型

        }) .then(function(result){
            //console.log(result);
            if(result.code>0){
                location.href="index.html";
            }else{
                alert("用户名或密码有误,请重新输入");
            }
        })
    })
})




