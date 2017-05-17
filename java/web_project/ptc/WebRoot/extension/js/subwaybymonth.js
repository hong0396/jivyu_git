var    option;
var myChart;
var    option2;
var myChart2; 
(function () {
// 路径配置
        require.config({
            paths: {
                echarts: '../../extension/js'
            }
        });
        
        
        // 使用
        require(
            [
                'echarts',
                'echarts/chart/pie', // 使用柱状图就加载bar模块，按需加载
                'echarts/chart/funnel'
            ],
          function Pie(ce){
            	 pie2(ce);
             	 pie1(ce);
             
            	}
        );
 })();    

function pie1 (ec) {
    // 基于准备好的dom，初始化echarts图表
   myChart = ec.init(document.getElementById('main')); 
   option = {
		    title : {
		        text: '轨道交通换入换出客流',
		        subtext: '进站流量及进站换乘比',
		        x:'center'
		    },
		    tooltip : {
		        trigger: 'item',
		        formatter: "{a} <br/>{b} : {c} ({d}%)"
		    },
		    legend: {
		        orient : 'vertical',
		        x : 'left',
		        data:[]
		    },
		    toolbox: {
		    	
		        show : true,
		        orient : 'vertical',
		        feature : {
		            mark : {show: true},
		            dataView : {show: true, readOnly: false},
		            magicType : {
		                show: true, 
		                type: ['pie', 'funnel'],
		                option: {
		                    funnel: {
		                        x: '15%',
		                        width: '75%',
		                        funnelAlign: 'left',
		                        max: 8000
		                    }
		                }
		            },
		            restore : {show: true},
		            saveAsImage : {show: true}
		        }
		    },
		    calculable : true,
		    series : [
		        {
		            name:'进站客流量及进站换乘比例',
		            type:'pie',
		            radius : '75%',
		            center: ['50%', '54%'],
		            data:[]
		        }
		    ]
		}; 
    // 为echarts对象加载数据 
    myChart.setOption(option); 
}

function pie2 (ec) {
    // 基于准备好的dom，初始化echarts图表
   myChart2 = ec.init(document.getElementById('main2')); 
   option2 = {
		    title : {
		        text: '轨道交通换入换出客流',
		        subtext: '出站流量及出站换乘比',
		        x:'center'
		    },
		    tooltip : {
		        trigger: 'item',
		        formatter: "{a} <br/>{b} : {c} ({d}%)"
		    },
		    legend: {
		        orient : 'vertical',
		        x : 'left',
		        data:[]
		    },
		    toolbox: {
		    	
		        show : true,
		        orient : 'vertical',
		        feature : {
		            mark : {show: true},
		            dataView : {show: true, readOnly: false},
		            magicType : {
		                show: true, 
		                type: ['pie', 'funnel'],
		                option: {
		                    funnel: {
		                        x: '15%',
		                        width: '75%',
		                        funnelAlign: 'left',
		                        max: 98000
		                    }
		                }
		            },
		            restore : {show: true},
		            saveAsImage : {show: true}
		        }
		    },
		    calculable : true,
		    series : [
		        {
		            name:'出站客流量及出站换乘比例',
		            type:'pie',
		            radius : '75%',
		            center: ['50%', '54%'],
		            data:[
		                  //start
		                //end
		            ]
		        }
		    ]
		}; 
    // 为echarts对象加载数据 
    myChart2.setOption(option2); 
}