/**
 * Created by cpc on 2017/9/5.
 */

//手机验证码
var countdown=60;
function settime(val) {
    if(countdown >= 0) {
        //val.setAttribute("disabled", true);
        $('#yzm').html("重新发送(" + countdown + ")");
        console.log(countdown);
        countdown--;

    }
    var timer=setTimeout(function() {
        settime(val)
    },1000);

    if(countdown==-1){
        clearTimeout(timer);
        // val.removeAttribute("disabled");
        $('#yzm').html("免费获取验证码");
        countdown = 60;

    }
}

//手机注册、账号注册 切换
$(".content").on("click", "span a", function (e) {
    e.preventDefault();
    var id = $(this).attr('href');
    console.log(id);
    $(this).css("color", "red")
        .css('fontWeight', 'bold')
        .siblings().css('fontWeight', 'normal')
        .css("color", "#000");
    $(id).addClass("form-show").siblings("form").removeClass("form-show");
});

//当复选框被选中，button可用
$("#ucheckbox").click(function(){
    $("#btn1").prop("disabled",!$(this).prop("checked")).toggleClass("disabled");
});

//注册表单验证
//+function() {
//    var form = document.getElementById('login-form');
//    console.log(form);
//    var txtName = form.uname;
//    var pwdName = form.upwd;
//    txtName.onfocus = getFocus;
//    pwdName.onfocus = getFocus;
//    function getFocus() {
//        this.className = "txt_focus";
//        var div = this.nextElementSibling;
//        console.log(div);
//        div.className = "";
//    }
//
//    txtName.onblur = function () {
//        vali(this, /^\w{1,10}$/);
//    };
//    pwdName.onblur = function () {
//        vali(this, /^\d{6}$/);
//    };
//    function vali(txt, reg) {
//        txt.className = "";
//        var div = txt.nextElementSibling;
//        if (reg.test(txt.value)) {
//            div.className = "vali_success";
//            return true;
//        } else {
//            div.className = "vali_fail";
//            return false;
//        }
//    }
//
//    form.onsubmit = function (e) {
//        if (!vali(txtName, /^\w{1,10}$/) || !vali(txtPwd, /^\d{6}$/))
//            e.preventDefault();
//    };
//}();



//账号注册--单击事件
$('#btn2').click(function(){
    var u=$("#u").val();
    var p=$("#p").val();
    console.log(u,p);
    $.ajax({
        type:"POST",
        url:"data/login.php",
        data:{uname:u,upwd:p},
        success:function(data){
            console.log(data);
            if(data.code>0){
                alert('注册成功3s后跳转');
                sessionStorage['loginUname']=$('[name="uname"]').val();
                setInterval(function(){
                    location.href='QQ.html';
                },3000);
            }else{
                alert('注册失败');
            }
        }
    });
});