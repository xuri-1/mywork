/**
 * Created by cpc on 2017/7/23.
 */
$(function(){
  //����1:����β��
    $(".footer-box").load("public/footer.html");

  //����2:2�ֵ�¼��ʽ�л�
   $(".phone").on("click","a",function(){
       $(this).addClass("active").siblings(".active").removeClass("active");
       var divs=$(this).attr('href');
       $(divs).addClass('active').siblings('.active').removeClass('active');
   });
});