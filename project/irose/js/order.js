/**
 * Created by cpc on 2017/7/25.
 */
$(function(){
    //功能1：加载头尾
    $(".header-box").load("public/header.html");
    $(".footer-box").load("public/footer.html");

    //功能2：选择收货地址
    $(".user_address").on("click","ul>li",function(e){
        e.preventDefault();//阻止默认行为
        $(this).addClass("active").siblings(".active").removeClass("active");
    });
});