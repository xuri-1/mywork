/**
 * Created by cpc on 2017/9/8.
 */
//导航高亮
function main(callback){
    $(".header-box").load("public/header.html",function() {
        ////判断用户是否登录
        //isLogin();
        //调用回调函数，有调用；无，不调用；以防报错
        if (callback) {
            callback();
        }
    });
}
function navText(text){
    //console.log(text);
    $("nav ul>li").each(function(){
        var thisText=$(this).children("a").text();
        if(thisText==text){
            console.log(thisText);
            //$("nav li").removeClass("actildive");
            $(this).addClass("current");
        }
    });
}


$(".footer-box").load("public/footer.html");