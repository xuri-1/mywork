//导航高亮
function main(callback){
    $("#header-box").load("tpl/header.html",function(){
        ////判断用户是否登录
        //isLogin();
        //调用回调函数，有调用；无，不调用；以防报错
        if(callback){
            callback();
        }
    });
}
function navText(text){
    //console.log(text);
    $("#nav ul>li").each(function(){
        var thisText=$(this).children("a").text();
        if(thisText==text){
            console.log(thisText);
            //$("nav li").removeClass("actildive");
            $(this).addClass("current");
        }
    });
}


$(function() {
//功能1：加载头和尾
//    $("#header-box").load("tpl/header.html");
    $("#footer-box").load("tpl/footer.html");
});

//功能2：登录
$("#btn_1").click(function(){
    console.log($('#login'));
    $("#login").css("display","block");
});

$('#close').click(function(){
    $("#login").css("display","none");
});