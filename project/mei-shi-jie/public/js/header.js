//��������
function main(callback){
    $("#header-box").load("tpl/header.html",function(){
        ////�ж��û��Ƿ��¼
        //isLogin();
        //���ûص��������е��ã��ޣ������ã��Է�����
        if(callback){
            callback();
        }
    });
}
function navText(text){
    //console.log(text);
    $("#nav ul>li").each(function(){
        var thisText=$(this).children("a").text();
        if(thisText==text){
            console.log(thisText);
            //$("nav li").removeClass("actildive");
            $(this).addClass("current");
        }
    });
}


$(function() {
//����1������ͷ��β
//    $("#header-box").load("tpl/header.html");
    $("#footer-box").load("tpl/footer.html");
});

//����2����¼
$("#btn_1").click(function(){
    console.log($('#login'));
    $("#login").css("display","block");
});

$('#close').click(function(){
    $("#login").css("display","none");
});