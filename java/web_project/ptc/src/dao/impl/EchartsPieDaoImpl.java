package dao.impl;

import java.io.IOException;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import model.Echarts;
import model.SubwayPie;
import dao.BaseDao;
import dao.EchartsPieDao;

public class EchartsPieDaoImpl extends BaseDao implements EchartsPieDao {

	@Override
	public List<SubwayPie> AnalysisSubwayPieInByHour(String sitecode, String date) {
		// TODO Auto-generated method stub
		List<SubwayPie> list=new ArrayList();
		Connection conn=null;
		PreparedStatement ps=null;
		ResultSet rs=null;
		conn=this.getConn();
	//String sql="select DISTINCT A.CHANGE_CUST_CNT AS VALUE,A.CUST_CNT AS TOTAL,B.WDNAME AS NAME FROM viw_in_station_bus_statistics A,DSJ_WD B WHERE B.CODE=A.STAT_CODE AND A.DM_DATE=? AND A.HOUR_ID=? AND A.STAT_CODE =?";
	String sql="select DISTINCT A.CHANGE_CUST_CNT AS VALUE,A.CUST_CNT AS TOTAL,B.WDNAME AS NAME,A.HOUR_ID as HOUR FROM viw_in_station_bus_statistics A,DSJ_WD B WHERE B.CODE=A.STAT_CODE AND A.DM_DATE=? AND A.STAT_CODE=? GROUP BY A.HOUR_ID,A.CUST_CNT,B.WDNAME,A.CHANGE_CUST_CNT order by HOUR";
	
			String ptotal="";
			String name1="公交流量";
			String name2="地铁流量";
			try {
				ps=conn.prepareStatement(sql);

				ps.setString(1,date);
				//ps.setString(2, hour);
				ps.setString(2, sitecode);
				
				rs = ps.executeQuery();
				while(rs.next())
				{
					//String name=rs.getString("NAME");
					String total=rs.getString("TOTAL");
					String value=rs.getString("VALUE");
					String hours=rs.getString("HOUR");
					if(value!=""&&value!=null)
					ptotal=String.valueOf((Integer.parseInt(total)-Integer.parseInt(value)));
					
					SubwayPie ec=new SubwayPie(name1,total,value,hours);
					list.add(ec);
					SubwayPie fc=new SubwayPie(name2,total,ptotal,hours);
					list.add(fc);
					
				}			
			}
			 
			 catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
				
			closeAll(rs, ps, conn);
		System.out.println(list);
		return list;
	}
	@Override
	public List<SubwayPie> AnalysisSubwayPieOutByHour(String sitecode,String date){
		// TODO Auto-generated method stub
				List<SubwayPie> list=new ArrayList();
				Connection conn=null;
				PreparedStatement ps=null;
				ResultSet rs=null;
				conn=this.getConn();
			//String sql="select distinct A.CHANGE_CUST_CNT AS VALUE,A.CUST_CNT AS TOTAL,B.WDNAME AS NAME  FROM VIW_OUT_STATION_BUS_STATISTICS A,DSJ_WD B WHERE B.CODE=A.STAT_CODE AND A.DM_DATE=? AND A.HOUR_ID=? AND A.STAT_CODE=?";
				String sql="select DISTINCT A.CHANGE_CUST_CNT AS VALUE,A.CUST_CNT AS TOTAL,B.WDNAME AS NAME,A.HOUR_ID as HOUR FROM viw_out_station_bus_statistics A,DSJ_WD B WHERE B.CODE=A.STAT_CODE AND A.DM_DATE=? AND A.STAT_CODE=? GROUP BY A.HOUR_ID,A.CUST_CNT,B.WDNAME,A.CHANGE_CUST_CNT order by HOUR";
			
					String ptotal="";
					String name1="公交流量";
					String name2="地铁流量";
					try {
						ps=conn.prepareStatement(sql);

						ps.setString(1,date);
						//ps.setString(2, hour);
						ps.setString(2, sitecode);
						
						rs = ps.executeQuery();
						while(rs.next())
						{
							//String name=rs.getString("NAME");
							String total=rs.getString("TOTAL");
							String value=rs.getString("VALUE");
							String hours=rs.getString("HOUR");
							if(value!=""&&value!=null)
							ptotal=String.valueOf((Integer.parseInt(total)-Integer.parseInt(value)));
							
							SubwayPie ec=new SubwayPie(name1,total,value,hours);
							list.add(ec);
							SubwayPie fc=new SubwayPie(name2,total,ptotal,hours);
							list.add(fc);
							
						}			
					}
					 
					 catch (SQLException e) {
						// TODO Auto-generated catch block
						e.printStackTrace();
					}
						
					
					closeAll(rs, ps, conn);
				return list;
	}
	@Override
	public List<SubwayPie> AnalysisSubwayPieInByDay(String sitecode, String date) {
		// TODO Auto-generated method stub
		List<SubwayPie> list=new ArrayList();
		Connection conn=null;
		PreparedStatement ps=null;
		ResultSet rs=null;
		conn=this.getConn();
	String sql="SELECT SUM(VALUE) AS VALUE,SUM(TOTAL) AS TOTAL,NAME AS NAME FROM (select A.CHANGE_CUST_CNT AS VALUE,A.CUST_CNT AS TOTAL,B.WDNAME AS NAME FROM VIW_IN_STATION_BUS_STATISTICS A,DSJ_WD B WHERE B.CODE=A.STAT_CODE AND A.DM_DATE=? AND A.STAT_CODE=?)GROUP BY NAME order by value desc";
	
	
			String ptotal="";
			String name1="公交流量";
			String name2="地铁流量";
			try {
				ps=conn.prepareStatement(sql);

				ps.setString(1,date);
				
				ps.setString(2, sitecode);
				
				rs = ps.executeQuery();
				while(rs.next())
				{
					//String name=rs.getString("NAME");
					String total=rs.getString("TOTAL");
					String value=rs.getString("VALUE");
					//String hours=rs.getString("HOUR");
					if(value!=""&&value!=null)
					ptotal=String.valueOf((Integer.parseInt(total)-Integer.parseInt(value)));
					
					SubwayPie ec=new SubwayPie(name1,total,value,null);
					list.add(ec);
					SubwayPie fc=new SubwayPie(name2,total,ptotal,null);
					list.add(fc);
					
				}			
			}
			 
			 catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
				
			closeAll(rs, ps, conn);
		
		return list;
	}
	@Override
	public List<SubwayPie> AnalysisSubwayPieOutByDay(String sitecode,String date){
		// TODO Auto-generated method stub
				List<SubwayPie> list=new ArrayList();
				Connection conn=null;
				PreparedStatement ps=null;
				ResultSet rs=null;
				conn=this.getConn();
			String sql="SELECT SUM(VALUE) AS VALUE,SUM(TOTAL) AS TOTAL,NAME AS NAME FROM (select A.CHANGE_CUST_CNT AS VALUE,A.CUST_CNT AS TOTAL,B.WDNAME AS NAME FROM VIW_OUT_STATION_BUS_STATISTICS A,DSJ_WD B WHERE B.CODE=A.STAT_CODE AND A.DM_DATE=? AND A.STAT_CODE=?)GROUP BY NAME order by value desc";
			
			
					String ptotal="";
					String name1="公交流量";
					String name2="地铁流量";
					try {
						ps=conn.prepareStatement(sql);

						ps.setString(1,date);
					
						ps.setString(2, sitecode);
						
						rs = ps.executeQuery();
						while(rs.next())
						{
							//String name=rs.getString("NAME");
							String total=rs.getString("TOTAL");
							String value=rs.getString("VALUE");
							//String hours=rs.getString("HOUR");
							if(value!=""&&value!=null)
							ptotal=String.valueOf((Integer.parseInt(total)-Integer.parseInt(value)));
							
							SubwayPie ec=new SubwayPie(name1,total,value,null);
							list.add(ec);
							SubwayPie fc=new SubwayPie(name2,total,ptotal,null);
							list.add(fc);
							
						}			
					}
					 
					 catch (SQLException e) {
						// TODO Auto-generated catch block
						e.printStackTrace();
					}
						
					
					closeAll(rs, ps, conn);
				return list;
	}
	@Override
	public List<SubwayPie> AnalysisSubwayPieInByMonth(String sitecode, String date) {
		// TODO Auto-generated method stub
		List<SubwayPie> list=new ArrayList();
		Connection conn=null;
		PreparedStatement ps=null;
		ResultSet rs=null;
		conn=this.getConn();
	String sql="SELECT SUM(VALUE) AS VALUE,SUM(TOTAL) AS TOTAL,NAME AS NAME FROM (select A.CHANGE_CUST_CNT AS VALUE,A.CUST_CNT AS TOTAL,B.WDNAME AS NAME FROM VIW_IN_STATION_BUS_STATISTICS A,DSJ_WD B WHERE B.CODE=A.STAT_CODE AND A.DM_DATE  like ?||'%' AND A.STAT_CODE=?)GROUP BY NAME order by value desc";
	
	
			String ptotal="";
			String name1="公交流量";
			String name2="地铁流量";
			try {
				ps=conn.prepareStatement(sql);

				ps.setString(1,date);
				
				ps.setString(2, sitecode);
				
				rs = ps.executeQuery();
				while(rs.next())
				{
					//String name=rs.getString("NAME");
					String total=rs.getString("TOTAL");
					String value=rs.getString("VALUE");
					//String hours=rs.getString("HOUR");
					if(value!=""&&value!=null)
					ptotal=String.valueOf((Integer.parseInt(total)-Integer.parseInt(value)));
					
					SubwayPie ec=new SubwayPie(name1,total,value,null);
					list.add(ec);
					SubwayPie fc=new SubwayPie(name2,total,ptotal,null);
					list.add(fc);
					
				}			
			}
			 
			 catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
				
			
			closeAll(rs, ps, conn);
		return list;
	}
	@Override
	public List<SubwayPie> AnalysisSubwayPieOutByMonth(String sitecode,String date){
		// TODO Auto-generated method stub
				List<SubwayPie> list=new ArrayList();
				Connection conn=null;
				PreparedStatement ps=null;
				ResultSet rs=null;
				conn=this.getConn();
			String sql="SELECT SUM(VALUE) AS VALUE,SUM(TOTAL) AS TOTAL,NAME AS NAME FROM (select A.CHANGE_CUST_CNT AS VALUE,A.CUST_CNT AS TOTAL,B.WDNAME AS NAME FROM VIW_OUT_STATION_BUS_STATISTICS A,DSJ_WD B WHERE B.CODE=A.STAT_CODE AND A.DM_DATE like ?||'%' AND A.STAT_CODE=?)GROUP BY NAME order by value desc";
			
			
					String ptotal="";
					String name1="公交流量";
					String name2="地铁流量";
					try {
						ps=conn.prepareStatement(sql);

						ps.setString(1,date);
					
						ps.setString(2, sitecode);
						
						rs = ps.executeQuery();
						while(rs.next())
						{
							//String name=rs.getString("NAME");
							String total=rs.getString("TOTAL");
							String value=rs.getString("VALUE");
							//String hours=rs.getString("HOUR");
							if(value!=""&&value!=null)
							ptotal=String.valueOf((Integer.parseInt(total)-Integer.parseInt(value)));
							
							SubwayPie ec=new SubwayPie(name1,total,value,null);
							list.add(ec);
							SubwayPie fc=new SubwayPie(name2,total,ptotal,null);
							list.add(fc);
							
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
