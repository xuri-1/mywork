/**
 * Created by bjwsl-001 on 2017/5/19.
 */
/**功能点1： 异步请求页头和页尾**/
$("#header").load("public/header.html");
$("#foot").load("public/footer.html");

/*功能2：修改 a 的 href属性*/
$("#footer li>a").attr('href','47%20Soul%20-%20Greenbelt.html');
$("#recent a").attr('href','47%20Soul%20-%20Greenbelt.html');

//3.字体轮播
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

