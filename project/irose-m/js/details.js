$(function(){
    //获取fId
    var str=window.location.href;
    var fId=str.substr(str.lastIndexOf("=")+1);
    var uid=sessionStorage.uid;
    var count=1;
    //生成内容
    $.ajax({
        type:"post",
        url:"php/f_details.php",
        data:{fId:fId},
        success:function(d){
            //console.log(d);
            $(".information_name").html(d.title);
            $('.principal').text(`主材: ${d.number}支精品${d.cname}${d.tTypeName} 配材: ${d.subMt}`);
            $('.price_left .price1 s').text(`¥ ${d.price}`);
            $('.price_left .price2 b').text(`¥ ${d.salePrice}`);
            $('.content_img .c_img').html(d.details);

            /*生成图片*/
            if(d.picList.length!=0){
                $('.spec_n1 img').attr('src',d.picList[0]);
                var imgStr='';
                for(var i=0;i<d.picList.length;i++){
                    imgStr+=`<li><img src="${d.picList[i]}" alt=""/></li>`;
                }
                $('.img_scroll ul').width(d.picList.length*72);
                $('.img_scroll ul').html(imgStr);
                $('.img_scroll ul li:first').addClass('current');

                //切换显示图片
                $('.img_scroll ul li').click(function(){
                    $('.img_scroll ul li').removeClass();
                    $(this).addClass('current');
                    var srcStr=$(this).find('img').attr('src');
                    $('.spec_n1 img').attr('src',srcStr);
                });
                imgScroll();
            }
        }
    });

    //图片滚动
    function imgScroll(){
        var sise=352;//当前可显示的宽度
        var moveSize=72;//每次移动宽度
        var ulW=$('.img_scroll ul').width()-352;//ul总宽度-显示宽度=可移动的宽度
        var ulL=parseInt($('.img_scroll ul').css('left'));//ul的left值
        $('.spec_left').click(function(e){
            e.preventDefault();
            if(ulL<0){
                ulL+=moveSize;
                $('.img_scroll ul').css('left',ulL);
            }
        });
        $('.spec_right').click(function(e){
            e.preventDefault();
            if(ulW>-ulL){
                ulL-=moveSize;
                $('.img_scroll ul').css('left',ulL);
            }
        });
    }


    //更改数量
    $('.change .jia').click(function(e){
        e.preventDefault();
        count+=1;
        $('#count').val(count);
    });
    $('.change .jian').click(function(e){
        e.preventDefault();
        if(count>1){
            count-=1;
            $('#count').val(count);
        }
    });


    //加入购物车
    $(".add_cart").click(function(){
        if(uid){
            $.ajax({
                type:"post",
                url:"php/cart_add.php",
                data:{uid:uid,fId:fId,count:count},
                success:function(d){
                    //console.log(d);
                    alert("添加购物车成功！");
                }
            });
        }else{
            location.href="login.html";
        }
    });



});