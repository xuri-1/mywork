/**
 * Created by cpc on 2017/9/8.
 */
//��������
function main(callback){
    $(".header-box").load("public/header.html",function() {
        ////�ж��û��Ƿ��¼
        //isLogin();
        //���ûص��������е��ã��ޣ������ã��Է�����
        if (callback) {
            callback();
        }
    });
}
function navText(text){
    //console.log(text);
    $("nav ul>li").each(function(){
        var thisText=$(this).children("a").text();
        if(thisText==text){
            console.log(thisText);
            //$("nav li").removeClass("actildive");
            $(this).addClass("current");
        }
    });
}


$(".footer-box").load("public/footer.html");