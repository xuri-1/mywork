/**
 * Created by cpc on 2017/7/20.
 */

//轮播：定义任务函数task

//获得id为slider下class为show的img
var $as=$("div.slider a");
// 所有li组成类数组对象 liList //[01234]
var $liList=$("div.slider ul li");
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
$(".slider a").mouseover(function(){//鼠标移入，清除定时器
    clearTimeout(timer);
});
$(".slider a").mouseout(function(){//鼠标移出，添加除定时器
    timer=setInterval(function(){task();},2000);
});


$(function(){
    //功能2：优惠推荐---切换
    $(".you-hui").on("click","li:not(:last-child)",function(e){
        e.preventDefault();//阻止默认行为
        $(this).addClass('active').siblings(".active").removeClass('active');
        var list=$(this).children().attr("href");
        $(list).addClass('active').siblings(".active").removeClass('active');
    });

    //功能3：修改a的href值
    $('div.tui-jian>ul li>a').attr('href','detail.html');
});
