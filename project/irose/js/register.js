/**
 * Created by cpc on 2017/7/23.
 */
/**
 * Created by cpc on 2017/7/23.
 */
$(function(){
    //功能1:加载尾部
    $(".footer-box").load("public/footer.html");


    //var t=new Date('2017-04-15');
    //console.log(t.getTime());

    var phone,upwd1,upwd2,uname;

    $("#phone").blur(phoneCheck);
    $("#upwd1").blur(pwd1Check);
    $("#upwd2").blur(pwd2Check);
    $("#ucheckbox").click(function(){
        $("#register").prop("disabled",!$(this).prop("checked")).toggleClass("disabled");
    });

    //提交注册
    $("#register").click(function(){
        var rphone=phoneCheck();
        var rpwd1=pwd1Check();
        var rpwd2=pwd2Check();
        if(rphone&&rpwd1&&rpwd2){
            uname= $.trim($("#uname").val());
            $.ajax({
                type:"post",
                url:"php/user_register.php",
                data:{phone:phone,upwd:upwd1,uname:uname},
                success:function(d){
                    //console.log(d)
                    if(d.code==1){
                        sessionStorage.uid= d.uid;
                        sessionStorage.phone= d.phone;
                        sessionStorage.uname= d.uname;
                        alert("恭喜您，注册成功！即将为您跳转到刚才的页面。");
                        history.go(-1);
                    }
                }
            });
        }
    });


    //验证手机号
    function phoneCheck(){
        phone= $.trim($("#phone").val());
        var regPhone= /^1[3578]\d{9}$/;
        if(!phone){
            $("#phone").siblings("i").show().text("请填写您的手机号");
            return false;
        }else if(!regPhone.test(phone)){
            $("#phone").siblings("i").show().text("请输入正确的手机号码");
            return false;
        }else if(phoneExist(phone)){
            $("#phone").siblings("i").show().text("此手机号已被其他用户绑定");
            return false;
        }else{
            $("#phone").siblings("i").hide();
            return true;
        }
    }
    //验证手机号是否被绑定
    function phoneExist(phone){
        var back=false;
        $.ajax({
            type:"post",
            url:"php/user_check_phone.php",
            data:{phone:phone},
            async:false,
            success:function(d){
                if(d.code==1){//用户名已经存在
                    back=true;
                }else{
                    back=false;
                }
            }
        });
        return back;
    }
    //验证密码
    function pwd1Check(){
        upwd1=$.trim($("#upwd1").val());
        var upwd1Size= upwd1.length;
        if(!upwd1Size){//密码为空时
            $("#upwd1").siblings("i").show().text("请输入您的密码");
            return false;
        }else if(upwd1Size<6||upwd1Size>12){
            $("#upwd1").siblings("i").show().text("密码长度应为6~12个字符之间");
            return false;
        }else{
            $("#upwd1").siblings("i").hide();
            return true;
        }
    }
//验证重复密码
    function pwd2Check(){
        upwd2= $.trim($("#upwd2").val());
        if(pwd1Check()){
            if(upwd1!=upwd2){
                $("#upwd2").siblings("i").show().text("两次输入的密码不一致");
                return false;
            }else{
                $("#upwd2").siblings("i").hide();
                return true;
            }
        }
    }



});



