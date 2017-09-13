<?php
	header("content-type:application/json;charset=utf-8");
	@$n=$_REQUEST['QQuname'];
	@$p=$_REQUEST['QQupwd'];
	require('init.php');
	$sql="SELECT uid FROM m_user WHERE uname='$n' AND upwd='$p'";
	$result=mysqli_query($conn,$sql);
     $rows=mysqli_fetch_assoc($result);
        	//转换json语句
    if($rows===null){
    	echo '{"code":400,"msg":"uname or upwd err"}';
     }else{
        session_start();
        $_SESSION['loginUname']=$n;
        $_SESSION['loginUid']=$row["uid"];
        echo '{"code":200,"msg":"login succ"}';
      }
?>