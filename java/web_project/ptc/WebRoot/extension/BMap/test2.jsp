<%@ page language="java" import="java.util.*" pageEncoding="utf-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="">
    
    <title>My JSP 'test2.jsp' starting page</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->
	<script src="../../js/convert.js"></script> 
  </head>
  
 		  
  <body>
    <form> 	
    
 	 <c:url value="../../index.jsp" var="myURL">
     <c:param name="trackingId" value="1234"/>
     <c:param name="reportType" value="summary"/>
     </c:url>
     
     <c:url value="../../extension/BMap/example_b.html" var="url"/>
     <c:import url="${url}"/>
     
 	</form> 	
  </body>
</html>
