var option;
var myChart; 
var map;
var heatData = [];
(function () {
	 require.config({
         paths: {
             echarts: '../../extension/js'
         },
     packages: [
         {
             name: 'BMap',
             location: '../../extension/js',
            main: 'main'
         }
     ]
     });
     // 使用
     require(
         [
             'echarts',
            'BMap',
             'echarts/chart/heatmap',
            'echarts/chart/map'//test
         ],
    function (echarts,BMapExtension) {
       
        	 
        	 var domMain=document.getElementById('main');
        	 var BMapExt = new BMapExtension(domMain, BMap, require('echarts'), require('zrender'));
        	 var map = BMapExt.getMap();
        	 var container = BMapExt.getEchartsContainer();
        	 var startPoint = { 			
                     x: 121.480237,
                     y: 31.236058
                 };  
        	 var point = new BMap.Point(startPoint.x, startPoint.y);
        	 map.centerAndZoom(point, 5);
        	 map.enableScrollWheelZoom(true);
        	 
    	 myChart = echarts.init(domMain);
    	
    	 for (var i = 0; i < 200; ++i) {
    	     heatData.push([
    	         121 + Math.random() *0.2,
    	         31 + Math.random() * 0.6,
    	         Math.random()
    	     ]);
    	 }
    	 for (var j = 0; j < 10; ++j) {
    	     var x = 121 + Math.random() * 0.6;
    	     var y = 31 + Math.random() * 0.2;
    	     var cnt = 30 * Math.random();
    	     for (var i = 0; i < cnt; ++i) {
    	         heatData.push([
    	             x + Math.random() * 2,
    	             y + Math.random() * 2,
    	             Math.random()
    	         ]);
    	     }
    	 }
         // 初始化地图

    
    	 // BMapExt = new BMapExtension($('#main')[0], BMap, echarts,{  enableMapClick: false   });
       //  map = BMapExt.getMap();
         /*  container = BMapExt.getEchartsContainer();
         var startPoint = { 			
             x: 121.480237,
             y: 31.236058
         };       
         var point = new BMap.Point(startPoint.x, startPoint.y);
         map.centerAndZoom(point, 8);
         map.enableScrollWheelZoom(true);*///test
    	 
    	 
    	 
    	 
    	 
    	 map.setMapStyle({
             styleJson: [
                   {
                        "featureType": "water",
                        "elementType": "all",
                        "stylers": {
                             "color": "#044161"
                        }
                   },
                   {
                        "featureType": "land",
                        "elementType": "all",
                        "stylers": {
                             "color": "#004981"
                        }
                   },
                   {
                        "featureType": "boundary",
                        "elementType": "geometry",
                        "stylers": {
                             "color": "#064f85"
                        }
                   },
                   {
                        "featureType": "railway",
                        "elementType": "all",
                        "stylers": {
                             "visibility": "off"
                        }
                   },
                   {
                        "featureType": "highway",
                        "elementType": "geometry",
                        "stylers": {
                             "color": "#004981"
                        }
                   },
                   {
                        "featureType": "highway",
                        "elementType": "geometry.fill",
                        "stylers": {
                             "color": "#005b96",
                             "lightness": 1
                        }
                   },
                   {
                        "featureType": "highway",
                        "elementType": "labels",
                        "stylers": {
                             "visibility": "off"
                        }
                   },
                   {
                        "featureType": "arterial",
                        "elementType": "geometry",
                        "stylers": {
                             "color": "#004981"
                        }
                   },
                   {
                        "featureType": "arterial",
                        "elementType": "geometry.fill",
                        "stylers": {
                             "color": "#00508b"
                        }
                   },
                   {
                        "featureType": "poi",
                        "elementType": "all",
                        "stylers": {
                             "visibility": "off"
                        }
                   },
                   {
                        "featureType": "green",
                        "elementType": "all",
                        "stylers": {
                             "color": "#056197",
                             "visibility": "off"
                        }
                   },
                   {
                        "featureType": "subway",
                        "elementType": "all",
                        "stylers": {
                             "visibility": "on"
                        }
                   },
                   {
                        "featureType": "manmade",
                        "elementType": "all",
                        "stylers": {
                             "visibility": "off"
                        }
                   },
                   {
                        "featureType": "local",
                        "elementType": "all",
                        "stylers": {
                             "visibility": "off"
                        }
                   },
                   {
                        "featureType": "arterial",
                        "elementType": "labels",
                        "stylers": {
                             "visibility": "off"
                        }
                   },
                   {
                        "featureType": "boundary",
                        "elementType": "geometry.fill",
                        "stylers": {
                             "color": "#029fd4"
                        }
                   },
                   {
                        "featureType": "building",
                        "elementType": "all",
                        "stylers": {
                             "color": "#1a5787"
                        }
                   },
                   {
                        "featureType": "label",
                        "elementType": "all",
                        "stylers": {
                             "visibility": "off"
                        }
                   }
             ]
         });
    	 
    	 option = {
    	   // backgroundColor: '#1b1b1b',
    	     title : {
    	         text: '热力图结合地图',
    	         x:'center',
    	         textStyle: {
    	             color: 'white'
    	         }
    	     },
    	     tooltip : {
    	         trigger: 'item',
    	         formatter: '{b}'
    	     },
    	     toolbox: {
    	         show : true,
    	         orient : 'vertical',
    	         x: 'right',
    	         y: 'center',
    	         feature : {
    	             mark : {show: true},
    	             dataView : {show: true, readOnly: false},
    	             restore : {show: true},
    	             saveAsImage : {show: true}
    	         }
    	     },
    	     series : [
    	               {
    	                   name: '上海',
    	                   type: 'map',
    	                   mapType: 'china',
    	                   roam: true,
    	                   hoverable: false,
    	                   data:[],
    	                   heatmap: {
    	                       minAlpha: 0.1,
    	                       data: heatData
    	                   },
    	                   itemStyle: {
    	                       normal: {
    	                           borderColor:'rgba(100,149,237,0.6)',
    	                           borderWidth:0.5,
    	                           areaStyle: {
    	                               color: '#1b1b1b'
    	                           }
    	                       }
    	                   }
    	               }
    	           ]
    	 };
    		
        myChart.setOption(option);       	
    }
);
})();