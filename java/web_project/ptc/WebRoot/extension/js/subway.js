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
            	myChart2 = ce.init(document.getElementById("main2")); 
            	myChart = ce.init(document.getElementById("main")); 
            	 pie2(ce);
             	 pie1(ce);
             	myChart2.setOption(option2);
             	myChart.setOption(option);
             
            	}
        );
 })();    

function pie1 (ec) {
    // 基于准备好的dom，初始化echarts图表
   //myChart = ec.init(document.getElementById('main')); 
   option = {
			  
		    timeline : {
		    	type:'number',
		    	notMerge:true,
		        data : [],
		        label : {
		            formatter : function(s) {
		                return s.slice(0, 7);
		            	//return s;
		            	
		            }
		        }
		    },
		    options : [
		        {
		        	title : {//start
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
		            },//end
		            toolbox: {//start
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
		                                x: '25%',
		                                width: '50%',
		                                funnelAlign: 'left',
		                                max: 1700
		                            }
		                        }
		                    },
		                    restore : {show: true},
		                    saveAsImage : {show: true}
		                }
		            },//end
		         
		            series : [//start
		                {
		                	
		                	name:'进站客流量及进站换乘比例',
		                    type:'pie',
		                    center: ['50%', '45%'],
		                    radius: '50%',
		                    data:[ ]//111111111111111111
		                }
		            ]//end
		        },
		        {
		        	title : {//start
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
		            },//end
		            toolbox: {//start
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
		                                x: '25%',
		                                width: '50%',
		                                funnelAlign: 'left',
		                                max: 1700
		                            }
		                        }
		                    },
		                    restore : {show: true},
		                    saveAsImage : {show: true}
		                }
		            },//end
		        	 series : [
		                {
		                	
		                	name:'进站客流量及进站换乘比例',
		                    type:'pie',
		                    radius: '50%',
		                    data:[]//222222222222222222
		                }
		            ]
		        },
		        {title : {//start
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
	            },//end
	            toolbox: {//start
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
	                                x: '25%',
	                                width: '50%',
	                                funnelAlign: 'left',
	                                max: 1700
	                            }
	                        }
	                    },
	                    restore : {show: true},
	                    saveAsImage : {show: true}
	                }
	            },//end
		        	series : [
		                {
		                	
		                	name:'进站客流量及进站换乘比例',
		                    type:'pie',
		                    radius: '50%',
		                    data:[]//33333333333333333333333333333333
		                }
		            ]
		        },
		        {
		        	title : {//start
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
		            },//end
		            toolbox: {//start
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
		                                x: '25%',
		                                width: '50%',
		                                funnelAlign: 'left',
		                                max: 1700
		                            }
		                        }
		                    },
		                    restore : {show: true},
		                    saveAsImage : {show: true}
		                }
		            },//end
		        	series : [
		                {
		                
		                	name:'进站客流量及进站换乘比例',
		                    type:'pie',
		                    radius: '50%',
		                    data:[]//4444444444444444444444444444444444444
		                }
		            ]
		        },
		        {
		        	title : {//start
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
		            },//end
		            toolbox: {//start
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
		                                x: '25%',
		                                width: '50%',
		                                funnelAlign: 'left',
		                                max: 1700
		                            }
		                        }
		                    },
		                    restore : {show: true},
		                    saveAsImage : {show: true}
		                }
		            },//end
		        	series : [
		                {
		                
		                	name:'进站客流量及进站换乘比例',
		                    type:'pie',
		                    radius: '50%',
		                    data:[]//55555555555555555555555555555555
		                }
		            ]
		        },
		        {
		        	title : {//start
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
		            },//end
		            toolbox: {//start
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
		                                x: '25%',
		                                width: '50%',
		                                funnelAlign: 'left',
		                                max: 1700
		                            }
		                        }
		                    },
		                    restore : {show: true},
		                    saveAsImage : {show: true}
		                }
		            },//end
		        	series : [
		                {
		                
		                	name:'进站客流量及进站换乘比例',
		                    type:'pie',
		                    radius: '50%',
		                    data:[]//66666666666666666666666666
		                }
		            ]
		        },
		        {
		        	title : {//start
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
		            },//end
		            toolbox: {//start
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
		                                x: '25%',
		                                width: '50%',
		                                funnelAlign: 'left',
		                                max: 1700
		                            }
		                        }
		                    },
		                    restore : {show: true},
		                    saveAsImage : {show: true}
		                }
		            },//end
		        	 series : [
		                {
		                
		                	name:'进站客流量及进站换乘比例',
		                    type:'pie',
		                    radius: '50%',
		                    data:[]//7777777777777777777777777777777777
		                }
		            ]
		        },
		        {
		        	title : {//start
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
		            },//end
		            toolbox: {//start
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
		                                x: '25%',
		                                width: '50%',
		                                funnelAlign: 'left',
		                                max: 1700
		                            }
		                        }
		                    },
		                    restore : {show: true},
		                    saveAsImage : {show: true}
		                }
		            },//end
		        	series : [
		                {
		                	
		                	name:'进站客流量及进站换乘比例',
		                    type:'pie',
		                    radius: '50%',
		                    data:[]//888888888888888888888888888888888888888888888
		                }
		            ]
		        },
		        {
		        	title : {//start
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
		            },//end
		            toolbox: {//start
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
		                                x: '25%',
		                                width: '50%',
		                                funnelAlign: 'left',
		                                max: 1700
		                            }
		                        }
		                    },
		                    restore : {show: true},
		                    saveAsImage : {show: true}
		                }
		            },//end
		        	 series : [
		                {
		                
		                	name:'进站客流量及进站换乘比例',
		                    type:'pie',
		                    radius: '50%',
		                    data:[]//9999999999999999999999999999999999999
		                }
		            ]
		        },
		        {
		        	title : {//start
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
		            },//end
		            toolbox: {//start
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
		                                x: '25%',
		                                width: '50%',
		                                funnelAlign: 'left',
		                                max: 1700
		                            }
		                        }
		                    },
		                    restore : {show: true},
		                    saveAsImage : {show: true}
		                }
		            },//end
		        	 series : [
		                {
		                	
		                	name:'进站客流量及进站换乘比例',
		                    type:'pie',
		                    radius: '50%',
		                    data:[]//101010101010101010
		                }
		            ]
		        },
		        {
		        	title : {//start
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
		            },//end
		            toolbox: {//start
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
		                                x: '25%',
		                                width: '50%',
		                                funnelAlign: 'left',
		                                max: 1700
		                            }
		                        }
		                    },
		                    restore : {show: true},
		                    saveAsImage : {show: true}
		                }
		            },//end
		        	series : [
		                {
		                	
		                	name:'进站客流量及进站换乘比例',
		                    type:'pie',
		                    radius: '50%',
		                    data:[]//11
		                }
		            ]
		        },
		        {
		        	title : {//start
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
		            },//end
		            toolbox: {//start
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
		                                x: '25%',
		                                width: '50%',
		                                funnelAlign: 'left',
		                                max: 1700
		                            }
		                        }
		                    },
		                    restore : {show: true},
		                    saveAsImage : {show: true}
		                }
		            },//end
		        	 series : [
		                {
		                
		                	name:'进站客流量及进站换乘比例',
		                    type:'pie',
		                    radius: '50%',
		                    data:[]//12
		                }
		            ]
		        },
		        {		
		        	title : {//start
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
		            },//end
		            toolbox: {//start
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
		                                x: '25%',
		                                width: '50%',
		                                funnelAlign: 'left',
		                                max: 1700
		                            }
		                        }
		                    },
		                    restore : {show: true},
		                    saveAsImage : {show: true}
		                }
		            },//end
		            series : [
		                {
		                	
		                	name:'进站客流量及进站换乘比例',
		                    type:'pie',
		                    radius: '50%',
		                    data:[]//13
		                }
		            ]
		        },
		        {
		        	title : {//start
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
		            },//end
		            toolbox: {//start
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
		                                x: '25%',
		                                width: '50%',
		                                funnelAlign: 'left',
		                                max: 1700
		                            }
		                        }
		                    },
		                    restore : {show: true},
		                    saveAsImage : {show: true}
		                }
		            },//end
		        	series : [
		                {
		                
		                	name:'进站客流量及进站换乘比例',
		                    type:'pie',
		                    radius: '50%',
		                    data:[]//14
		                }
		            ]
		        },
		        {
		        	title : {//start
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
		            },//end
		            toolbox: {//start
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
		                                x: '25%',
		                                width: '50%',
		                                funnelAlign: 'left',
		                                max: 1700
		                            }
		                        }
		                    },
		                    restore : {show: true},
		                    saveAsImage : {show: true}
		                }
		            },//end
		        	series : [
		                {
		                	
		                	name:'进站客流量及进站换乘比例',
		                    type:'pie',
		                    radius: '50%',
		                    data:[]//15
		                }
		            ]
		        },
		        {		 
		        	title : {//start
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
		            },//end
		            toolbox: {//start
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
		                                x: '25%',
		                                width: '50%',
		                                funnelAlign: 'left',
		                                max: 1700
		                            }
		                        }
		                    },
		                    restore : {show: true},
		                    saveAsImage : {show: true}
		                }
		            },//end
		            series : [
		                {
		                	
		                	name:'进站客流量及进站换乘比例',
		                    type:'pie',
		                    radius: '50%',
		                    data:[]//16
		                }
		            ]
		        },
		        {
		        	title : {//start
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
		            },//end
		            toolbox: {//start
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
		                                x: '25%',
		                                width: '50%',
		                                funnelAlign: 'left',
		                                max: 1700
		                            }
		                        }
		                    },
		                    restore : {show: true},
		                    saveAsImage : {show: true}
		                }
		            },//end
		     	  series : [
		                {
		                	
		                	name:'进站客流量及进站换乘比例',
		                    type:'pie',
		                    radius: '50%',
		                    data:[]//17
		                }
		            ]
		        },
		        {
		        	title : {//start
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
		            },//end
		            toolbox: {//start
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
		                                x: '25%',
		                                width: '50%',
		                                funnelAlign: 'left',
		                                max: 1700
		                            }
		                        }
		                    },
		                    restore : {show: true},
		                    saveAsImage : {show: true}
		                }
		            },//end
		        	series : [
		                {
		                	
		                	name:'进站客流量及进站换乘比例',
		                    type:'pie',
		                    radius: '50%',
		                    data:[]//18
		                }
		            ]
		        },
		        {		
		        	title : {//start
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
		            },//end
		            toolbox: {//start
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
		                                x: '25%',
		                                width: '50%',
		                                funnelAlign: 'left',
		                                max: 1700
		                            }
		                        }
		                    },
		                    restore : {show: true},
		                    saveAsImage : {show: true}
		                }
		            },//end
		            series : [
		                {
		                
		                	name:'进站客流量及进站换乘比例',
		                    type:'pie',
		                    radius: '50%',
		                    data:[]//19
		                }
		            ]
		        },
		        {
		        	title : {//start
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
		            },//end
		            toolbox: {//start
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
		                                x: '25%',
		                                width: '50%',
		                                funnelAlign: 'left',
		                                max: 1700
		                            }
		                        }
		                    },
		                    restore : {show: true},
		                    saveAsImage : {show: true}
		                }
		            },//end
		        	series : [
		                {
		                
		                	name:'进站客流量及进站换乘比例',
		                    type:'pie',
		                    radius: '50%',
		                    data:[]//20
		                }
		            ]
		        },
		        {
		        	title : {//start
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
		            },//end
		            toolbox: {//start
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
		                                x: '25%',
		                                width: '50%',
		                                funnelAlign: 'left',
		                                max: 1700
		                            }
		                        }
		                    },
		                    restore : {show: true},
		                    saveAsImage : {show: true}
		                }
		            },//end
		        	series : [
		                {
		                
		                	name:'进站客流量及进站换乘比例',
		                    type:'pie',
		                    radius: '50%',
		                    data:[]//21
		                }
		            ]
		        },
		        {
		        	title : {//start
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
		            },//end
		            toolbox: {//start
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
		                                x: '25%',
		                                width: '50%',
		                                funnelAlign: 'left',
		                                max: 1700
		                            }
		                        }
		                    },
		                    restore : {show: true},
		                    saveAsImage : {show: true}
		                }
		            },//end
		        	series : [
		                {
		                
		                	name:'进站客流量及进站换乘比例',
		                    type:'pie',
		                    radius: '50%',
		                    data:[]//22
		                }
		            ]
		        }
		    ]//options
		};
    // 为echarts对象加载数据 
   // myChart.setOption(option); 
}

function pie2 (ec) {
    // 基于准备好的dom，初始化echarts图表
  // myChart2 = ec.init(document.getElementById('main2')); 
	option2 = {
   		 symbolSize:'50',
		    timeline : {
		    	type:'number',
		    	notMerge:true,
		        data : [
		        
		        ],
		        label : {
		            formatter : function(s) {
		                return s.slice(0, 7);
		            	//return s;
		            	
		            }
		        }
		    },
		    options : [
		        {
		        	title : {//start
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
		            },//end
		            toolbox: {//start
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
		                                x: '25%',
		                                width: '50%',
		                                funnelAlign: 'left',
		                                max: 1700
		                            }
		                        }
		                    },
		                    restore : {show: true},
		                    saveAsImage : {show: true}
		                }
		            },//end
		         
		            series : [//start
		                {
		                	
		                	name:'进站客流量及进站换乘比例',
		                    type:'pie',
		                    center: ['50%', '45%'],
		                    radius: '50%',
		                    data:[ ]//111111111111111111
		                }
		            ]//end
		        },
		        {
		        	title : {//start
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
		            },//end
		            toolbox: {//start
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
		                                x: '25%',
		                                width: '50%',
		                                funnelAlign: 'left',
		                                max: 1700
		                            }
		                        }
		                    },
		                    restore : {show: true},
		                    saveAsImage : {show: true}
		                }
		            },//end
		        	 series : [
		                {
		                	
		                	name:'进站客流量及进站换乘比例',
		                    type:'pie',
		                    radius: '50%',
		                    data:[]//222222222222222222
		                }
		            ]
		        },
		        {title : {//start
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
	            },//end
	            toolbox: {//start
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
	                                x: '25%',
	                                width: '50%',
	                                funnelAlign: 'left',
	                                max: 1700
	                            }
	                        }
	                    },
	                    restore : {show: true},
	                    saveAsImage : {show: true}
	                }
	            },//end
		        	series : [
		                {
		                	
		                	name:'进站客流量及进站换乘比例',
		                    type:'pie',
		                    radius: '50%',
		                    data:[]//33333333333333333333333333333333
		                }
		            ]
		        },
		        {
		        	title : {//start
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
		            },//end
		            toolbox: {//start
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
		                                x: '25%',
		                                width: '50%',
		                                funnelAlign: 'left',
		                                max: 1700
		                            }
		                        }
		                    },
		                    restore : {show: true},
		                    saveAsImage : {show: true}
		                }
		            },//end
		        	series : [
		                {
		                
		                	name:'进站客流量及进站换乘比例',
		                    type:'pie',
		                    radius: '50%',
		                    data:[]//4444444444444444444444444444444444444
		                }
		            ]
		        },
		        {
		        	title : {//start
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
		            },//end
		            toolbox: {//start
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
		                                x: '25%',
		                                width: '50%',
		                                funnelAlign: 'left',
		                                max: 1700
		                            }
		                        }
		                    },
		                    restore : {show: true},
		                    saveAsImage : {show: true}
		                }
		            },//end
		        	series : [
		                {
		                
		                	name:'进站客流量及进站换乘比例',
		                    type:'pie',
		                    radius: '50%',
		                    data:[]//55555555555555555555555555555555
		                }
		            ]
		        },
		        {
		        	title : {//start
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
		            },//end
		            toolbox: {//start
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
		                                x: '25%',
		                                width: '50%',
		                                funnelAlign: 'left',
		                                max: 1700
		                            }
		                        }
		                    },
		                    restore : {show: true},
		                    saveAsImage : {show: true}
		                }
		            },//end
		        	series : [
		                {
		                
		                	name:'进站客流量及进站换乘比例',
		                    type:'pie',
		                    radius: '50%',
		                    data:[]//66666666666666666666666666
		                }
		            ]
		        },
		        {
		        	title : {//start
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
		            },//end
		            toolbox: {//start
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
		                                x: '25%',
		                                width: '50%',
		                                funnelAlign: 'left',
		                                max: 1700
		                            }
		                        }
		                    },
		                    restore : {show: true},
		                    saveAsImage : {show: true}
		                }
		            },//end
		        	 series : [
		                {
		                
		                	name:'进站客流量及进站换乘比例',
		                    type:'pie',
		                    radius: '50%',
		                    data:[]//7777777777777777777777777777777777
		                }
		            ]
		        },
		        {
		        	title : {//start
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
		            },//end
		            toolbox: {//start
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
		                                x: '25%',
		                                width: '50%',
		                                funnelAlign: 'left',
		                                max: 1700
		                            }
		                        }
		                    },
		                    restore : {show: true},
		                    saveAsImage : {show: true}
		                }
		            },//end
		        	series : [
		                {
		                	
		                	name:'进站客流量及进站换乘比例',
		                    type:'pie',
		                    radius: '50%',
		                    data:[]//888888888888888888888888888888888888888888888
		                }
		            ]
		        },
		        {
		        	title : {//start
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
		            },//end
		            toolbox: {//start
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
		                                x: '25%',
		                                width: '50%',
		                                funnelAlign: 'left',
		                                max: 1700
		                            }
		                        }
		                    },
		                    restore : {show: true},
		                    saveAsImage : {show: true}
		                }
		            },//end
		        	 series : [
		                {
		                
		                	name:'进站客流量及进站换乘比例',
		                    type:'pie',
		                    radius: '50%',
		                    data:[]//9999999999999999999999999999999999999
		                }
		            ]
		        },
		        {
		        	title : {//start
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
		            },//end
		            toolbox: {//start
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
		                                x: '25%',
		                                width: '50%',
		                                funnelAlign: 'left',
		                                max: 1700
		                            }
		                        }
		                    },
		                    restore : {show: true},
		                    saveAsImage : {show: true}
		                }
		            },//end
		        	 series : [
		                {
		                	
		                	name:'进站客流量及进站换乘比例',
		                    type:'pie',
		                    radius: '50%',
		                    data:[]//101010101010101010
		                }
		            ]
		        },
		        {
		        	title : {//start
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
		            },//end
		            toolbox: {//start
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
		                                x: '25%',
		                                width: '50%',
		                                funnelAlign: 'left',
		                                max: 1700
		                            }
		                        }
		                    },
		                    restore : {show: true},
		                    saveAsImage : {show: true}
		                }
		            },//end
		        	series : [
		                {
		                	
		                	name:'进站客流量及进站换乘比例',
		                    type:'pie',
		                    radius: '50%',
		                    data:[]//11
		                }
		            ]
		        },
		        {
		        	title : {//start
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
		            },//end
		            toolbox: {//start
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
		                                x: '25%',
		                                width: '50%',
		                                funnelAlign: 'left',
		                                max: 1700
		                            }
		                        }
		                    },
		                    restore : {show: true},
		                    saveAsImage : {show: true}
		                }
		            },//end
		        	 series : [
		                {
		                
		                	name:'进站客流量及进站换乘比例',
		                    type:'pie',
		                    radius: '50%',
		                    data:[]//12
		                }
		            ]
		        },
		        {		
		        	title : {//start
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
		            },//end
		            toolbox: {//start
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
		                                x: '25%',
		                                width: '50%',
		                                funnelAlign: 'left',
		                                max: 1700
		                            }
		                        }
		                    },
		                    restore : {show: true},
		                    saveAsImage : {show: true}
		                }
		            },//end
		            series : [
		                {
		                	
		                	name:'进站客流量及进站换乘比例',
		                    type:'pie',
		                    radius: '50%',
		                    data:[]//13
		                }
		            ]
		        },
		        {
		        	title : {//start
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
		            },//end
		            toolbox: {//start
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
		                                x: '25%',
		                                width: '50%',
		                                funnelAlign: 'left',
		                                max: 1700
		                            }
		                        }
		                    },
		                    restore : {show: true},
		                    saveAsImage : {show: true}
		                }
		            },//end
		        	series : [
		                {
		                
		                	name:'进站客流量及进站换乘比例',
		                    type:'pie',
		                    radius: '50%',
		                    data:[]//14
		                }
		            ]
		        },
		        {
		        	title : {//start
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
		            },//end
		            toolbox: {//start
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
		                                x: '25%',
		                                width: '50%',
		                                funnelAlign: 'left',
		                                max: 1700
		                            }
		                        }
		                    },
		                    restore : {show: true},
		                    saveAsImage : {show: true}
		                }
		            },//end
		        	series : [
		                {
		                	
		                	name:'进站客流量及进站换乘比例',
		                    type:'pie',
		                    radius: '50%',
		                    data:[]//15
		                }
		            ]
		        },
		        {		 
		        	title : {//start
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
		            },//end
		            toolbox: {//start
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
		                                x: '25%',
		                                width: '50%',
		                                funnelAlign: 'left',
		                                max: 1700
		                            }
		                        }
		                    },
		                    restore : {show: true},
		                    saveAsImage : {show: true}
		                }
		            },//end
		            series : [
		                {
		                	
		                	name:'进站客流量及进站换乘比例',
		                    type:'pie',
		                    radius: '50%',
		                    data:[]//16
		                }
		            ]
		        },
		        {
		        	title : {//start
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
		            },//end
		            toolbox: {//start
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
		                                x: '25%',
		                                width: '50%',
		                                funnelAlign: 'left',
		                                max: 1700
		                            }
		                        }
		                    },
		                    restore : {show: true},
		                    saveAsImage : {show: true}
		                }
		            },//end
		     	  series : [
		                {
		                	
		                	name:'进站客流量及进站换乘比例',
		                    type:'pie',
		                    radius: '50%',
		                    data:[]//17
		                }
		            ]
		        },
		        {
		        	title : {//start
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
		            },//end
		            toolbox: {//start
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
		                                x: '25%',
		                                width: '50%',
		                                funnelAlign: 'left',
		                                max: 1700
		                            }
		                        }
		                    },
		                    restore : {show: true},
		                    saveAsImage : {show: true}
		                }
		            },//end
		        	series : [
		                {
		                	
		                	name:'进站客流量及进站换乘比例',
		                    type:'pie',
		                    radius: '50%',
		                    data:[]//18
		                }
		            ]
		        },
		        {		
		        	title : {//start
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
		            },//end
		            toolbox: {//start
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
		                                x: '25%',
		                                width: '50%',
		                                funnelAlign: 'left',
		                                max: 1700
		                            }
		                        }
		                    },
		                    restore : {show: true},
		                    saveAsImage : {show: true}
		                }
		            },//end
		            series : [
		                {
		                
		                	name:'进站客流量及进站换乘比例',
		                    type:'pie',
		                    radius: '50%',
		                    data:[]//19
		                }
		            ]
		        },
		        {
		        	title : {//start
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
		            },//end
		            toolbox: {//start
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
		                                x: '25%',
		                                width: '50%',
		                                funnelAlign: 'left',
		                                max: 1700
		                            }
		                        }
		                    },
		                    restore : {show: true},
		                    saveAsImage : {show: true}
		                }
		            },//end
		        	series : [
		                {
		                
		                	name:'进站客流量及进站换乘比例',
		                    type:'pie',
		                    radius: '50%',
		                    data:[]//20
		                }
		            ]
		        },
		        {
		        	title : {//start
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
		            },//end
		            toolbox: {//start
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
		                                x: '25%',
		                                width: '50%',
		                                funnelAlign: 'left',
		                                max: 1700
		                            }
		                        }
		                    },
		                    restore : {show: true},
		                    saveAsImage : {show: true}
		                }
		            },//end
		        	series : [
		                {
		                
		                	name:'进站客流量及进站换乘比例',
		                    type:'pie',
		                    radius: '50%',
		                    data:[]//21
		                }
		            ]
		        },
		        {
		        	title : {//start
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
		            },//end
		            toolbox: {//start
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
		                                x: '25%',
		                                width: '50%',
		                                funnelAlign: 'left',
		                                max: 1700
		                            }
		                        }
		                    },
		                    restore : {show: true},
		                    saveAsImage : {show: true}
		                }
		            },//end
		        	series : [
		                {
		                
		                	name:'进站客流量及进站换乘比例',
		                    type:'pie',
		                    radius: '50%',
		                    data:[]//22
		                }
		            ]
		        }
		        
		        
		        
		        
		    ]//options
		};
    // 为echarts对象加载数据 
   // myChart2.setOption(option2); 
}