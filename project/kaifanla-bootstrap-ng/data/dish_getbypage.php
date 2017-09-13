<?php
  //分页查询

  //修改响应头
  header("content-type:application/json;charset=utf-8");
  require("init.php");

 //获取用户提交的参数:分页页码
   @$start=$_REQUEST['start'];
    if($start===null){$start=0;}

  $sql="SELECT did,name,price,img_sm,material FROM kf_dish WHRER LIMIT $start,5";//limit 0,5限制查寻5条记录
  $result=mysqli_query($conn,$sql);
  $rows=mysqli_fetch_all($result,MYSQLI_ASSOC);
 
 //转json字符串
  echo json_encode($rows);
?>