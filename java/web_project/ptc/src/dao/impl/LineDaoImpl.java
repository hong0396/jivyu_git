package dao.impl;

import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;



import model.Line;

import model.beforeLine;
import dao.BaseDao;
import dao.LineDao;

public class LineDaoImpl extends BaseDao implements LineDao {

	@Override
	public   List<Line> getPedictLine(String date, String hour, String sitecode) {
		// TODO Auto-generated method stub
		
		 List<Line> list=new ArrayList();
		Connection conn=null;
		PreparedStatement ps=null;
		ResultSet rs=null;
	    CallableStatement cstmt = null;
		conn=this.getConn();
		
	   String procedure = "{ call sp_orb_q_site_forecast(?,?,?,?,?)}";
	 
	   int quarterid=Integer.valueOf(hour.toString().substring(0, 2))*4+Integer.valueOf(hour.toString().substring(2, 4))/15;
	  
	//System.out.println(quarterid);
	//String sql="select A.quarter_id AS TIME,max(case when flag='0' then cust_cnt else 0 end) AS REALVALUE,max(case when flag='1' then cust_cnt else 0 end)  AS predictvalue from tbl_edw_dm_orbit_qua_insite A where    A.od_date =? and A.site_code=? and A.quarter_id>=? and A.quarter_id<='96' group by quarter_id order by A.QUARTER_ID";		
		String sql="select B.BEGIN_RANGE AS TIME,max(case when A.flag='0' then A.cust_cnt else 0 end) AS REALVALUE,max(case when A.flag='1' then A.cust_cnt else 0 end)  AS predictvalue from tbl_edw_dm_orbit_qua_insite A,TBL_EDW_DPA_QUARTER_RANGE B where A.QUARTER_ID=B.QUARTER_ID AND A.od_date =? and A.site_code=? and A.quarter_id=? group by B.BEGIN_RANGE order by TIME";	
	
		
		
		for(int t=quarterid;t<=96;t++){
			try {
				
				
				 cstmt =conn.prepareCall(procedure);
				 cstmt.setInt(1, Integer.valueOf(date));
				
			     cstmt.setInt(2,t);
			     cstmt.setString(3, sitecode);
			    
	//×¢²áÊä³ö²ÎÊý
			     cstmt.registerOutParameter(4, java.sql.Types.INTEGER);
	             cstmt.registerOutParameter(5, java.sql.Types.VARCHAR);
	             cstmt.execute();
	         
	       	
			
				int flag=cstmt.getInt(4);
				

					ps = conn.prepareStatement(sql);

					ps.setString(1, date);
					ps.setString(2, sitecode);
					ps.setString(3, String.valueOf(t));
					

					rs = ps.executeQuery();
					String predictvalue="";

					while (rs.next()) {
						if (flag == 0){
							  predictvalue = rs.getString("predictvalue");
						}
						else

						  predictvalue ="0";
						String realvalue =rs.getString("realvalue");
						String time =rs.getString("time");
					
						Line ec = new Line(time, realvalue, predictvalue);
						list.add(ec);

					}
				}
		
				 catch (SQLException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
			
		}
		
			closeAll(rs, ps, conn);
		
		return list;
	}

		
	@Override
	public   List<beforeLine> beforePedictLine(String date, String hour, String sitecode) {
		// TODO Auto-generated method stub
		
		 List<beforeLine> list=new ArrayList();
		Connection conn=null;
		PreparedStatement ps=null;
		ResultSet rs=null;	 
		conn=this.getConn();
    
		//String sql="select A.quarter_id AS TIME,max(case when flag='0' then cust_cnt else 0 end) AS REALVALUE from tbl_edw_dm_orbit_qua_insite A where  A.od_date =? and A.site_code=? and A.quarter_id<? and A.quarter_id>'0' group by quarter_id order by A.QUARTER_ID";
		String sql="select B.BEGIN_RANGE AS TIME,max(case when A.flag='0' then A.cust_cnt else 0 end) AS REALVALUE from tbl_edw_dm_orbit_qua_insite A,TBL_EDW_DPA_QUARTER_RANGE B where A.QUARTER_ID=B.QUARTER_ID AND A.od_date =? and A.site_code=? AND B.BEGIN_RANGE<? and A.quarter_id>'0' group by B.BEGIN_RANGE order by TIME";
		try {
			
				ps = conn.prepareStatement(sql);

				ps.setString(1, date);
				ps.setString(2, sitecode);
				ps.setString(3, hour);			

				rs = ps.executeQuery();
				while (rs.next()) {
					String realvalue =rs.getString("realvalue");
					String time =rs.getString("time");
					String predictvalue=realvalue;
					beforeLine ec = new beforeLine(time, realvalue,predictvalue);
					list.add(ec);

				}
			
		}
			 catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
				
			closeAll(rs, ps, conn);
		return list;
	}	 
	
}


 