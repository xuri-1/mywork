<?php
/**
*查询指定用户的购物车内容
*请求参数：
  uid-用户ID，必需
*输出结果：
  {
    "uid": 1,
    "data":[
      {"cartId":"1","fId":1,"title":"xxx","pic":"xxx","price":1599.00},
      {"cartId":"2","fId":3,"title":"xxx","pic":"xxx","price":1599.00},
      ...
      {"cartId":"5","fId":6,"title":"xxx","pic":"xxx","price":1599.00}
    ]
  }
*/
@$uid = $_REQUEST['uid'] or die('uid required');

require('init.php');
$output['uid'] = $uid;

$sql = "SELECT cart.cartId,cart.fId,cart.count,flower.title,flower.salePrice FROM flower,cart WHERE cart.fId=flower.fId AND cart.uid=$uid";;
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





