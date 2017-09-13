<?php

require('init.php');

/*获取用途*/
$sql = "SELECT * FROM purpose";
$result = mysqli_query($conn,$sql);
$output['purpose']= mysqli_fetch_all($result, MYSQLI_ASSOC);
/*获取对象*/
$sql = "SELECT * FROM object";
$result = mysqli_query($conn,$sql);
$output['object']= mysqli_fetch_all($result, MYSQLI_ASSOC);
/*获取种类*/
$sql = "SELECT * FROM fType";
$result = mysqli_query($conn,$sql);
$output['fType']= mysqli_fetch_all($result, MYSQLI_ASSOC);
/*获取颜色*/
$sql = "SELECT * FROM colors";
$result = mysqli_query($conn,$sql);
$output['colors']= mysqli_fetch_all($result, MYSQLI_ASSOC);

echo json_encode($output);