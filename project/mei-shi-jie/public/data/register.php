<?php
	header("content-type:application/json;charset=utf-8");
	require("init.php");
	@$u=$_REQUEST['uname']or die('{"code":-2,"msg":"用户名是必须的"}');
	@$p=$_REQUEST['upwd']or die('{"code":-3,"msg":"用户密码是必须的"}');
	$sql="INSERT INTO m_user VALUES(NULL,'$u',$p)";
	$result=mysqli_query($conn,$sql);
	if($result===true){
		echo '{"code":1,"msg":"注册成功"}';
	}else{
		echo '{"code":-1,"msg":"注册失败"}';
	}
?>