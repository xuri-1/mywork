<?php
//根据id获取详情detail

 header("content-type:application/json;charset=utf-8");
 //接收参数
 @$id=$_REQUEST['id'];
  if($id===null){
	  echo '[]';
	  return;
  }
 require("init.php");

  $sql="SELECT did,name,price,img_lg,detail,material FROM kf_dish WHERE did=$id";
  $result=mysqli_query($conn,$sql);
  $output=[];//创建空数组
  $row=mysqli_fetch_assoc($result);
  $output[]=$row;//把查询到的记录保存在数组中
  echo json_encode($output);
?>