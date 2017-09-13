/*功能1：修改 a 的 href属性*/
$("#menu-main a").attr('href','47%20Soul%20-%20Greenbelt.html');


/*功能2:标题--h5*/
var ctx=c1.getContext("2d");
var txt="ACCOMMODATION";
ctx.font="50px SimHei";
ctx.textBaseline="top";
var tw=ctx.measureText(txt).width;
var x=0;
var y=0;
ctx.strokeStyle="red";
setInterval(function(){
    ctx.clearRect(0,0,500,400);
    ctx.strokeText(txt,x,0);
    x+=35;
    if(x>=500){
        x=0;
    }
},1000);