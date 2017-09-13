<?php
	header("content-type:application/json;charset=utf-8");
	require('init.php');
	//获取用户提交 参数
	$pageNo=$_REQUEST['pageNo'];
	if($pageNo===null){
		$pageNO=1;
	}
	//计算查询偏移量
	$offset=($pageNo-1)*8;
	//创建sql发送sql语句
	$sql="SELECT * FROM img_p1 limit $offset,8";
	//抓取多行记录
	$result=mysqli_query($conn,$sql);
	$rows=mysqli_fetch_all($result,MYSQLI_ASSOC);
	//转换json语句
	$str=json_encode($rows);
	echo $str;
?>