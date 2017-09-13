/**
 * Created by cpc on 2017/7/29.
 */
/**
 * Created by bjwsl-001 on 2017/5/14.
 */
$(function() {
    main(function () {
        navText("美食达人");
    });
});

//轮播：定义任务函数task

//获得id为slider下class为show的img
var $as=$("#main-content div.slider a");
// 所有li组成类数组对象 liList //[01234]
var $liList=$("#main-content div.slider ul li");
// 4:当前显示序号         index[0 1 2 ]
var index=0;

function task(){
    index++;
    //判序>2
    (index > 2) && (index = 0);
    // 5.3:为当前下标图片添加class active
    // 兄弟class active删除
    $as.eq(index).addClass("show").siblings(".show").removeClass("show");
    //  5.4:为当前下标页码添加class active
    //   兄弟class active删除
    $liList.eq(index).addClass("active").siblings(".active").removeClass("active");
}
//    添加定时器
var timer=setInterval(function(){task();},2000);
//  7:为所有页码绑定点击事件
$liList.mouseenter(function(){
    //  7.1 获取页码 3
    index=parseInt($(this).html())-1;
    //  7.2 获取当前下标图片添加class active兄弟class active删除
    // 兄弟class active删除
    $as.eq(index).addClass("show").siblings(".show").removeClass("show");
    //  5.4:为当前下标页码添加class active
    //   兄弟class active删除
    $liList.eq(index).addClass("active").siblings(".active").removeClass("active");
});

//为img绑定鼠标进入和鼠标移出事件:
$(".slider img").mouseover(function(){//鼠标移入，清除定时器
    clearTimeout(timer);
});
$(".slider img").mouseout(function(){//鼠标移出，添加除定时器
    timer=setInterval(function(){task();},2000);
});




//    随机色
//        美食达人
function rn(max, min) {
    return Math.floor(Math.random() * (max - min) + min);
}
function rg(max, min) {
    var r = rn(max, min);
    var g = rn(max, min);
    var b = rn(max, min);
    return `rgb(${r},${g},${b})`;
}
var li = $('#main-content div.run-over ul li ');
var lii = $('#main-content div.run-over ul li i');
console.log(lii,li);
for (var i = 0; i < lii.length; i++) {
    lii[i].style.color = rg(0, 255);
}
li.mouseenter(function () {
    var font = rg(0, 255);
    var i = $(this).css('background', font);
    $(this).children('i').css('background', '#fff').css('color', font);
});
li.mouseleave(function () {
    $(this).css('background', '#fff')
});