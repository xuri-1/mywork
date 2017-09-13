<?php
 //创建连接
  $conn=mysqli_connect("127.0.0.1","root","","kfl");

  //解决乱码
  mysqli_query($conn,"SET NAMES UTF8");
 ?>