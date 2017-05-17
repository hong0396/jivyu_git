
var option;
var myChart; 
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
       
    	 myChart = ec.init(document.getElementById('main')); 
        
    	 option = {
    			    title : {
    			        text: '15分钟客流预测',
    			        subtext: '',
    			        x:'center'
    			    },
    			    tooltip : {
    			        trigger: 'axis'
    			    },
    			    legend: {
    			        data:['实际流量','预测流量'],
    			        orient : 'vertical',
    			        x:'left'
    			    },
    			    toolbox: {
    			        show : true,
    			        
    			        y:'middle',
    			        feature : {
    			            mark : {show: true},
    			            dataView : {show: true, readOnly: false},
    			            magicType : {show: true, type: ['line', 'bar']},
    			            restore : {show: true},
    			            saveAsImage : {show: true}
    			        }
    			    },
    			    calculable : true,
    			    xAxis : [
    			        {
    			            type : 'category',
    			            boundaryGap : false,    			          
    			        //    data : ['周一','周二','周三','周四','周五','周六','周日','周一','周二','周三','周四','周五','周六','周日','周一','周二','周三','周四','周五','周六','周日','周一','周二','周三','周四','周五','周六','周日','周一','周二','周三','周四','周五','周六','周日','周一','周二','周三','周四','周五','周六','周日','周一','周二','周三','周四','周五','周六','周日','周一','周二','周三','周四','周五','周六','周日']//时间
    			       // 	data:['0000', '0445', '0500', '0515', '0530', '0545', '0600', '0615', '0630', '0645', '0700', '0715', '0730', '0745', '0800', '0815', '0830', '0845', '0900', '0915', '0930', '0945', '1000', '1015', '1030', '1045', '1100', '1115', '1130', '1145', '1200', '1215', '1230', '1245', '1300', '1315', '1330', '1345', '1400', '1415', '1430', '1445', '1500', '1515', '1530', '1545', '1600', '1615', '1630', '1645', '1700', '1715', '1730', '1745', '1800', '1815', '1830', '1845', '1900', '1915', '1930', '1945', '2000', '2015', '2030', '2045', '2100', '2115', '2130', '2145', '2200', '2215', '2230', '2245', '2300', '2315', '2330']
    			       
    			        data:[]
    			        
    			        }
    			    ],
    			    yAxis : [
    			        {
    			            type : 'value',
    			            axisLabel : {
    			            	
    			                formatter: '{value} 人'
    			            }
    			        }
    			    ],
    			    series : [
    			        {
    			            name:'实际流量',
    			            type:'line',
    			            data:[],//实际值
    			         
    			            markLine : {
    			                data : [
    			                   
    			                ]
    			            }
    			        },
    			        {
    			            name:'预测流量',
    			            type:'line',
    			            data:[],//预测值    			         
    			            markLine : {
    			                data : [
    			                   
    			                ]
    			            }
    			        }
    			    ]
    			};    			        
        myChart.setOption(option);       	
    }	
);
})();