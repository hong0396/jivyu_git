package servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


import util.JSONUTIL;

import model.ExchangePie;
import model.MapInfo;
import model.Od5Minute;
import model.SubwayPie;
import model.Echarts;

import dao.impl.EchartsPieDaoImpl;
import dao.impl.HeatmapDaoImpl;

public class HeatmapServlet extends HttpServlet {

	/**
	 * Constructor of the object.
	 */
	public HeatmapServlet() {
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

		response.setContentType("application/json;charset=utf-8");
		PrintWriter out = response.getWriter();
		String sitecode=request.getParameter("sitecode");
		  String date=request.getParameter("date");
		  String time=request.getParameter("time");
		/**************************获取热力图客流量***********************************/
		  HeatmapDaoImpl hdi=new HeatmapDaoImpl();
		 List<String> listall=null;
		 try {
			 listall= hdi.getHeatmapData(sitecode, date, time);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		 
		 /****************************获取进出站换乘比例数据***********************************************/
		 
		 HeatmapDaoImpl HMI=new HeatmapDaoImpl();
		 
		 List<ExchangePie> list=HMI.AnalysisSubwayPieInBy5Minute(sitecode,date,time);			
			String json="";
			try {
				
				json=list.toString().replace("name1", "name").replace("name2", "name").replace("name3", "name").replace("name4", "name").replace("name5", "name").replace("ld_cust_cnt", "value").replace("bus_cnt", "value").replace("taix_cnt", "value").replace("pr_cut", "value").replace("non_change_cnt", "value");
				
			} catch (Exception e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			
			List<ExchangePie> list2=HMI.AnalysisSubwayPieOutBy5Minute(sitecode,date,time);
			
			String json2="";
			try {
				
				json2=list2.toString().replace("name1", "name").replace("name2", "name").replace("name3", "name").replace("name4", "name").replace("name5", "name").replace("ld_cust_cnt", "value").replace("bus_cnt", "value").replace("taix_cnt", "value").replace("pr_cut", "value").replace("non_change_cnt", "value");
				
			} catch (Exception e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		 
			
			
		
		 ArrayList<String> strArray = new ArrayList<String> ();
		 strArray.add(listall.toString());//热力图数据
		 strArray.add(json.toString());//进展换成比例
		 strArray.add(json2.toString());//出站换乘比例	
		out.print(strArray);
		System.out.println(json);
		//System.out.println(strArray);
		out.flush();
		out.close();
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
