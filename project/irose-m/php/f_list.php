<?php
/**
*按发布时间逆序返回商品列表
*请求参数：
  pageNum -需显示的页号；默认为1
  pid   -选择的商品用途
  oid   -选择的商品对象
  fTypeId -选择的鲜花种类
  cid   -颜色
  priceMin  -最小价格
  priceMax  -最大价格
  number  -枝数
*输出结果：
  {
    totalRecord: 58,  //总条数
    pageSize: 10,     //每页显示的条数
    pageCount: 6,     //总页数
    pageNum: 1,       //请求的页码
    data: [{},{} ... {}]  //数据
  }
*/

require('init.php');

@$pageNum = $_REQUEST['pageNum'] or $pageNum = 1;
@$pid = $_REQUEST['pid'] or $pid = 0;
@$oid = $_REQUEST['oid'] or $oid = 0;
@$fTypeId = $_REQUEST['fTypeId'] or $fTypeId = 0;
@$cid = $_REQUEST['cid'] or $cid = 0;
@$priceMin = $_REQUEST['priceMin'] or $priceMin = 0;
@$priceMax = $_REQUEST['priceMax'] or $priceMax = 10000;
@$number = $_REQUEST['number'] or $number = 0;

$output['pageNum'] = intval($pageNum);
$output['pageSize'] = 4;

//拼接查询变量
$con="";
if($pid!==0){
  $con.=" AND pid=$pid";
}
if($oid!==0){
  $con.=" AND oid=$oid";
}
if($fTypeId!==0){
  $con.=" AND flower.fTypeId=$fTypeId";
}
if($cid!==0){
  $con.=" AND flower.cid=$cid";
}
$con.=" AND (salePrice BETWEEN $priceMin AND $priceMax)";

if($number!==0){
 if($number==00){
  $con.=" AND number NOT IN (9,11,12,18,19,21,24,29,33,50,66,99,101,108,365,999)";
 }else{
  $con.=" AND number=$number";
 }

}
//获取总记录数和总页数
$sql = "SELECT COUNT(*) FROM flower WHERE 1=1 $con";
$result = mysqli_query($conn,$sql);
$output['totalRecord'] = intval( mysqli_fetch_row($result)[0] );
$output['pageCount'] = ceil($output['totalRecord']/$output['pageSize']);

//获取指定页中的数据
$start = ($output['pageNum']-1)*$output['pageSize'];
$count = $output['pageSize'];
$sql = "SELECT flower.fId,flower.title,flower.number,flower.salePrice,colors.cname,fType.tTypeName FROM flower,colors,fType WHERE flower.fTypeId=fType.fTypeID AND flower.cid=colors.cid $con ORDER BY pubTime DESC LIMIT $start,$count";
$result = mysqli_query($conn,$sql);
$output['data'] = mysqli_fetch_all($result, MYSQLI_ASSOC);
//获取图片
foreach($output['data'] as $i=>$flowerProduct){
  $output['data'][$i]['pic'] = null;
  $fId=$output['data'][$i]['fId'];
  $sql = "SELECT * FROM fImg WHERE fId=$fId";
  $result = mysqli_query($conn,$sql);
  $row=mysqli_fetch_all($result, MYSQLI_ASSOC);
  //只需要一张图片
  if($row){
    $output['data'][$i]['pic']=$row[0]['fPic'];
  }

}

echo json_encode($output);

