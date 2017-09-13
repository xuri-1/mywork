<?php
	header("content-type:application/json;charset=utf-8");
	require('init.php');
	$sql="SELECT*FROM img_p1";
	$result=mysqli_query($conn,$sql);
	$rows=mysqli_fetch_all($result,MYSQLI_ASSOC);
	$str=json_encode($rows);
	if($rows!==null){
		echo $str;
	}
?>