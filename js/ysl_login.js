new Vue({
    el:"#log",
    data:{
        uname:"",
        upwd:"",
        tishiuname:""
    },
    methods:{
        zhuce:function(){
            location.href="ysl_zhuce.html";
        },
        //    正则表达式验证格式是否有误
        shiqu:function() {
            //console.log(123)
            var uname = this.uname;
            //    手机号验证
            var reg1= /^1[3-9]\d{9}$/;
            //邮箱验证
            var reg2= /\w+@[a-z0-9]+\.[a-z]{2,4}/;
            //console.log(reg1.test(uname))
            if (!reg1.test(uname) && !reg2.test(uname)) {
                this.tishiuname = "请输入正确的手机号或邮箱";
            } else {
                this.tishiuname = "输入格式正确";
            }
        }
    }
});


