package servlet;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


import java.net.URLEncoder;  
import java.util.ArrayList;
import java.util.List;

import model.Echarts;
import net.sf.json.JSONArray;

import org.json.*; 
  
import org.apache.commons.httpclient.HttpClient;  
import org.apache.commons.httpclient.HttpException;
import org.apache.commons.httpclient.HttpMethod;  
import org.apache.commons.httpclient.NameValuePair;  
import org.apache.commons.httpclient.cookie.CookiePolicy;
import org.apache.commons.httpclient.methods.GetMethod;  
import org.apache.commons.httpclient.methods.PostMethod;
import org.apache.commons.httpclient.params.DefaultHttpParams;

import util.JSONUTIL;
import dao.impl.EchartsDaoImpl;

public class HttpPostServlet extends HttpServlet {

	/**
	 * Constructor of the object.
	 */
	public HttpPostServlet() {
		super();
	}

	/**
	 * Destruction of the servlet. <br>
	 */
	public void destroy() {
		super.destroy(); // Just puts "destroy" string in log
		// Put your code here
	}
	
public void doGet(HttpServletRequest request, HttpServletResponse response)
		throws ServletException, IOException {
		response.setContentType("application/json; charset=utf-8");
		
		
	   String location=request.getParameter("location");
			
	
		String url = "/geocoder/v2/";
        String host = "api.map.baidu.com";  
  
        String param = "location="+URLEncoder.encode(location, "utf-8")+"&ak=ZUONbpqGBsYGXNIYHicvbAbM&output=json&pois=1";  
     
        HttpClient httpClient = new HttpClient();  
        
        DefaultHttpParams.getDefaultParams().setParameter("http.protocol.cookie-policy", CookiePolicy.BROWSER_COMPATIBILITY);
     
        httpClient.getHostConfiguration().setHost(host,80, "http");         
          
        HttpMethod method = getMethod(url, param);     
          
        httpClient.executeMethod(method);  
          
        String result = method.getResponseBodyAsString();  
     
	
		PrintWriter out = response.getWriter();
		
		out.print(result);
		out.flush();
		out.close();
	
	}

	
	public void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		response.setContentType("application/json; charset=utf-8");
		
		
		String trainNum=request.getParameter("trainNum");
		String trainNum1=trainNum.substring(4);
		String begintime=request.getParameter("begintime");
		String endtime=request.getParameter("endtime");
		
				
		String url = "/army-infantry/trajectoryAnalysis/trainStationDayPeopleNum";
		
        String host = "180.168.123.155";  
      
        HttpClient httpClient = new HttpClient();  
        httpClient.getHostConfiguration().setHost(host, 15200, "http");          
          
      
        HttpMethod method = postMethod(url,trainNum1,begintime,endtime);  
          
        httpClient.executeMethod(method);  
      
      String result="";
	try {
		result = method.getResponseBodyAsString();
		System.out.println(result);
	} catch (Exception e1) {
		
		e1.printStackTrace();
	}  
     
	 String[][] array = toArray(result);
	 List<String>list=new ArrayList<String>();
	if(array!=null&&array.length!=0)       
	{
		
        String result2="";
        for (int i = 0; i < array.length; i++) {   
        		try {
					String lng=array[i][4];
					String lat=array[i][3];  
					result2= getLocationsName(lat.replaceAll("\"", ""),lng.replaceAll("\"", ""));
				} catch (Exception e) {					
					e.printStackTrace();
				}       
           list.add(result2);        
        }   		
	}
      
        
        /******************************获取交通卡进站总流量*****************************************/
        EchartsDaoImpl edi=new EchartsDaoImpl();		
    	String id=trainNum.substring(0, 4);//    	
    	String date=endtime.toString().trim().substring(0,10).replace("-", "");    
    	String beginhour=begintime.substring(11);   
    	String endhour=endtime.substring(11);
    	List<Echarts> Sta_list= edi.getDatasInByHourForStatistics(id, date, beginhour, endhour);
    	String json="";
		try {
			 json= JSONUTIL.fromList(Sta_list);
		} catch (Throwable e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	
        /***********************************************************************/
        
        
        ArrayList<String> strArray = new ArrayList<String> ();
		strArray.add(result);//电信那边过来的数据				
		strArray.add(list.toString());//百度api由经纬度获取地理位置名称
		strArray.add(json);//用于信息窗口显示地铁人流详细信息
		PrintWriter out = response.getWriter();	
		out.print(strArray);	
		//System.out.println(result);
	
		out.flush();
		out.close();
	}
	 public static String[][] toArray(String str) {
	        String[] split = str.split("],");
	        String[][] array = new String[split.length][];
	        for (int i = 0; i < split.length; i++) {
	            array[i] = split[i].split(",");
	        }
	        return array;
	    }
	/***************************Http post 方法测试test start****************************************/
    private static HttpMethod getMethod(String url,String param) throws IOException{  
        GetMethod get = new GetMethod(url+"?"+param);  
        get.releaseConnection();  
        return get;  
    }  
          
    private static HttpMethod postMethod(String url,String trainNum,String begintime,String endtime) throws IOException{   
        PostMethod post = new PostMethod(url);  
        post.setRequestHeader("Content-Type","application/x-www-form-urlencoded;charset=utf-8");    
        NameValuePair[] param = { new NameValuePair("trainNum",trainNum),  
                new NameValuePair("begintime",begintime),  
                new NameValuePair("endtime",endtime) 
               } ;  
        post.setRequestBody(param);  
        post.releaseConnection();  
        return post;  
    } 
    private static HttpMethod postMethod2(String url,String location,String ak,String output,String pois) throws IOException{   
        PostMethod post = new PostMethod(url);  
        post.setRequestHeader("Content-Type","application/x-www-form-urlencoded;charset=utf-8");    
        NameValuePair[] param = { new NameValuePair("location",location),
        		 new NameValuePair("ak",ak),
        		 new NameValuePair("output",output),
        		 new NameValuePair("pois",pois)
               } ;  
        post.setRequestBody(param);  
        post.releaseConnection();  
        return post;  
    } 
    /***************************test end*******************************************/
    /***************************百度 api 获取小区地理位置名称*******************************************/
    public static String getLocationsName(String lat,String lng){
    	String location =lng+","+lat;    	
		String ak="ZUONbpqGBsYGXNIYHicvbAbM";
		
		String output="json";
		String pois="1";
		
		String url = "/geocoder/v2/";
		
		String host ="api.map.baidu.com";
		 HttpClient httpClient = new HttpClient();  
		 DefaultHttpParams.getDefaultParams().setParameter("http.protocol.cookie-policy", CookiePolicy.BROWSER_COMPATIBILITY);
	        httpClient.getHostConfiguration().setHost(host,80, "http");

	        String result="";
			try {
				HttpMethod method = postMethod2(url,location,ak,output,pois);  
				  
				httpClient.executeMethod(method);  			
				result = method.getResponseBodyAsString();
			} catch (HttpException e) {
			
				e.printStackTrace();
			} catch (IOException e) {
			
				e.printStackTrace();
			}  
			result=result+":"+lat+":"+lng;
    	return result;
    }    

	public void init() throws ServletException {		
	}

}
