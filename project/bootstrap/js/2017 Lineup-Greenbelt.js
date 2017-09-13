/**
 * Created by bjwsl-001 on 2017/6/22.
 */
/*功能1：给 menu下的 li绑定点击事件*/
$("#menu>li>a").click(function(){
    $(this).css('border-bottom', '2px solid');
	$(this).parent().siblings().children().css('border-bottom', 'none');
});

$("#menu>li:first-child").click(function(){
    $("#list>li").css('display','block');
});


$("#menu>li.children").click(function(){
    $('#list>li.children').siblings().css('display','none');
    $('#list>li.children').css('display','block');
});
$("#menu>li.comedy").click(function(){
    $('#list>li.comedy').siblings().css('display','none');
    $('#list>li.comedy').css('display','block');
});
$("#menu>li.visual").click(function(){
    $('#list>li.visual').siblings().css('display','none');
    $('#list>li.visual').css('display','block');
});
$("#menu>li.film").click(function(){
    $('#list>li.film').siblings().css('display','none');
    $('#list>li.film').css('display','block');
});
$("#menu>li.music").click(function(){
    $('#list>li.music').siblings().css('display','none');
    $('#list>li.music').css('display','block');
});

$("#menu>li.ideas").click(function(){
    $('#list>li.ideas').siblings().css('display','none');
    $('#list>li.ideas').css('display','block');
});

$("#menu>li.literature").click(function(){
    $('#list>li.literature').siblings().css('display','none');
    $('#list>li.literature').css('display','block');
});

$("#menu>li.arts").click(function(){
    $('#list>li.arts').siblings().css('display','none');
    $('#list>li.arts').css('display','block');
});

$("#menu>li.youth").click(function(){
    $('#list>li.youth').siblings().css('display','none');
    $('#list>li.youth').css('display','block');
});
$("#menu>li.worship").click(function(){
    $('#list>li.worship').siblings().css('display','none');
    $('#list>li.worship').css('display','block');
});
$("#menu>li.workshops").click(function(){
    $('#list>li.workshops').siblings().css('display','none');
    $('#list>li.workshops').css('display','block');
});


/*功能2：给 list下的 li下的 a 添加背景图*/
    var list=document.getElementById("list");
    var as=list.getElementsByTagName("a");
    console.log(as);
    for(var i=1;i<=as.length;i++){
        //console.log( items[i]);
       as[i-1].style.backgroundImage='url(image/img/'+i+'.jpg)';
    }
/*功能3：修改 a 的 href属性*/
$("#list>li>a").attr('href','47%20Soul%20-%20Greenbelt.html');