if(!window.jQuery){
    throw new Error('lunbo.js依赖于jQuery!');
}

jQuery.fn.carousel=function(){
        var i=0;
        var timer=null;
        var firstimg=$('.img>div').first().clone(); //复制第一张图片
        //将第一张图片放到最后一张图片后，设置ul的宽度为图片张数*图片宽度
        $('.img').append(firstimg).width($('.img>div').length*($('.img ul').width()));
        console.log($('.img>div').length);

        // 下一个按钮
        $('.next').click(function(){
            i++;
            if (i==$('.img>div').length) {
                i=1; //这里不是i=0
                $('.img').css({left:0}); //保证无缝轮播，设置left值
            }

            $('.img').stop().animate({left:-i*979},1000);
            if (i==$('.img>div').length-1) {  //设置小圆点指示
                $('.num li').eq(0).addClass('active').siblings().removeClass('active');
            }else{
                $('.num li').eq(i).addClass('active').siblings().removeClass('active');
            }

        });

        // 上一个按钮
        $('.prev').click(function(){
            i--;
            if (i==-1) {
                i=$('.img>div').length-2;
                $('.img').css({left:-($('.img>div').length-1)*979});
            }
            $('.img').stop().animate({left:-i*979},1000);
            $('.num li').eq(i).addClass('active').siblings().removeClass('active');
        })

        //鼠标划入圆点
        $('.num li').mouseover(function(){
            var _index=$(this).index();
            $('.img').stop().animate({left:-_index*979},1000);
            $('.num li').eq(_index).addClass('active').siblings().removeClass('active');
        })

        //定时器自动播放
        timer=setInterval(function(){
            i++;
            if (i==$('.img>div').length) {
                i=1;
                $('.img').css({left:0});
            };

            $('.img').stop().animate({left:-i*979},1000);
            if (i==$('.img>div').length-1) {
                $('.num li').eq(0).addClass('active').siblings().removeClass('active');
            }else{
                $('.num li').eq(i).addClass('active').siblings().removeClass('active');
            }
        },3000);

        //鼠标移入，暂停自动播放，移出，重新自动播放
        $('#part').hover(function(){
            clearInterval(timer);
        },function(){
            timer=setInterval(function(){
                i++;
                if (i==$('.img>div').length) {
                    i=1;
                    $('.img').css({left:0});
                }

                $('.img').stop().animate({left:-i*979},1000);
                if (i==$('.img>div').length-1) {
                    $('.num li').eq(0).addClass('active').siblings().removeClass('active');
                }else{
                    $('.num li').eq(i).addClass('active').siblings().removeClass('active');
                }
            },3000)
        });
};
/**
 * Created by bjwsl-001 on 2016/6/19.
 */


