/**
 * Created by cpc on 2017/7/25.
 */
$(function(){
    //����1������ͷβ
    $(".header-box").load("public/header.html");
    $(".footer-box").load("public/footer.html");

    //����2��ѡ���ջ���ַ
    $(".user_address").on("click","ul>li",function(e){
        e.preventDefault();//��ֹĬ����Ϊ
        $(this).addClass("active").siblings(".active").removeClass("active");
    });
});