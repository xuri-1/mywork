/**
 * Created by bjwsl-001 on 2017/6/3.
 */
//Â¥²ãÌø×ª
//var lis=("#footer li");
//$(lis).each(function(i,li){
//    var floorId=$(this).children("a").attr("href");
//    var floorTop=$(floorId).offset.top
//});
//var f=$(".alike");
//$(lis).click(function(){
//   var q=f.eq($(this).index()).offset().top;
//    $("body,html").animate({"scrollTop":q},500);
//    });

//Ä£Ì¬¿ò
+function(){
var imgs=("#third-floor1 img");
var zhe=("#motai");
var close=("#motai .close");
$(imgs).click(function(){
    $(zhe).css("display","block")
});
$(close).click(function(){
    $(zhe).css("display","none")
    })
}();

$(window).scroll(function(){
    var aaa=$('.first-floor').offset().top;
    var aaa1=$('#offer').offset().top;
    var aaa2=$('#offer1').offset().top;
    var aaa3=$('#service').offset().top;
    var aaa4=$('#third-floor1').offset().top;
    var aaa5=$('#third-floor2').offset().top;
    var aaa6=$('#third-floor3').offset().top;
    var height=$(window).height()*0.5;
    if($(document).scrollTop()>aaa-height){
        $('.first-floor').css('opacity',1);
    }
    if($(document).scrollTop()>aaa1-height){
        $('#offer').css('opacity',1);
    }
    if($(document).scrollTop()>aaa2-height){
        $('#offer1').css('opacity',1);
    }
    if($(document).scrollTop()>aaa3-height){
        $('#service').css('opacity',1);
    }
    if($(document).scrollTop()>aaa4-height){
        $('#third-floor1').css('opacity',1);
    }
    if($(document).scrollTop()>aaa5-height){
        $('#third-floor2').css('opacity',1);
    }
    if($(document).scrollTop()>aaa6-height){
        $('#third-floor3').css('opacity',1);
    }
});








