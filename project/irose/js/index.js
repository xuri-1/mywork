/**
 * Created by cpc on 2017/7/20.
 */

//�ֲ�������������task

//���idΪslider��classΪshow��img
var $as=$("div.slider a");
// ����li������������ liList //[01234]
var $liList=$("div.slider ul li");
// 4:��ǰ��ʾ���         index[0 1 2 ]
var index=0;

function task(){
    index++;
    //����>2
    (index > 2) && (index = 0);
    // 5.3:Ϊ��ǰ�±�ͼƬ���class active
    // �ֵ�class activeɾ��
    $as.eq(index).addClass("show").siblings(".show").removeClass("show");
    //  5.4:Ϊ��ǰ�±�ҳ�����class active
    //   �ֵ�class activeɾ��
    $liList.eq(index).addClass("active").siblings(".active").removeClass("active");
}
//    ��Ӷ�ʱ��
var timer=setInterval(function(){task();},2000);
//  7:Ϊ����ҳ��󶨵���¼�
$liList.mouseenter(function(){
    //  7.1 ��ȡҳ�� 3
    index=parseInt($(this).html())-1;
    //  7.2 ��ȡ��ǰ�±�ͼƬ���class active�ֵ�class activeɾ��
    // �ֵ�class activeɾ��
    $as.eq(index).addClass("show").siblings(".show").removeClass("show");
    //  5.4:Ϊ��ǰ�±�ҳ�����class active
    //   �ֵ�class activeɾ��
    $liList.eq(index).addClass("active").siblings(".active").removeClass("active");
});

//Ϊimg�������������Ƴ��¼�:
$(".slider a").mouseover(function(){//������룬�����ʱ��
    clearTimeout(timer);
});
$(".slider a").mouseout(function(){//����Ƴ�����ӳ���ʱ��
    timer=setInterval(function(){task();},2000);
});


$(function(){
    //����2���Ż��Ƽ�---�л�
    $(".you-hui").on("click","li:not(:last-child)",function(e){
        e.preventDefault();//��ֹĬ����Ϊ
        $(this).addClass('active').siblings(".active").removeClass('active');
        var list=$(this).children().attr("href");
        $(list).addClass('active').siblings(".active").removeClass('active');
    });

    //����3���޸�a��hrefֵ
    $('div.tui-jian>ul li>a').attr('href','detail.html');
});
