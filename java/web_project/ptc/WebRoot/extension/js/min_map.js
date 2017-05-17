var option_min;
var BMapExt_min;
var container;
var myChart_min; 
//var map;
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
    require(
    [
        'echarts',
        'BMap',
        'echarts/chart/map'
    ],
    function (echarts, BMapExtension) {
       
        // 初始化地图
        BMapExt_min = new BMapExtension($('#main')[0], BMap, echarts,{  enableMapClick: false   });
        map = BMapExt_min.getMap();
        container = BMapExt_min.getEchartsContainer();
        var startPoint = {			
            x: 121.48083,
            y: 31.238875
        };      
        var point = new BMap.Point(startPoint.x, startPoint.y);
        map.centerAndZoom(point, 17);
        map.enableScrollWheelZoom(false);
     //  map.disableDragging();        
        
        // 地图自定义样式
//        map.setMapStyle({
//            styleJson: [
//                  {
//                       "featureType": "water",
//                       "elementType": "all",
//                       "stylers": {
//                            "color": "#044161"
//                       }
//                  },
//                  {
//                       "featureType": "land",
//                       "elementType": "all",
//                       "stylers": {
//                            "color": "#004981"
//                       }
//                  },
//                  {
//                       "featureType": "boundary",
//                       "elementType": "geometry",
//                       "stylers": {
//                            "color": "#064f85"
//                       }
//                  },
//                  {
//                       "featureType": "railway",
//                       "elementType": "all",
//                       "stylers": {
//                            "visibility": "off"
//                       }
//                  },
//                  {
//                       "featureType": "highway",
//                       "elementType": "geometry",
//                       "stylers": {
//                            "color": "#004981"
//                       }
//                  },
//                  {
//                       "featureType": "highway",
//                       "elementType": "geometry.fill",
//                       "stylers": {
//                            "color": "#005b96",
//                            "lightness": 1
//                       }
//                  },
//                  {
//                       "featureType": "highway",
//                       "elementType": "labels",
//                       "stylers": {
//                            "visibility": "off"
//                       }
//                  },
//                  {
//                       "featureType": "arterial",
//                       "elementType": "geometry",
//                       "stylers": {
//                            "color": "#004981"
//                       }
//                  },
//                  {
//                       "featureType": "arterial",
//                       "elementType": "geometry.fill",
//                       "stylers": {
//                            "color": "#00508b"
//                       }
//                  },
//                  {
//                       "featureType": "poi",
//                       "elementType": "all",
//                       "stylers": {
//                            "visibility": "off"
//                       }
//                  },
//                  {
//                       "featureType": "green",
//                       "elementType": "all",
//                       "stylers": {
//                            "color": "#056197",
//                            "visibility": "off"
//                       }
//                  },
//                  {
//                       "featureType": "subway",
//                       "elementType": "all",
//                       "stylers": {
//                            "visibility": "on"
//                       }
//                  },
//                  {
//                       "featureType": "manmade",
//                       "elementType": "all",
//                       "stylers": {
//                            "visibility": "off"
//                       }
//                  },
//                  {
//                       "featureType": "local",
//                       "elementType": "all",
//                       "stylers": {
//                            "visibility": "off"
//                       }
//                  },
//                  {
//                       "featureType": "arterial",
//                       "elementType": "labels",
//                       "stylers": {
//                            "visibility": "off"
//                       }
//                  },
//                  {
//                       "featureType": "boundary",
//                       "elementType": "geometry.fill",
//                       "stylers": {
//                            "color": "#029fd4"
//                       }
//                  },
//                  {
//                       "featureType": "building",
//                       "elementType": "all",
//                       "stylers": {
//                            "color": "#1a5787"
//                       }
//                  },
//                  {
//                       "featureType": "label",
//                       "elementType": "all",
//                       "stylers": {
//                            "visibility": "off"
//                       }
//                  }
//            ]
//        });
        map.setMapStyle({
            styleJson: [{
                featureType: "land",
                elementType: "geometry",
                stylers: {
                    color: "#212121"
                }
            }, {
                featureType: "building",
                elementType: "geometry",
                stylers: {
                    color: "#2b2b2b"
                }
            }, {
                featureType: "highway",
                elementType: "all",
                stylers: {
                    lightness: -42,
                    saturation: -91
                }
            }, {
                featureType: "arterial",
                elementType: "geometry",
                stylers: {
                    lightness: -77,
                    saturation: -94
                }
            }, {
                featureType: "green",
                elementType: "geometry",
                stylers: {
                    color: "#1b1b1b"
                }
            }, {
                featureType: "water",
                elementType: "geometry",
                stylers: {
                    color: "#181818"
                }
            }, {
                featureType: "subway",
                elementType: "geometry.stroke",
                stylers: {
                    color: "#181818"
                }
            }, {
                featureType: "railway",
                elementType: "geometry",
                stylers: {
                    lightness: -52,
                    visibility: "off"
                }
            }, {
                featureType: "railway",
                elementType: "all",
                stylers: {
                    visibility: "off"
                }
            }, {
                featureType: "subway",
                elementType: "all",
                stylers: {
                    visibility: "on"
                }
            }, {
                featureType: "all",
                elementType: "labels.text.stroke",
                stylers: {
                    color: "#313131"
                }
            }, {
                featureType: "all",
                elementType: "labels.text.fill",
                stylers: {
                    color: "#8b8787"
                }
            }, {
                featureType: "manmade",
                elementType: "geometry",
                stylers: {
                    color: "#1b1b1b"
                }
            }, {
                featureType: "local",
                elementType: "geometry",
                stylers: {
                    lightness: -75,
                    saturation: -91
                }
            }, {
                featureType: "subway",
                elementType: "geometry",
                stylers: {
                    lightness: -65
                }
            }, {
                featureType: "railway",
                elementType: "all",
                stylers: {
                    lightness: -40
                }
            }, {
                featureType: "poi",
                elementType: "all",
                stylers: {
                    visibility: "on"
                }
            }, {
                featureType: "highway",
                elementType: "labels.icon",
                stylers: {
                    visibility: "off"
                }
            }]
        });

        option_min = {
            color: ['gold','aqua','lime','aqua','gold'],
            title : {
                text: '',
                subtext:'',
                x:'right',
                textStyle : {
                    color: '#fff'
                }
            },
            tooltip : {
                trigger: 'item',
                formatter: function (v) {              
                   return v[1].replace(':','>')+" "+v[2];  
                }
            },
         /*   legend: {
                orient: 'vertical',
                x:'left',
                data:['上海','中山公园','人民广场'],
				selectedMode: 'single',         
			
                selected:{	
					'中山公园':false,
					'人民广场':false
                },
                textStyle : {
                    color: '#fff'
                }
            },*/
            toolbox: {
                show : true,
                orient : 'vertical',
                x: 'left',
                y: 'center',
                feature : {
                    mark : {show: true},
                    dataView : {show: true, readOnly: false},
                    restore : {show: true},
                    saveAsImage : {show: true}
                }
            },
            dataRange: {
                min : 0,
                max : 10,
                x: 'right',
                calculable : true,
                color: ['#ff3333', 'orange', 'yellow','lime','aqua'],
                textStyle:{
                    color:'#fff'
                }
            },
            series : [
                {
                    name:'上海X',
                    type:'map',
                    mapType: 'none',
                    data:[],
                    selectedMode : 'single',
                    geoCoord: { 
                    	'952B':[121.49324,31.236282],//?
                    	'934路':[121.487294,31.235503],
                    	'136路':[121.476596,31.243406],
                    	'71路':[121.483625,31.234181],
                    	'537路':[121.482367,31.238403],//
                    	'49路':[121.484859,31.240356],
                    	'15路':[121.477509,31.242443],
                    	'974路':[121.472772,31.239495],
                    	'01线':[],
                    	'925路':[121.480318,31.233307],
                    	'775路':[121.484897,31.2319],
                    	'869路':[121.472727,31.239498],//
                    	'64路':[121.478038,31.243513],
                    	'109路':[121.470627,31.237057],
                    	'14路':[121.486375,31.24046],
                    	'127路':[121.483625,31.234181],
                    	'123路':[121.481531,31.233641],
                    	'37路':[121.484859,31.240356],
                    	'952路':[121.480152,31.243102],
                    	'沪朱高速线':[],
                    	'980路':[121.483559,31.236589],
                    	'220路':[],
                    	'455路':[121.60036,31.287419],
                    	'167路':[121.482367,31.238403],
                    	'隧道九线':[121.491481,31.235007],
                    	'210路':[121.476088,31.244464],
                    	'518路':[121.483664,31.236542],
                    	'986路区间':[],
                    	'933路':[121.473405,31.237135],
                    	'66路':[121.492044,31.241536],
                    	'23路':[121.482944,31.230908],
                    	'18路':[121.478038,31.243513],
                    	'新川专线':[121.48241,31.238446],
                    	'451路':[121.482367,31.238403],
                    	'隧道六线':[121.48355,31.234586],
                    	'454路':[121.477801,31.238704],
                    	'112路':[121.481531,31.233641],
                    	'沪嘉专线':[121.473405,31.237135],
                    	'沪青高速专线':[121.474068,31.231266],
                    	'805路':[121.482367,31.238403],
                    	'36路':[121.473405,31.237135],
                    	'17路':[121.489251,31.233871],
                    	'46路':[121.482659,31.233459],
                    	'108路':[121.483559,31.236589],
                    	'19路':[121.482042,31.238874],
                    	'921路':[121.479597,31.239456],
                    	'930路':[121.482367,31.238403],
                    	'21路':[121.477425,31.242454],
                    	'上川专线':[121.48659,31.238845],
                    	'20路':[121.479597,31.239456],
                    	'隧道三线':[121.483559,31.236589],
                    	'145路':[121.481531,31.233641],
                    	'大桥六线':[],
                                   
                       
                '208358023':[121.479015,31.23876],//add
                '201233007':[121.483008,31.236814],//////
                '201233008':[121.483008,31.236814],////////////////
                '201233009':[121.483008,31.236814],///////////
                '201233016':[121.482761,31.23722],////////////
                '201233017':[121.482761,31.23722],/////////
                '201233018':[121.482761,31.23722],////////////
                '201233025':[121.480668,31.238466],
                '201233032':[121.482761,31.23722],////////
                '201233037':[121.482761,31.23722],////////
                '201233038':[121.482761,31.23722],/////
                '201233039':[121.482761,31.23722],//////
                '201233040':[121.482761,31.23722],///
                '201233041':[121.482761,31.23722],///////
                '201233048':[121.482761,31.23722],////
                '201233049':[121.480668,31.238466],
                '201233056':[121.480668,31.238466],
                '201233057':[121.481854,31.238559],
                '201233064':[121.482761,31.23722],////////////
                '201233065':[121.482761,31.23722],//////////
                '201233067':[121.480668,31.238466],
                '201238098':[121.482761,31.23722],///////
                '201238099':[121.482761,31.23722],///////
                '201238100':[121.482761,31.23722],/////////
                '201238101':[121.482761,31.23722],////
                '201238102':[121.482761,31.23722],///////
                '201238103':[121.482761,31.23722],////////
                '201238104':[121.482761,31.23722],/////////
                '201238105':[121.482761,31.23722],///////////
                '201238114':[121.480668,31.238466],
                '201238115':[121.480668,31.238466],
                '201238116':[121.480668,31.238466],
                '201238117':[121.480668,31.238466],
                '201238118':[121.480668,31.238466],
                '201238136':[121.480668,31.238466],
                '201238144':[121.480668,31.238466],
                '201238145':[121.480668,31.238466],
                '201238146':[121.480668,31.238466],
                '201238147':[121.480668,31.238466],
                '201238148':[121.480668,31.238466],
                '201238149':[121.480668,31.238466],
                '201238150':[121.480668,31.238466],
                '201239081':[121.480668,31.238466],
                '201239082':[121.480668,31.238466],
                '201233004':[121.483008,31.236814],//////


                '201233051':[121.481854,31.238559],
                '201233052':[121.481854,31.238559],
                '201233053':[121.481854,31.238559],
                '201233054':[121.481854,31.238559],
                '201233055':[121.481854,31.238559],

                '201233068':[121.481854,31.238559],
                '201238097':[121.481854,31.238559],
                '201238098':[121.481854,31.238559],


                '201238129':[121.481854,31.238559],

                '201238137':[121.481854,31.238559],
                
                '201239083':[121.480668,31.238466],
                '208353061':[121.480668,31.238466],
                '208353062':[121.480668,31.238466],
                '208353063':[121.480668,31.238466],
                '208353064':[121.480668,31.238466],
                '208353065':[121.480668,31.238466],
                '208353066':[121.480668,31.238466],
                '208353067':[121.480668,31.238466],
                '208353068':[121.480668,31.238466],
                '208353069':[121.480668,31.238466],
                '208353070':[121.480668,31.238466],
                '208353071':[121.480668,31.238466],
                '208353072':[121.480668,31.238466],
                '208353073':[121.480668,31.238466],
                '208353074':[121.480668,31.238466],
                '208353075':[121.480668,31.238466],
                '208353076':[121.480668,31.238466],
                '208353077':[121.480668,31.238466],
                '208353078':[121.480668,31.238466],
                '208353079':[121.480668,31.238466],
                '208353080':[121.480668,31.238466],
                '208353081':[121.480668,31.238466],
                '208353082':[121.480668,31.238466],
                '208353083':[121.480668,31.238466],
                '208353084':[121.480668,31.238466],
                '208353085':[121.480668,31.238466],
                '208356175':[121.480668,31.238466],
                '208356181':[121.480668,31.238466],
                '208358011':[121.480668,31.238466],
                '208358012':[121.480668,31.238466],
                '208358013':[121.480668,31.238466],
                '208358014':[121.480668,31.238466],
                '208358015':[121.480668,31.238466],
                '208358016':[121.480668,31.238466],
                '208358017':[121.480668,31.238466],
                '208358018':[121.480668,31.238466],
                '208358019':[121.480668,31.238466],
                '208358020':[121.480668,31.238466],
                '208358021':[121.480668,31.238466],
                '208358025':[121.480668,31.238466],
                '201238129':[121.481854,31.238559],
                '208358026':[121.480668,31.238466],
                '208358027':[121.480668,31.238466],
                '208358028':[121.480668,31.238466],
                '208358029':[121.480668,31.238466],
                '208359111':[121.480668,31.238466],
                '208356180':[121.481854,31.238559],
                '208358022':[121.481854,31.238559],               
                '208358024':[121.481854,31.238559],   
                '208358030':[121.481854,31.238559],
                '208358031':[121.481854,31.238559],
                '208358032':[121.481854,31.238559]
                    },

                    markLine : {
                        smooth:false,
                       // large: true,
                        symbol:['circle', 'arrow'],
                        precision:10,
                       
                        effect : {
                            show: true,
                            scaleSize: 2,
                            period: 30,
                            color: '#fff',
                            shadowBlur: 8
                        },
                        itemStyle : {
                            normal: {
                                borderWidth:2,
                               
                                label: {
                                    show: false,
                                    position:'outer'
                                },
                                lineStyle: {
                                    type: 'dotted',//solid
                                    shadowBlur: 10,
                                    period: 30
                                },
                                
                            }
                        },
                        animationEasing:'QuadraticOut',
                        data : [
                       //  [{name:'974路'},{name:'208359111',value:180}],
                                ]
                    },
                    
                	markPoint : {
						symbol:'emptyCircle',//'pin',//heart',//diamond',//'triangle',//rectangle',//'rect',//'emptyCircle',
						symbolSize : function (v){
							return 15 + v/30;
						},
						effect : {
								show:true,
								type:'scale',//'bounce',								
								shadowBlur : 5
								},								
						itemStyle:{
							normal:{
								label:{show:true}
								}
						},

						/*
						tooltip : {
							show: true,
							trigger: 'item'
						},*/
						data : [ 
						         //{name:'974路',value:180}  
						         ]
						
						}
                }
                
            ]
        };
        myChart_min = BMapExt_min.initECharts(container);
        BMapExt_min.setOption(option_min);
    }
);
})();