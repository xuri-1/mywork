$(function(){
    $(".header_box").load("header.html",function(){
        //判断用户是否登录
        if(sessionStorage.uid){
            //顶部显示用户名
            var uname=sessionStorage.uname?sessionStorage.uname:sessionStorage.phone;
            var userStr='<span>欢迎您，'+uname+'</span><span>|</span><a href="" id="user_quit">退出</a>';
            $('.h_user').html(userStr);
            //退出登录
            $("#user_quit").click(function(e){
                e.preventDefault();
                sessionStorage.clear();
                userStr='<a href="login.html">登录</a><span>|</span><a href="register.html">注册</a>';
                $('.h_user').html(userStr);
            });
        }
    });
    $(".footer_box").load("footer.html");
});