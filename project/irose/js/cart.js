/**
 * Created by cpc on 2017/7/25.
 */
$(function(){
    main();
});

$(function(){
    //ȫѡ&ȫ��ѡ
    $('.cartcon_list').on('click','.cart_checkbox',function(){
        if($(this).is(":checked")){
            var numC=$('.cartcon_list .cart_checkbox:checked').size();
            var numL=$('.cartcon_list .cart_checkbox').size();
            if(numC==numL){
                $(".checkbox_all").prop("checked",true);
            }
        }else{
            $(".checkbox_all").prop("checked",false);
        }
    });
    $(".checkbox_all").click(function(){
        if($(this).is(":checked")){
            $('.cart_checkbox').prop("checked",true);
        }else{
            $('.cart_checkbox').prop("checked",false);
        }
    });

    //���㣬��ת
    $('.pay').click(function(){
        location.href="order.html";
    });

});

