package servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.lang.reflect.Constructor;
import java.lang.reflect.Method;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import model.SubwayPie;
import dao.impl.EchartsPieDaoImpl;

public class EchartServlet extends HttpServlet {

	/**
	 * Constructor of the object.
	 */
	public EchartServlet() {
		super();
	}

	/**
	 * Destruction of the servlet. <br>
	 */
	public void destroy() {
		super.destroy(); // Just puts "destroy" string in log
		// Put your code here
	}

	/**
	 * The doGet method of the servlet. <br>
	 *
	 * This method is called when a form has its tag value method equals to get.
	 * 
	 * @param request the request send by the client to the server
	 * @param response the response send by the server to the client
	 * @throws ServletException if an error occurred
	 * @throws IOException if an error occurred
	 */
	public void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		response.setContentType("text/html");
	this.doPost(request, response);
	}

	/**
	 * The doPost method of the servlet. <br>
	 *
	 * This method is called when a form has its tag value method equals to post.
	 * 
	 * @param request the request send by the client to the server
	 * @param response the response send by the server to the client
	 * @throws ServletException if an error occurred
	 * @throws IOException if an error occurred
	 */
	public void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		response.setContentType("application/json; charset=utf-8");
		
		String uri=request.getRequestURI();
		String path=uri.substring(uri.lastIndexOf("/"),uri.lastIndexOf(".echart"));
		
		//Map<String, String[]> reqMap = request.getParameterMap();
		Map<String,Object> params = getArgs(request);
		String sitecode = params.get("sitecode").toString();
		System.out.println(sitecode);
		
		//Class EchartsPieDaoImpl =  Class.forName(path);
		//EchartsPieDaoImpl.class.getDeclaredMethod(params.get("selectid").toString(), Map.class).invoke(echartsPieDaoImpl, params);
		
	
	//	Method method=ownerClass.getClass().getMethod(,);
	//	List<SubwayPie>list=(List<SubwayPie>) method.invoke(, reqMap);
	/*	for (int i = 0, j = args.length; i < j; i++) {  
	         argsClass[i] = args[i].getClass();  
	     }  
	   */
	//     Constructor cons = EchartsPieDaoImpl.getConstructor(argsClass); 
		
	  //   Method method =EchartsPieDaoImpl.getMethod("AnalysisSubwayPieInByHour", reqMap);
	     //cons.newInstance(args);
	//	PrintWriter out = response.getWriter();
	
	}
	
	
	
	public Map<String,Object> getArgs(HttpServletRequest request){
		Map<String,Object> result = new HashMap<String,Object>();
		Map reqMap = request.getParameterMap();
		Iterator<String> iterator = reqMap.keySet().iterator();
		while (iterator.hasNext()) {
			String key = iterator.next();
			if (reqMap.get(key) instanceof String[]) {
				String value = ((String[])reqMap.get(key))[0];
				if(value!=null&&!"".equals(value.trim())){
					System.out.println("getParameterMap中"+key+"的值："+value);
					result.put(key,value);
				}
			}
		}
		return result;
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

	/**
	 * Initialization of the servlet. <br>
	 *
	 * @throws ServletException if an error occurs
	 */
	public void init() throws ServletException {
		// Put your code here
	}

}
