 //经纬度和墨卡托互相转换 
  var lonlat=[114.514864,38.04232];
  var mercator=[12747736.346966475,4585405.935084799];

  //经纬度转墨卡托
  function lonlat2mercator(lonlat){
	var  mercator=[0,0];
	var x = lonlat[0]*20037508.34/180;
	var y = Math.log(Math.tan((90+lonlat[1])*Math.PI/360))/(Math.PI/180);
	y = y *20037508.34/180;
	mercator[0] = x;
	mercator[1] = y;
	return mercator;
   }

 //墨卡托转经纬度
 function mercator2lonlat(mercator){
	var lonlat={x:0,y:0};
	var x = mercator.x/20037508.34*180;
	var y = mercator.y/20037508.34*180;
	y= 180/Math.PI*(2*Math.atan(Math.exp(y*Math.PI/180))-Math.PI/2);
	lonlat.x = x;
	lonlat.y = y;
	return lonlat;
 }