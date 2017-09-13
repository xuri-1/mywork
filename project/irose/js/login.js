/**
 * Created by cpc on 2017/7/23.
 */
$(function(){
  //功能1:加载尾部
    $(".footer-box").load("public/footer.html");

  //功能2:2种登录方式切换
   $(".phone").on("click","a",function(){
       $(this).addClass("active").siblings(".active").removeClass("active");
       var divs=$(this).attr('href');
       $(divs).addClass('active').siblings('.active').removeClass('active');
   });
});