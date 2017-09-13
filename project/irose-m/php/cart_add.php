<?php
/**
*向购物车中添加商品
*请求参数：
  uid-用户ID，必需
  cid-课程ID，必需
*输出结果：
* {"code":1,"msg":"succ"}
* 或
* {"code":2,"msg":"succ"}//已存在
*/
@$uid = $_REQUEST['uid'] or die('uid required');
@$fId = $_REQUEST['fId'] or die('fId required');
@$count = $_REQUEST['count'] or $count = 1;

require('init.php');

//判断购物车详情表中是否已经存在该商品记录
$sql = "SELECT cartId FROM cart WHERE uid=$uid AND fId=$fId";
$result = mysqli_query($conn,$sql);
$row = mysqli_fetch_assoc($result);
if($row){   //之前曾经购买过该商品
  $sql = "update cart set count=count+$count where uid=$uid AND fId=$fId";
  mysqli_query($conn,$sql);
  $output['code'] = 2;
  $output['msg'] = 'succ';
}else {     //之前从未购买过该商品，则添加购买记录，购买数量为1
  $sql = "INSERT INTO cart VALUES(NULL,$uid, $fId,$count)";
  mysqli_query($conn,$sql);
  $output['code'] = 1;
  $output['msg'] = 'succ';
}

echo json_encode($output);