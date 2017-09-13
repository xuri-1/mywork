<?php
//根据关键词进行搜索

 header("content-type:application/json;charset=utf-8");
 //获取参数
 @$kw=$_REQUEST["kw"];
 if($kw===null){
	 echo '[]';
	 return;
 }

  require("init.php");

  $sql="SELECT did,name,price,img_sm,material FROM kf_dish WHERE name LIKE '%$kw%' or material LIKE '%$kw%'";
  $result=mysqli_query($conn,$sql);
  $rows=mysqli_fetch_all($result,MYSQLI_ASSOC);
  echo json_encode($rows);
 ?>