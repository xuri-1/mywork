$(function(){

    var pageNum=1;  //当前页码
    var pageCount=1;//总页数
    var pid=0;  //商品用途
    var oid=0;  //赠送对象
    var fTypeId=0;  //种类
    var cid=0;      //颜色
    var priceMin=0; //最小价格
    var priceMax=10000; //最大价格
    var number=0;   //枝数

    fList();//显示列表

    //显示列表
    function fList(){
        var json={
            pageNum:pageNum,
            pid:pid,
            oid:oid,
            fTypeId:fTypeId,
            cid:cid,
            priceMin:priceMin,
            priceMax:priceMax,
            number:number
        };
        $.ajax({
            type:"post",
            url:"php/f_list.php",
            data:json,
            success:function(d){
                //console.log(d);
                var data= d.data;
                var htmlStr="";
                //生成列表
                for(var i=0;i<data.length;i++){
                    htmlStr+=`<li><a href="details.html?fId=${data[i].fId}" class="link">
                            <dl><dt><img src="${data[i].pic}" alt=""/></dt>
                            <dd><p>${data[i].title} 编号:${data[i].fId}</p>
                            <span>${data[i].number}枝${data[i].cname}${data[i].tTypeName}</span><br/>
                            <b>￥${data[i].salePrice}</b></dd></dl></a></li>`;
                }
                $(".list>ul").html(htmlStr);
                $('.type_num').html(`共有商品<span>${d.totalRecord}</span>件`);

                //页码
                if(d.totalRecord==0){
                    $(".pages").empty();
                }else{
                    var pageHtml='<a href="prev">上一页</a>';
                    pageCount=d.pageCount;
                    for(var i=1;i<pageCount+1;i++){
                        pageHtml+='<a href="'+i+'">'+i+'</a>';
                    }
                    pageHtml+='<a href="next">下一页</a>';
                    $(".pages").html(pageHtml);
                    if(pageNum==1){
                        $(".pages a:first").addClass("disabled");
                    }
                    if(pageNum==pageCount){
                        $(".pages a:last").addClass("disabled");
                    }
                    $(".pages a").eq(pageNum).addClass("cur");
                }
            }
        });
    }

    //页码点击事件
    $(".pages").on('click','a',function(e){
        e.preventDefault();//清除a标记的默认行为
        var index=$(this).index();
        //console.log(index);
        if(index==0){//当点击的是“上一页”的时候
            if(pageNum==1) return;
            pageNum--;
        }else if(index==pageCount+1){//当点击的是下一页”的时候
            if(pageNum==pageCount) return;
            pageNum++;
        }else{
            pageNum=index;
        }
        fList();
    });

    //加载分类
    $.ajax({
        type:"post",
        url:"php/f_class.php",
        success:function(d){
            //console.log(d);
            //用途
            var purposeStr='';
            for(var i=0;i<d.purpose.length;i++){
                purposeStr+=`<a href="#" data-purpose="${d.purpose[i].pid}">${d.purpose[i].pname}</a>`;
            }
            $('#purpose').append(purposeStr);
            //对象
            var objectStr='';
            for(var i=0;i<d.object.length;i++){
                objectStr+=`<a href="#" data-object="${d.object[i].oid}">${d.object[i].oname}</a>`;
            }
            $('#object').append(objectStr);
            //种类
            var fTypeStr='';
            for(var i=0;i<d.fType.length;i++){
                fTypeStr+=`<a href="#" data-fType="${d.fType[i].fTypeId}">${d.fType[i].tTypeName}</a>`;
            }
            $('#fType').append(fTypeStr);
            //颜色
            var colorsStr='';
            for(var i=0;i<d.colors.length;i++){
                colorsStr+=`<a href="#" data-colors="${d.colors[i].cid}">${d.colors[i].cname}色</a>`;
            }
            $('#colors').append(colorsStr);
        }
    });

    //为用途绑定事件
    $("#purpose").on('click','a',function(e){
        e.preventDefault();
        $("#purpose a").removeClass();
        $(this).addClass('current');
        pid=$(this).attr("data-purpose");
        pageNum=1;
        fList();//更新列表
    });

    //为对象绑定事件
    $("#object").on('click','a',function(e){
        e.preventDefault();
        $("#object a").removeClass();
        $(this).addClass('current');
        oid=$(this).attr("data-object");
        pageNum=1;
        fList();//更新列表
    });

    //为种类绑定事件
    $("#fType").on('click','a',function(e){
        e.preventDefault();
        $("#fType a").removeClass();
        $(this).addClass('current');
        fTypeId=$(this).attr("data-fType");
        pageNum=1;
        fList();//更新列表
    });

    //为颜色绑定事件
    $("#colors").on('click','a',function(e){
        e.preventDefault();
        $("#colors a").removeClass();
        $(this).addClass('current');
        cid=$(this).attr("data-colors");
        pageNum=1;
        fList();//更新列表
    });

    //为价格绑定事件
    $("#price").on('click','a',function(e){
        console.log(1111);
        e.preventDefault();
        $("#price a").removeClass();
        $(this).addClass('current');
        priceMin=$(this).attr("data-min");
        priceMax=$(this).attr("data-max");
        pageNum=1;
        fList();//更新列表
    });

    //为枝数绑定事件
    $("#number").on('click','a',function(e){
        e.preventDefault();
        $("#number a").removeClass();
        $(this).addClass('current');
        number=$(this).attr("data-number");
        pageNum=1;
        fList();//更新列表
    });


});