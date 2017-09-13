/**
 * Created by bjwsl-001 on 2017/6/26.
 */
/*功能1：修改 a 的 href属性*/
$("ul.lineup-1>li>a").attr('href','2017%20Lineup-Greenbelt.html');
$("ul.get-1>li>a").attr('href','Be%20part%20of%20the%20bill-Greenbelt.html');
$("ul.info-1>li>a").attr('href','Be%20part%20of%20the%20bill-Greenbelt.html');
$("ul.experience-1>li>a").attr('href','Be%20part%20of%20the%20bill-Greenbelt.html');
$("ul.about-1>li>a").attr('href','Be%20part%20of%20the%20bill-Greenbelt.html');
//2.固定导航条-----------------------------------
//导航条距离页面顶部的距离
var t=$("#nav").offset().top;
//当页面滚动条滚动时触发事件
$(window).scroll(function(){
    //滚动条距离页面顶部的距离大于定值时，让导航条固定定位,小于定值时，取消固定定位
    $(window).scrollTop()>t+60?$("#nav").addClass('fix'):$("#nav").removeClass("fix");
});