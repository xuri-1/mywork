/**
 * Created by bjwsl-001 on 2017/5/19.
 */
/**���ܵ�1�� �첽����ҳͷ��ҳβ**/
$("#header").load("public/header.html");
$("#foot").load("public/footer.html");

/*����2���޸� a �� href����*/
$("#footer li>a").attr('href','47%20Soul%20-%20Greenbelt.html');
$("#recent a").attr('href','47%20Soul%20-%20Greenbelt.html');

//3.�����ֲ�
function lunbo(id,height){
    var ul=$(id);
    var liFist=ul.find('li:first');
    $(id).animate({top:height}).animate({"top":0},0,function(){
        var clone=liFist.clone();
        $(id).append(clone);
        liFist.remove();
    });
}
setInterval("lunbo('#political ul','-50px')",3000);

