package servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import dao.impl.BigEventImpl;

import net.sf.json.JSONArray;

public class BigEventServlet extends HttpServlet {

	/**
	 * Constructor of the object.
	 */
	public BigEventServlet() {
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

		ArrayList<String> result = new ArrayList<String>();

		List<String> list = new ArrayList<String>();
		List<String> listbar = new ArrayList<String>();
		String date = request.getParameter("date");
		BigEventImpl bei = new BigEventImpl();

		list = bei.getEventDatas(date);
		listbar = bei.getEventDatasBar(date);

		JSONArray jsonArray = JSONArray.fromObject(list);
		JSONArray jsonArrayBar = JSONArray.fromObject(listbar);
		result.add(jsonArray.toString());
		result.add(jsonArrayBar.toString());
		out.println(result);
		// System.out.println(list);
		System.out.println(result);
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
