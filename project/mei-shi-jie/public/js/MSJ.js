//$(function(){})==+function(){}()--函数自调;
$(function() {
        main(function () {
            navText("首页");
        });
});
+function(){
//登录绑定事件:点击显示登录模态框
    var $btn=$("#btn");
    $btn.click(function(e){
           console.log($btn);
           e.preventDefault();
           $(".modal").addClass('modal-show');
    });
    $("#bt-login").click(function(){
         //2.1:获取表单的用户名密码
         var n = $("[name='uname']").val();
         var p = $("[name='upwd']").val();
         //2.2:向服务器端发送ajax请求
         $.ajax({
               type:'POST',
               url:'data/login.php',
               data:{uname:n,upwd:p},
               success:function(data){
                  if(data.code<0){
                    $('p.alert').html(data.msg);
                  }else{
                    //如果登录成功，模态框隐藏
                    $(".modal").hide();
                    loginUid = data.uid;
                    loginUname = data.uname;
                    //console.log(loginUid+":"+loginUname);
                  }
               }
         });
    });
}();


//早中午餐:轮播
$(function(){
    var i=0;
    var timer=null;
    var WIDTH=990;//宽度
    var firstimg=$('.banner-top>div').first().clone(); //复制第一张图片
    //将第一张图片放到最后一张图片后，设置ul的宽度为图片张数*图片宽度
    $('.banner-top').append(firstimg).width($('.banner-top>div').length*($('.banner-top>div').width()));
    //console.log($('.banner-top>div'));
    //console.log($('.banner-top>div').width());//WIDTH

    // 下一个按钮
    $('.next_btn').click(function(){
        i++;
        if (i==$('.banner-top>div').length) {
            i=1; //这里不是i=0
            $('.banner-top').css({left:0}); //保证无缝轮播，设置left值
        }
        $('.banner-top').stop().animate({left:-i*WIDTH},1000);
        //设置刻度尺上时间指示
        if (i==$('.banner-top>div').length-1) {
            $('.china>span').eq(0).addClass('red').siblings().removeClass('red');
        }else{
            $('.china>span').eq(i).addClass('red').siblings().removeClass('red');
        }
        console.log(i)
    });

    // 上一个按钮
    $('.prev_btn').click(function(){
        i--;
        if (i==-1) {
            i=$('.banner-top>div').length-2;
            $('.banner-top').css({left:-($('.banner-top>div').length-1)*WIDTH});
        }
        $('.banner-top').stop().animate({left:-i*WIDTH},1000);
        $('.china>span').eq(i).addClass('red').siblings().removeClass('red');
    });

    //设置左右箭头的显示和隐藏
    $('#banner').hover(function(){
        $('.btn').show();
    },function(){
        $('.btn').hide();
    });

    //鼠标划入刻度尺
    $('.china>span').mouseover(function(){
        $(this).addClass('red').siblings().removeClass('red');
        var Index=$(this).index();
        $('.banner-top').stop().animate({left:-Index*WIDTH},1000);
    })
});


//2.稳定情绪保养心脏
+function(){
    $("#P-p").on("mouseover","span",function(){
           $(this).addClass('active').siblings('.active').removeClass('active');
            var $id=$(this).children().attr("href");
            $("#section div.part-two div").removeClass("active1");
            $($id).addClass("active1");

    });
}();

    //4.健康新闻
+function() {
    $(".part ul li ").on("mouseover", " a", function (e) {
        e.preventDefault();
        //var i = $(this).attr("href").indexOf("#");
        //var $id = $(this).attr("href").slice(i);
        //$(this).parent()
        //       .parent()
        //       .siblings("a")
        //       .children()
        //       .removeClass("show1");
        // $($id).addClass("show1");
        $(this).addClass("active").parent().siblings().children(".active").removeClass("active")
        var id=$(this).attr("href");
        $(id).addClass("show1").siblings(".show1").removeClass("show1");
        console.log($(id));
    });
}();//函数自调


//美食达人
//    var timer=setInterval("run();",500);
//    var hot=document.getElementById('hot');
//    function run(){
//        if(hot.style.display=='none'){
//            hot.style.display='';
//        }else{
//            hot.style.display='none';
//        }
//    }


