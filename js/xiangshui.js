
$(function(){
    $(".xin").on("click",".iconfont",
        function(){
            if($(".iconfont").is(".icon-shoucang")){
                $(".iconfont").removeClass("icon-shoucang")
                $(".iconfont").addClass("icon-shoucang11")
            }else {
                $(".iconfont").addClass("icon-shoucang")
                $(".iconfont").removeClass("icon-shoucang11")
            }
        }
    )
})

$(function(){
    $(".dd").click(
        function(){
        var $th=$(this).parent("div").siblings("div").children(["dd"]);
            if($(this).is(".sed")) {
                $(this).addClass("nosed").removeClass("sed");
            }else if($(this).is(".nosed")) {
                $(this).addClass("sed").removeClass("nosed");
                $th.addClass("nosed").removeClass("sed");
            }
    }
    );
});
