/**
 * Created by bjwsl-001 on 2017/6/26.
 */
/**功能点1： 异步请求页头和页尾**/
$("#header").load("public/header.html");
$("#foot").load("public/footer.html");


/*功能2：修改 a 的 href属性*/
$("#menu-1>li>a").attr('href','2017%20Lineup-Greenbelt.html');


//3.固定导航条-----------------------------------
//导航条距离页面顶部的距离
var t=$("#content").offset().top;
//当页面滚动条滚动时触发事件
$(window).scroll(function(){
    //滚动条距离页面顶部的距离大于定值时，让导航条固定定位,小于定值时，取消固定定位
    $(window).scrollTop()>t+60?$("#content").addClass('fix1'):$("#content").removeClass("fix1");
});

//用animate属性，当点击锚点后，页面滚动到响应的位置，top值减去导航条的高度
$('[href="#GTV-YOUTH"]').click(function(){
    $('html,body').animate({scrollTop:$("#GTV-YOUTH").offset().top-70},{duratuon:500,easing:'swing'});
});
$('[href="#Richard"]').click(function(){
    $('html,body').animate({scrollTop:$("#Richard").offset().top-70},{duratuon:500,easing:'swing'});
});