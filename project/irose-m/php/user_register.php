<?php
/**
*注册新用户
*请求参数：
  phone-电话号码
  upwd-密码
  uname-昵称
*输出结果：
* {"code":1,"uid":3,"phone":"","uname":""}
* 或
* {"code":500}
*/
@$phone = $_REQUEST['phone'] or die('phone required');
@$upwd = $_REQUEST['upwd'] or die('upwd required');
@$uname = $_REQUEST['uname'] or $uname ="";

require('init.php');

$sql = "INSERT INTO user (uid,phone,upwd,uname) VALUES(NULL,'$phone','$upwd','$uname')";
$result = mysqli_query($conn,$sql);

if($result){
  $output['code'] = 1;
  $output['uid'] = intval(mysqli_insert_id($conn));
  $output['phone']=$phone;
  $output['uname']=$uname;
}else {
  $output['code'] = 500;
}

echo json_encode($output);
