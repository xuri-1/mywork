<?php
/**
*�û���¼��֤
*���������
  phone-�ֻ���
  upwd-����
*��������
* {"code":1,"uid":1,"phone":"13012345678","uname":""}
* ��
* {"code":400}
*/
@$phone = $_REQUEST['phone'] or die('phone required');
@$upwd = $_REQUEST['upwd'] or die('upwd required');

require('init.php');

$sql = "SELECT uid,phone,uname FROM user WHERE phone='$phone' AND upwd='$upwd'";
$result = mysqli_query($conn,$sql);
$row = mysqli_fetch_assoc($result);

if($row){
  $output['code'] = 1;
  $output['uid'] = intval($row['uid']);
  $output['phone'] = $row['phone'];
  $output['uname'] = $row['uname'];
}else {
  $output['code'] = 400;
}
echo json_encode($output);
