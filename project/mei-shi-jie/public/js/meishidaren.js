/**
 * Created by cpc on 2017/7/29.
 */
/**
 * Created by bjwsl-001 on 2017/5/14.
 */
$(function() {
    main(function () {
        navText("��ʳ����");
    });
});

//�ֲ�������������task

//���idΪslider��classΪshow��img
var $as=$("#main-content div.slider a");
// ����li������������ liList //[01234]
var $liList=$("#main-content div.slider ul li");
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
$(".slider img").mouseover(function(){//������룬�����ʱ��
    clearTimeout(timer);
});
$(".slider img").mouseout(function(){//����Ƴ�����ӳ���ʱ��
    timer=setInterval(function(){task();},2000);
});




//    ���ɫ
//        ��ʳ����
function rn(max, min) {
    return Math.floor(Math.random() * (max - min) + min);
}
function rg(max, min) {
    var r = rn(max, min);
    var g = rn(max, min);
    var b = rn(max, min);
    return `rgb(${r},${g},${b})`;
}
var li = $('#main-content div.run-over ul li ');
var lii = $('#main-content div.run-over ul li i');
console.log(lii,li);
for (var i = 0; i < lii.length; i++) {
    lii[i].style.color = rg(0, 255);
}
li.mouseenter(function () {
    var font = rg(0, 255);
    var i = $(this).css('background', font);
    $(this).children('i').css('background', '#fff').css('color', font);
});
li.mouseleave(function () {
    $(this).css('background', '#fff')
});