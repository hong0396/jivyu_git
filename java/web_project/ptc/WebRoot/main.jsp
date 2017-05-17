<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>交通卡数据服务平台</title>
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->
	<script src="js/jquery-1.8.2.min.js"></script> 

  </head>
   <style type="text/css">
   body { font-family:Verdana; font-size:20px; margin:0;}
   .banner{ width:1366px; height:207px;position:fixed; background-color:#3d4c91;   }
  .banner img{ 
width:784px; 
height:207px; 
z-index:16;
} 
.main{
	width:100%; 
   height:460px; 
   position:fixed;
  margin-top:207px;
   background-color:#e9e9e9;
}
   </style>
  <body>
  <div id="banner" class="banner" align="center">
  <img src="<%=basePath %>extension/BMap/images/logo.jpg" />
  </div>
    <div id="main" class="main" align="center">
    <div>
<table>
  <tr>
  <th>
 <!--<h1><a href="<%=request.getContextPath()%>/extension/BMap/example.html">出站OD</a></h1> -->
 <a href="<%=request.getContextPath()%>/extension/BMap/example2.html"><img src="<%=basePath %>extension/BMap/images/1inod.png" /></a>
 </th>
 <th>
  <!--  <h1><a href="<%=request.getContextPath()%>/extension/BMap/example2.html">进站OD</a></h1> -->  
  <a href="<%=request.getContextPath()%>/extension/BMap/example.html"><img src="<%=basePath %>extension/BMap/images/2outod.png" /></a>
</th>


<th>
 <!--  <h1><a href="<%=request.getContextPath()%>/extension/BMap/predictline.html">站点客流预测</a></h1>-->
 <a href="<%=request.getContextPath()%>/extension/BMap/predictline.html"><img src="<%=basePath %>extension/BMap/images/3predict.png" /></a>
</th>
<%-- <th>
<!-- <h1><a href="<%=request.getContextPath()%>/extension/BMap/statistics.html">地铁交通轨道周边人群统计</a></h1> -->
<a href="<%=request.getContextPath()%>/extension/BMap/statistics.html"><img src="<%=basePath %>extension/BMap/images/4statistics.png" /></a>
</th> --%>
  </tr>
  </table>
  </div>
    </div>
  

  </body>
</html>
