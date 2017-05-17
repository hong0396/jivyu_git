package servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import model.SubwayPie;
import dao.impl.EchartsPieDaoImpl;

public class SubWayAnalysisServletByMonth extends HttpServlet {

	/**
	 * Constructor of the object.
	 */
	public SubWayAnalysisServletByMonth() {
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
		//response.setCharacterEncoding("utf-8");
		  EchartsPieDaoImpl EPI=new EchartsPieDaoImpl();		
		  String sitecode=request.getParameter("sitecode");
		  String date=request.getParameter("date");
		  date=date.toString().substring(0, 6);
		//  System.out.println(date);
		List<SubwayPie> list=EPI.AnalysisSubwayPieInByMonth(sitecode,date);
		PrintWriter out = response.getWriter();	
		String json="";
		try {
			json=list.toString().replace("NAME", "name").replace("VALUE", "value");
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		List<SubwayPie> list2=EPI.AnalysisSubwayPieOutByMonth(sitecode,date);
		
		String json2="";
		try {
			json2=list2.toString().replace("NAME", "name").replace("VALUE", "value");
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		ArrayList<String> strArray = new ArrayList<String> ();
		strArray.add(json);
		strArray.add(json2);
	
		out.print(strArray);
	//	out.flush();
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
