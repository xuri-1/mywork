<?php
	header("content-type:text/html;charset=utf-8");
?>
<header id="header">
	<div class="container">
	     <!--1.1logo图-->
                     <a href="MSJ.html"><img class="lf" src="logo2.png" alt=""/></a>
                 <!--1.2select-->
                 <div class="select lf">
                     <div class="select-content">
                         <input type="text" placeholder="请输入菜谱/食材/菜单/作者 "/>
                         <button>搜索</button>
                     </div>
                 </div>
                 <!--1.3QQ-->
                 <div class="QQ">
                     <span><a href="QQ.html"><i></i>QQ登录</a></span>
                     <span><a href="WeiBo.html"><b></b>微博登录</a></span>
                     <span><a href="login.html">注册</a></span>
                     <span><a id="btn" href="#">登录</a></span>
                 </div>
         		 <div class="modal">
                     <div class="modal-dialog">
                         <div class="modal-content">
                             <h2>用户登录</h2>
                             <p class="alert">
                                 请在此处输入您的注册信息。
                             </p>
                             <form id="login-form">
                                 <input type="text" name="uname" placeholder="请输入登录用户名" >
                                 <div class="vali_info">10个字符以内的字母、数字或下划线的组合</div>
                                 <input type="password" name="upwd" placeholder="请输入登录密码" >
                                 <div class="vali_info">6位数字</div>
                                 <input type="button" value="提交登录信息" id="bt-login">
                             </form>
                         </div>
                     </div>
                 </div>
	</div>
</header>
<nav id="nav">
	 <div class="container">
	    <ul class="nav lf">
                    <li><a href="MSJ.html">首页</a></li>
                    <li class="nav-li"><a href="#">菜谱大全</a>
                    <div class="dropdown1">
                        <!--弹出框部分-->
                        <ul>
                            <h2>健康饮食</h2>
                            <li><a href="#">饮食小常识</a></li>
                            <li><a href="#">美容瘦身</a></li>
                            <li><a href="#">食品安全</a></li>
                            <li><a href="#">饮食小常识</a></li>
                            <li><a href="#">美容瘦身</a></li>
                            <li><a href="#">食品安全</a></li>
                            <li><a href="#">美容瘦身</a></li>
                            <li><a href="#">食品安全</a></li>
                        </ul>
                        <ul>
                            <h2>健康饮食</h2>
                            <li><a href="#">饮食小常识</a></li>
                            <li><a href="#">美容瘦身</a></li>
                            <li><a href="#">食品安全</a></li>
                            <li><a href="#">饮食小常识</a></li>
                            <li><a href="#">美容瘦身</a></li>
                            <li><a href="#">食品安全</a></li>
                            <li><a href="#">美容瘦身</a></li>
                            <li><a href="#">食品安全</a></li>
                        </ul>
                        <ul>
                            <h2>健康饮食</h2>
                            <li><a href="#">饮食小常识</a></li>
                            <li><a href="#">美容瘦身</a></li>
                            <li><a href="#">食品安全</a></li>
                            <li><a href="#">饮食小常识</a></li>
                            <li><a href="#">美容瘦身</a></li>
                            <li><a href="#">食品安全</a></li>
                            <li><a href="#">美容瘦身</a></li>
                            <li><a href="#">食品安全</a></li>
                        </ul>
                        <ul>
                            <h2>健康饮食</h2>
                            <li><a href="#">饮食小常识</a></li>
                            <li><a href="#">美容瘦身</a></li>
                            <li><a href="#">食品安全</a></li>
                            <li><a href="#">饮食小常识</a></li>
                            <li><a href="#">美容瘦身</a></li>
                            <li><a href="#">食品安全</a></li>
                            <li><a href="#">美容瘦身</a></li>
                            <li><a href="#">食品安全</a></li>
                        </ul>
                    </div>
                    </li>
                    <li><a href="#">饮食健康</a></li>
                    <li><a href="list.html">美食菜单</a></li>
                    <li><a href="#">家居馆</a></li>
                    <li><a href="meishidaren.html"><i id="hot"></i>美食达人</a></li>
                    <li><a href="#">讨论组</a></li>
                    <li><a href="#">手机版下载</a></li>
                </ul>
                <div class="clear"></div>
	 </div>
</nav>
<script src=js/jquery-1.11.3.js></script>
<script src=../MSJ.js></script>
