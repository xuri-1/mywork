/**
 * Created by bjwsl-001 on 2017/5/24.
 */
/**功能点1： 异步请求页头和页尾**/
$("#header").load("public/header.html");
$("#foot").load("public/footer.html");


//修改id为container下的第一个子div的zIndex为10
document.querySelector(
    "#container>div:first-child"
).style.zIndex=10;
//找到id为tab的ul下的a标签
var as=document.querySelectorAll(
    "ul#tab a"
);
//找到id为container下的所有div
var divs=document.querySelectorAll(
    "#container>div"
);
//遍历as中每个a，绑定单击事件处理函数
for(var i=0;i<as.length;i++){
    as[i].onclick=function(){
        //this->当前a
        //遍历divs中每个div
        for(var i=0;i<divs.length;i++){
            //清除当前div的zIndex
            divs[i].style.zIndex="";
        }
        //查找当前a的href中#的位置
        var i=this.href.indexOf("#");
        //找到当前a对应的div
        var div=document.getElementById(
            this.href.slice(i+1)
        );
        //修改div的zIndex为10
        div.style.zIndex=10;
    }
}
//单击隐藏内容
var p = document.getElementsByClassName();
p.onclick =function(){

}



























