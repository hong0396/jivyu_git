var    option;
var myChart;
var option2;
var myChart2; 
$(function () {
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
          function (ce){
            	
            	 myChart = ce.init(document.getElementById("pie")); 
            	  myChart2 = ce.init(document.getElementById("pie2")); 
            	  var idx = 1;
            	   option = {
            			   backgroundColor:'#eee',
            			    timeline : {
            			    	type:'number',
            			    	notMerge:true,
            			        data : [/*
            			                '2013-01-01', '2013-02-01', '2013-03-01', '2013-04-01', '2013-05-01',
            			                { name:'2013-06-01', symbol:'emptyStar6', symbolSize:8 },
            			                '2013-07-01', '2013-08-01', '2013-09-01', '2013-10-01', '2013-11-01',
            			                { name:'2013-12-01', symbol:'star6', symbolSize:8 }*/
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
            					        text: '轨道交通客流',
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
            			 		       data:['Chrome','Firefox','Safari','IE9+','IE8-']
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
            			                    data:[ 
            			                          {value: idx * 128 + 80,  name:'Chrome'},
            			                          {value: idx * 64  + 160,  name:'Firefox'},
            			                          {value: idx * 32  + 320,  name:'Safari'},
            			                          {value: idx * 16  + 640,  name:'IE9+'},
            			                          {value: idx++ * 8  + 1280, name:'IE8-'}
            			                           ]//111111111111111111
            			                }
            			            ]//end
            			        },
            			        {
            			        	title : {//start
            					        text: '轨道交通客流',
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
            			                    data:[
            			                          {value: idx * 128 + 80,  name:'Chrome'},
            			                          {value: idx * 64  + 160,  name:'Firefox'},
            			                          {value: idx * 32  + 320,  name:'Safari'},
            			                          {value: idx * 16  + 640,  name:'IE9+'},
            			                          {value: idx++ * 8  + 1280, name:'IE8-'}
            			                          ]//222222222222222222
            			                }
            			            ]
            			        },
            			        {title : {//start
            				        text: '轨道交通客流',
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
            			                    data:[
            			                          {value: idx * 128 + 80,  name:'Chrome'},
            			                          {value: idx * 64  + 160,  name:'Firefox'},
            			                          {value: idx * 32  + 320,  name:'Safari'},
            			                          {value: idx * 16  + 640,  name:'IE9+'},
            			                          {value: idx++ * 8  + 1280, name:'IE8-'}
            			                          ]//33333333333333333333333333333333
            			                }
            			            ]
            			        },
            			        {
            			        	title : {//start
            					        text: '轨道交通客流',
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
            			                    data:[
            			                          {value: idx * 128 + 80,  name:'Chrome'},
            			                          {value: idx * 64  + 160,  name:'Firefox'},
            			                          {value: idx * 32  + 320,  name:'Safari'},
            			                          {value: idx * 16  + 640,  name:'IE9+'},
            			                          {value: idx++ * 8  + 1280, name:'IE8-'}
            			                          ]//4444444444444444444444444444444444444
            			                }
            			            ]
            			        },
            			        {
            			        	title : {//start
            					        text: '轨道交通客流',
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
            			                    data:[
            			                          {value: idx * 128 + 80,  name:'Chrome'},
            			                          {value: idx * 64  + 160,  name:'Firefox'},
            			                          {value: idx * 32  + 320,  name:'Safari'},
            			                          {value: idx * 16  + 640,  name:'IE9+'},
            			                          {value: idx++ * 8  + 1280, name:'IE8-'}
            			                          ]//55555555555555555555555555555555
            			                }
            			            ]
            			        },
            			        {
            			        	title : {//start
            					        text: '轨道交通客流',
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
            			                    data:[
            			                          {value: idx * 128 + 80,  name:'Chrome'},
            			                          {value: idx * 64  + 160,  name:'Firefox'},
            			                          {value: idx * 32  + 320,  name:'Safari'},
            			                          {value: idx * 16  + 640,  name:'IE9+'},
            			                          {value: idx++ * 8  + 1280, name:'IE8-'}
            			                          ]//66666666666666666666666666
            			                }
            			            ]
            			        },
            			        {
            			        	title : {//start
            					        text: '轨道交通客流',
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
            			                    data:[
            			                          {value: idx * 128 + 80,  name:'Chrome'},
            			                          {value: idx * 64  + 160,  name:'Firefox'},
            			                          {value: idx * 32  + 320,  name:'Safari'},
            			                          {value: idx * 16  + 640,  name:'IE9+'},
            			                          {value: idx++ * 8  + 1280, name:'IE8-'}
            			                          ]//7777777777777777777777777777777777
            			                }
            			            ]
            			        },
            			        {
            			        	title : {//start
            					        text: '轨道交通客流',
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
            					        text: '轨道交通客流',
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
            					        text: '轨道交通客流',
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
            					        text: '轨道交通客流',
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
            					        text: '轨道交通客流',
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
            					        text: '轨道交通客流',
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
            					        text: '轨道交通客流',
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
            					        text: '轨道交通客流',
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
            					        text: '轨道交通客流',
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
            					        text: '轨道交通客流',
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
            					        text: '轨道交通客流',
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
            					        text: '轨道交通客流',
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
            					        text: '轨道交通客流',
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
            					        text: '轨道交通客流',
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
            					        text: '轨道交通客流',
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
            	  // 
            	  
            	    /***************************test option2*************************************/
            	   	option2 = {
            	    		 symbolSize:'50',
            	 		    timeline : {
            	 		    	type:'number',
            	 		    	notMerge:true,
            	 		        data : [/*
            	 		                '2013-01-01', '2013-02-01', '2013-03-01', '2013-04-01', '2013-05-01',
            	 		                { name:'2013-06-01', symbol:'emptyStar6', symbolSize:8 },
            	 		                '2013-07-01', '2013-08-01', '2013-09-01', '2013-10-01', '2013-11-01',
            	 		                { name:'2013-12-01', symbol:'star6', symbolSize:8 }*/
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
            	 				        text: '轨道交通客流',
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
            	 		                    data:[
            	 		                         {value: idx * 128 + 80,  name:'Chrome'},
            	 		                        {value: idx * 64  + 160,  name:'Firefox'},
            	 		                        {value: idx * 32  + 320,  name:'Safari'},
            	 		                        {value: idx * 16  + 640,  name:'IE9+'},
            	 		                        {value: idx++ * 8  + 1280, name:'IE8-'}
            	 		                          ]//111111111111111111
            	 		                }
            	 		            ]//end
            	 		        },
            	 		        {
            	 		        	title : {//start
            	 				        text: '轨道交通客流',
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
            	 		                    data:[
            	 		                         {value: idx * 128 + 80,  name:'Chrome'},
            	 		                        {value: idx * 64  + 160,  name:'Firefox'},
            	 		                        {value: idx * 32  + 320,  name:'Safari'},
            	 		                        {value: idx * 16  + 640,  name:'IE9+'},
            	 		                        {value: idx++ * 8  + 1280, name:'IE8-'}
            	 		                          ]//222222222222222222
            	 		                }
            	 		            ]
            	 		        },
            	 		        {title : {//start
            	 			        text: '轨道交通客流',
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
            	 				        text: '轨道交通客流',
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
            	 				        text: '轨道交通客流',
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
            	 				        text: '轨道交通客流',
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
            	 				        text: '轨道交通客流',
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
            	 				        text: '轨道交通客流',
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
            	 				        text: '轨道交通客流',
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
            	 				        text: '轨道交通客流',
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
            	 				        text: '轨道交通客流',
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
            	 				        text: '轨道交通客流',
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
            	 				        text: '轨道交通客流',
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
            	 				        text: '轨道交通客流',
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
            	 				        text: '轨道交通客流',
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
            	 				        text: '轨道交通客流',
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
            	 				        text: '轨道交通客流',
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
            	 				        text: '轨道交通客流',
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
            	 				        text: '轨道交通客流',
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
            	 				        text: '轨道交通客流',
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
            	 				        text: '轨道交通客流',
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
            	   	myChart.setOption(option);
            	    myChart2.setOption(option2);
            	   
            	}
        );
 });