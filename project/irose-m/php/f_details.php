<?php
/**
*根据商品ID返回商品详情
*请求参数：
  fId-商品ID，必需
*输出结果：
  {
    "fId": 1,
    "title":"xxx",
    ...
  }
*/
@$fId = $_REQUEST['fId'] or die('fId required');

require('init.php');

$sql = "SELECT * FROM flower,fType,colors WHERE fId=$fId";
$result = mysqli_query($conn,$sql);
$row = mysqli_fetch_assoc($result);
if($row){
  $output = $row;
  //获取图片
  $sql = "SELECT * FROM fImg WHERE fId=$fId";
  $result = mysqli_query($conn,$sql);
  $output['picList']=[];
  $picList=mysqli_fetch_all($result, MYSQLI_ASSOC);
  foreach($picList as $i=>$fImg){
      $output['picList'][]=$picList[$i]['fPic'];
    }
}

echo json_encode($output);