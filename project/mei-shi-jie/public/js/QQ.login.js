/**
 * Created by cpc on 2017/9/7.
 */
var form = document.getElementsByClassName('Input')[0];
console.log(form);
var txtName = form.QQuname;
var pwdName = form.QQupwd;
txtName.onfocus = getFocus;
pwdName.onfocus = getFocus;
function getFocus() {
    this.style.borderColor = "#000";
    var div = this.nextElementSibling;
    div.className = "";
}

txtName.onblur = function () {
    vali(this, /^\w{1,10}$/);
};
pwdName.onblur = function () {
    vali(this, /^\d{6}$/);
};
function vali(txt, reg) {
    txt.style.borderColor = "";
    var div = txt.nextElementSibling;
    if (reg.test(txt.value)) {
        txt.style.borderColor = "";
        div.className = "";
        return true;
    } else {
        div.className = "";
        return false;
    }
}

    if (vali(txtName, /^\w{1,10}$/) && vali(txtPwd, /^\d{6}$/)){
        e.preventDefault();
        $('#btn-q').click(function(){
            var n = $("[name='uname']").val();
            var p = $("[name='upwd']").val();
            $.ajax({
                type:'POST',
                url:'data/m_user.php',
                data:{QQuname:n,QQupwd:p},
                success:function(data){
                    console.log(data);
                    if(data.code===200){
                        alert('µÇÂ¼³É¹¦');
                    }else{
                        alert('µÇÂ¼Ê§°Ü');
                    }
                }
            })
        });
    }
