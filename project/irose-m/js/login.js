$(function(){
    $('#login').click(function(){
        var phone=$.trim($("#phone").val());
        var upwd=$.trim($("#upwd").val());
        if(phone&&upwd){//用户名密码不为空
            $.ajax({
                type:"post",
                url:"php/user_login.php",
                data:{phone:phone,upwd:upwd},
                success:function(d){
                    //console.log(d);
                    if(d.code==1){//登录成功
                        sessionStorage.uid= d.uid;
                        sessionStorage.phone= d.phone;
                        sessionStorage.uname= d.uname;
                        history.go(-1);
                    }else{//登录失败
                        $(".lg_tips").text("您的手机号或密码不正确").show();
                    }
                }
            });
        }else{//用户名或密码为空
            $(".lg_tips").text("用户名和密码不能为空").show();
        }
    });

});