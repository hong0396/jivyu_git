package dao.impl;

import java.util.ArrayList;
import java.util.List;

import model.Echarts;
import dao.BaseDao;
import dao.EchartsDao;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class EchartsDaoImpl extends BaseDao implements EchartsDao {

	@Override
	public List<Echarts> getDatasOut(String id,String outcode,String date) {
		// TODO Auto-generated method stub
		List<Echarts> list=new ArrayList();
		Connection conn=null;
		PreparedStatement ps=null;
		ResultSet rs=null;
		conn=this.getConn();
//		String sql="SELECT W.WDNAME AS INNAME,B.WDNAME AS OUTNAME,O.CUST_CNT AS VALUE FROM  DSJ_WD W   	LEFT OUTER JOIN DSJ_OD O   	ON O.IN_SITE_CODE=W.CODE   	LEFT OUTER JOIN (SELECT * FROM DSJ_WD)B    	ON B.CODE=O.OUT_SITE_CODE    where IN_SITE_CODE='"+id+"' and O.OUT_SITE_CODE LIKE '"+outcode+"__'  ORDER BY O.OUT_SITE_CODE DESC";
		String sql="SELECT  distinct(B.WDNAME) AS OUTNAME,W.WDNAME AS INNAME,trim(O.CUST_CNT) AS VALUE FROM  DSJ_WD W , DSJ_OD O,(SELECT CODE,WDNAME FROM DSJ_WD)B where O.IN_SITE_CODE=W.CODE and B.CODE=O.OUT_SITE_CODE and trim(IN_SITE_CODE) = ? and O.OUT_SITE_CODE LIKE ?||'%' and O.OD_DATE=?    ORDER BY to_number(VALUE) DESC";
		try {
			ps=conn.prepareStatement(sql);
		
			ps.setString(1, id);
			ps.setString(3, date);
			if ("".equals(outcode)) {
				ps.setString(2, null);
			} else {
				ps.setString(2, outcode);
			}
			rs = ps.executeQuery();
			while(rs.next())
			{
				String inname=rs.getString("INNAME");
				String outname=rs.getString("OUTNAME");
				int value=rs.getInt("VALUE");
				
				Echarts ec=new Echarts(inname,outname,value);
				list.add(ec);
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		closeAll(rs, ps, conn);
		return list;
	}
	@Override
	public List<Echarts> getDatasIn(String insitecode,String outsitecode,String date) {
		// TODO Auto-generated method stub
				List<Echarts> list=new ArrayList();
				Connection conn=null;
				PreparedStatement ps=null;
				ResultSet rs=null;
				conn=this.getConn();
//				
			String sql="select INNAME,OUTNAME,sum(VALUE) as VALUE from (SELECT 	DISTINCT(W.WDNAME)  AS INNAME,O.CUST_CNT AS VALUE,B.WDNAME AS OUTNAME FROM  DSJ_WD W , DSJ_OD O,(SELECT CODE,WDNAME FROM DSJ_WD)B 	where  	W.CODE=trim(O.IN_SITE_CODE)  	AND trim(O.OUT_SITE_CODE)=B.CODE 	AND O.IN_SITE_CODE LIKE ?||'%' and trim(O.OUT_SITE_CODE) =?	and O.OD_DATE=?) group by INNAME,OUTNAME ORDER BY VALUE DESC";
			//	String sql="SELECT DISTINCT(W.WDNAME)  AS INNAME,O.CUST_CNT AS VALUE,B.WDNAME AS OUTNAME FROM  DSJ_WD W , DSJ_OD O,(SELECT CODE,WDNAME FROM DSJ_WD)B where  W.CODE=trim(O.IN_SITE_CODE)  AND trim(O.OUT_SITE_CODE)=B.CODE AND O.IN_SITE_CODE LIKE ?||'%' and trim(O.OUT_SITE_CODE) =? and O.OD_DATE=? ORDER BY to_number(VALUE) DESC";
				try {
					ps=conn.prepareStatement(sql);
				
					
					ps.setString(2, outsitecode);
					ps.setString(3, date);
					if ("".equals(insitecode)) {
						ps.setString(1, null);
					} else {
						ps.setString(1, insitecode);
					}
					rs = ps.executeQuery();
					while(rs.next())
					{
						String inname=rs.getString("INNAME");
						String outname=rs.getString("OUTNAME");
						int value=rs.getInt("VALUE");
						
						Echarts ec=new Echarts(inname,outname,value);
						list.add(ec);
					}
				} catch (SQLException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
				closeAll(rs, ps, conn);
				return list;
	}
	//��վODͼ����Сʱɸѡ��
	@Override
	public  List<Echarts> getDatasInByHour(String insitecode,String outsitecode,String date,String hour){
		List<Echarts> list=new ArrayList();
		Connection conn=null;
		PreparedStatement ps=null;
		ResultSet rs=null;
		conn=this.getConn();
	
	String sql="select INNAME,OUTNAME,sum(VALUE) as VALUE from (select B.WDNAME AS INNAME,A.CUST_CNT AS VALUE,C.WDNAME AS OUTNAME FROM TBL_EDW_DM_ORBIT_HOUR_INSITE A,DSJ_WD B,(SELECT CODE,WDNAME FROM DSJ_WD) C WHERE C.CODE=A.OUT_SITE_CODE AND A.IN_SITE_CODE=B.CODE AND A.OD_DATE=? AND A.HOUR_ID=? AND A.IN_SITE_CODE LIKE ?||'%' AND A.OUT_SITE_CODE=?)  group by INNAME,OUTNAME order by value desc";
	
		try {
			ps=conn.prepareStatement(sql);
		
			ps.setString(1,date);
			ps.setString(2, hour);
			ps.setString(3, insitecode);
			ps.setString(4, outsitecode);
			rs = ps.executeQuery();
			while(rs.next())
			{
				String inname=rs.getString("INNAME");
				String outname=rs.getString("OUTNAME");
				int value=rs.getInt("VALUE");
				
				Echarts ec=new Echarts(inname,outname,value);
				list.add(ec);
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		closeAll(rs, ps, conn);
		return list;
	}
	//��վODͼ����Сʱɸѡ��
	@Override
	public  List<Echarts> getDatasOutByHour(String insitecode,String outsitecode,String date,String hour){
		List<Echarts> list=new ArrayList();
		Connection conn=null;
		PreparedStatement ps=null;
		ResultSet rs=null;
		conn=this.getConn();
	
	String sql="select B.WDNAME AS INNAME,A.CUST_CNT AS VALUE,C.WDNAME AS OUTNAME FROM TBL_EDW_DM_ORBIT_HOUR_INSITE A,DSJ_WD B,(SELECT CODE,WDNAME FROM DSJ_WD) C WHERE C.CODE=A.OUT_SITE_CODE AND A.IN_SITE_CODE=B.CODE AND A.OD_DATE=? AND A.HOUR_ID=? AND A.IN_SITE_CODE =? AND A.OUT_SITE_CODE LIKE ?||'%' order by value desc";
	
		try {
			ps=conn.prepareStatement(sql);
		
			ps.setInt(1, Integer.valueOf(date));
			ps.setInt(2, Integer.valueOf(hour));
			ps.setString(3, insitecode);
			ps.setString(4, outsitecode);
			rs = ps.executeQuery();
			while(rs.next())
			{
				String inname=rs.getString("INNAME");
				String outname=rs.getString("OUTNAME");
				int value=rs.getInt("VALUE");
				
				Echarts ec=new Echarts(inname,outname,value);
				list.add(ec);
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		closeAll(rs, ps, conn);
		return list;
	}


//�����ܱ�С���վ����ͳ��
	
	
	@Override
	public  List<Echarts> getDatasInByHourForStatistics(String insitecode,String date,String beginhour,String endhour){
		List<Echarts> list=new ArrayList();
		Connection conn=null;
		PreparedStatement ps=null;
		ResultSet rs=null;
		conn=this.getConn();
		
	
	//String sql="select INNAME,OUTNAME,sum(VALUE) as VALUE from (select B.WDNAME AS INNAME,A.CUST_CNT AS VALUE,C.WDNAME AS OUTNAME FROM TBL_EDW_DM_ORBIT_HOUR_INSITE A,DSJ_WD B,(SELECT CODE,WDNAME FROM DSJ_WD) C WHERE C.CODE=A.OUT_SITE_CODE AND A.IN_SITE_CODE=B.CODE AND A.OD_DATE=? AND A.HOUR_ID=? AND A.IN_SITE_CODE LIKE ?||'%' AND A.OUT_SITE_CODE=?)  group by INNAME,OUTNAME order by value desc";
	String sql="select B.WDNAME AS INNAME,sum(A.CUST_CNT) AS VALUE FROM TBL_EDW_DM_ORBIT_HOUR_INSITE A,DSJ_WD B WHERE A.IN_SITE_CODE=B.CODE AND A.OD_DATE=? AND A.HOUR_ID>=? AND A.HOUR_ID<=? AND A.IN_SITE_CODE LIKE ?||'%' group by B.WDNAME";
		try {
			ps=conn.prepareStatement(sql);
		
			ps.setString(1,date);
			ps.setString(2, beginhour);
			ps.setString(3, endhour);
			ps.setString(4, insitecode);//��վ����
			rs = ps.executeQuery();
			while(rs.next())
			{
				String inname=rs.getString("INNAME");
				//String outname=rs.getString("OUTNAME");
				int value=rs.getInt("VALUE");
				
				Echarts ec=new Echarts(inname,null,value);
				list.add(ec);
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		finally{
			closeAll(rs, ps, conn);	
		}
			
		
		
		return list;
	}

}

