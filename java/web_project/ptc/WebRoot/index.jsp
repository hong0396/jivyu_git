<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>地铁进出站OD图</title>
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
  
  <body>
    
  
<div>
<table>
  <tr>
  <th>
 <h1><a href="<%=request.getContextPath()%>/extension/BMap/example.html">出站OD</a></h1> 
  <h1><a href="<%=request.getContextPath()%>/extension/BMap/example2.html">进站OD</a></h1>
  <h1><a href="<%=request.getContextPath()%>/extension/BMap/example3.html">正常出站OD</a></h1> 
  <h1><a href="<%=request.getContextPath()%>/extension/BMap/example4.html">正常进站OD</a></h1>
</th>
<th>
<h1><a href="<%=request.getContextPath()%>/extension/BMap/example_b.html">出站OD(按时段查询)</a></h1>
<h1><a href="<%=request.getContextPath()%>/extension/BMap/example2_b.html">进站OD(按时段查询)</a></h1>
</th>
<th>
<h1><a href="<%=request.getContextPath()%>/extension/BMap/subway.html">轨道交通小时段换乘比例</a></h1>
<h1><a href="<%=request.getContextPath()%>/extension/BMap/subwaybyday.html">轨道交通日均换乘比例</a></h1>
<h1><a href="<%=request.getContextPath()%>/extension/BMap/subwaybymonth.html">轨道交通月均换乘比例</a></h1>
</th>

<th>
<h1><a href="<%=request.getContextPath()%>/extension/BMap/predictline.html">站点客流预测</a></h1>
<h1><a href="<%=request.getContextPath()%>/extension/BMap/statistics.html">地铁交通轨道周边人群统计</a></h1>
</th>
  </tr>
  </table>
  </div>
 
  </body>
</html>
