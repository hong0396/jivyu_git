
var option2;


var myChart2; 

(function () {
	 require.config({
         paths: {
             echarts: '../../extension/js'
           
         }
     });
     
     
     // 使用
     require(
         [
             'echarts',
             'echarts/chart/bar',
         
             'echarts/chart/line'
         ],
    function (ec) {
       
    	 myChart2 = ec.init(document.getElementById('main2')); 
    	 option2 = {
    			 backgroundColor: 'rgba(10,0,10,0.45)',
    			    tooltip : {
    			        trigger: 'axis',
    			        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
    			            type : 'line'        // 默认为直线，可选为：'line' | 'shadow'
    			        }
    			    },
    			    legend: {
    			        data:['流量'/*'直接访问','邮件营销'*/]
    			    },
    			    
    			    calculable : true,
    			    xAxis : [
    			        {
    			            type : 'category',    			            
    			           
    			            axisLabel : {
    			                show:true,
    			                interval: 'auto',    // {number}
    			                rotate: 45,
    			                margin: 8,
    			                formatter: '{value}',
    			                textStyle: {
    			                    color: '#fff',
    			                    fontFamily: 'sans-serif',
    			                    fontSize: 10,
    			                    fontStyle: 'italic',
    			                    fontWeight: 'bold'
    			                }
    			            },
    			     
    			            data : [/*'周一','周二','周三','周四','周五','周六','周日'*/]
    			        }
    			    ],
    			    yAxis : [
    			        {
    			        	axisLabel:{
    			            	textStyle:{color:'#fff'}
    			            },
    			        
    			            type : 'value'
    			        }
    			    ],
    			    series : [
    			        {
    			            name:'流量',
    			            type:'bar',
    			            
    			            data:[/*0,0,0,0,0,0,0*/]
    			        }/*,
    			        {
    			            name:'邮件营销',
    			            type:'bar',
    			            stack: '广告',
    			            data:[0,0,0,0,0,0,0]
    			        }*/
    			    ]
    			};
    /*	 option2= {
    			 backgroundColor: 'rgba(0,0,0,0.45)',
    			    title: {
    			        x: 'center',
    			        text: 'ECharts例子个数统计'
    			       
    			    },
    			    tooltip: {
    			        trigger: 'item'
    			    },
    			    toolbox: {
    			        show: true,
    			        feature: {
    			            dataView: {show: true, readOnly: false},
    			            restore: {show: true},
    			            saveAsImage: {show: true}
    			        }
    			    },
    			    calculable: true,
    			    grid: {
    			        borderWidth: 0,
    			        y: 80,
    			        y2: 60
    			    },
    			    xAxis: [
    			        {
    			            type: 'category',
    			            show: false,
    			            data: ['Line', 'Bar', 'Scatter', 'K', 'Pie', 'Radar', 'Chord', 'Force', 'Map', 'Gauge', 'Funnel']
    			        }
    			    ],
    			    yAxis: [
    			        {
    			            type: 'value',
    			            show: false
    			        }
    			    ],
    			    series: [
    			        {
    			            name: 'ECharts例子个数统计',
    			            type: 'bar',
    			            itemStyle: {
    			                normal: {
    			                    color: function(params) {
    			                        // build a color map as your need.
    			                        var colorList = [
    			                          '#C1232B','#B5C334','#FCCE10','#E87C25','#27727B',
    			                           '#FE8463','#9BCA63','#FAD860','#F3A43B','#60C0DD',
    			                           '#D7504B','#C6E579','#F4E001','#F0805A','#26C0C0'
    			                        ];
    			                        return colorList[params.dataIndex]
    			                    },
    			                    label: {
    			                        show: true,
    			                        position: 'top',
    			                        formatter: '{b}\n{c}'
    			                    }
    			                }
    			            },
    			            data: [12,21,10,4,12,5,6,5,25,23,7],
    			            markPoint: {
    			                tooltip: {
    			                    trigger: 'item',
    			                    backgroundColor: 'rgba(0,0,0,0)',
    			                    formatter: function(params){
    			                        return '<img src="' 
    			                                + params.data.symbol.replace('image://', '')
    			                                + '"/>';
    			                    }
    			                },
    			                data: [
    			                    {xAxis:0, y: 350, name:'Line', symbolSize:20, symbol: 'image://../asset/ico/折线图.png'},
    			                    {xAxis:1, y: 350, name:'Bar', symbolSize:20, symbol: 'image://../asset/ico/柱状图.png'},
    			                    {xAxis:2, y: 350, name:'Scatter', symbolSize:20, symbol: 'image://../asset/ico/散点图.png'},
    			                    {xAxis:3, y: 350, name:'K', symbolSize:20, symbol: 'image://../asset/ico/K线图.png'},
    			                    {xAxis:4, y: 350, name:'Pie', symbolSize:20, symbol: 'image://../asset/ico/饼状图.png'},
    			                    {xAxis:5, y: 350, name:'Radar', symbolSize:20, symbol: 'image://../asset/ico/雷达图.png'},
    			                    {xAxis:6, y: 350, name:'Chord', symbolSize:20, symbol: 'image://../asset/ico/和弦图.png'},
    			                    {xAxis:7, y: 350, name:'Force', symbolSize:20, symbol: 'image://../asset/ico/力导向图.png'},
    			                    {xAxis:8, y: 350, name:'Map', symbolSize:20, symbol: 'image://../asset/ico/地图.png'},
    			                    {xAxis:9, y: 350, name:'Gauge', symbolSize:20, symbol: 'image://../asset/ico/仪表盘.png'},
    			                    {xAxis:10, y: 350, name:'Funnel', symbolSize:20, symbol: 'image://../asset/ico/漏斗图.png'},
    			                ]
    			            }
    			        }
    			    ]
    			};*/
    	             
    	 myChart2.hideLoading();
    	 myChart2.setOption(option2);
    	 myChart2.clear();
       	
    }								
							
		
							
	
);
})();