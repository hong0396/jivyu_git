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
                'echarts/chart/pie' // 使用柱状图就加载bar模块，按需加载
               
            ],
          function Pie(ce){
            	 pie2(ce);
             	 pie1(ce);
             
            	}
        );
 })();    

function pie1 (ec) {
    // 基于准备好的dom，初始化echarts图表
   myChart = ec.init(document.getElementById('pie')); 
   option = {
		   backgroundColor: 'rgba(0,0,0,0.2)',
		    title : {
		        text: '进站流量及换乘比',		       
		        x:'center'
		    },
		    tooltip : {
		        trigger: 'item',
		        formatter: "{a} <br/>{b} : {c} ({d}%)"
		    },
		    legend: {
		        orient : 'vertical',
		        x : 'left',
		        data:[//'直接访问','邮件营销','联盟广告','视频广告','搜索引擎'
		              ]
		    },
		
		    calculable : true,
		    series : [
		        {
		            name:'进站客流量及换乘比例',
		            type:'pie',
		            radius : '50%',
		            center: ['50%', '54%'],
		            data:[
		                  ]
		        }
		    ]
		}; 
    // 为echarts对象加载数据 
    myChart.setOption(option); 
}

function pie2 (ec) {
    // 基于准备好的dom，初始化echarts图表
   myChart2 = ec.init(document.getElementById('pie2')); 
   option2 = {
		   backgroundColor: 'rgba(0,0,0,0.2)',
		    title : {
		        text: '出站流量及换乘比',		      
		        x:'center'
		    },
		    tooltip : {
		        trigger: 'item',
		        formatter: "{a} <br/>{b} : {c} ({d}%)"
		    },
		    legend: {
		        orient : 'vertical',
		        x : 'left',
		        data:[//'直接访问','邮件营销','联盟广告','视频广告','搜索引擎'
		              ]
		    },
		
		    calculable : true,
		    series : [
		        {
		            name:'出站客流量及换乘比例',
		            type:'pie',
		            radius : '50%',
		            center: ['50%', '54%'],
		            data:[
		                  //{ value:29,name:"未换乘流量"}
		            ]
		        }
		    ]
		}; 
    // 为echarts对象加载数据
   myChart2.setTheme(theme);
    myChart2.setOption(option2); 
}