package dao.impl;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import util.StringUtil;


import model.Event;

import dao.BaseDao;
import dao.BigEvent;

public class BigEventImpl extends BaseDao implements BigEvent {

	@Override
	public List<String> getEventDatas(String date) {
	//	public Map<String,List<Object>> getEventDatas(String date) {	
		//Map<String,List<Object>> map=new  LinkedHashMap<String,List<Object>>();
		List<String> resultlist=new ArrayList<String>();
		List<Object> list=new ArrayList<Object>();
		Connection conn=null;
		PreparedStatement ps=null;
		ResultSet rs=null;
		conn=this.getConn();
		String sql="select a.END_RANGE AS TIMES,LISTAGG(b.STATION_NAME,',') WITHIN GROUP (order by a.STATION_ID) AS STATIONS,LISTAGG(nvl(a.TOTAL_CNT,0),',') WITHIN GROUP (order by a.STATION_ID) AS NUM FROM tbl_edw_ats_quater_cust a,TBL_EDW_DPA_DIM_LINE_STATION b WHERE a.STATION_ID=b.STATION_ID and A.DATA_FLAG='1' AND a.DM_DATE=? AND a.BEGIN_RANGE>='063000' AND a.END_RANGE<='234500' GROUP BY a.END_RANGE";
		
		try {
			ps=conn.prepareStatement(sql);
		
			
			ps.setString(1, date);
			rs = ps.executeQuery();
			String result="";
			String stationname="";
			String value="";
			Event ec=new Event();
			while(rs.next())
			{
				list=new ArrayList<Object>();
				String times=rs.getString("TIMES");
				String[] stationnames=rs.getString("STATIONS").split(",");
				String[] values=rs.getString("NUM").split(",");
				
				for(int i=0;i<stationnames.length;i++){
					
					stationname=StringUtil.isNotEmpty(stationnames[i])?stationnames[i]:null;
				    value=StringUtil.isNotEmpty(values[i])?values[i]:null;
				    ec=new Event(stationname,value);
					list.add(ec);
					
				}			
				result = "[\"" +times+"\"" + "," + list + "]";
				resultlist.add(result);
				//map.put(times, list);
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		finally{
			
			closeAll(rs, ps, conn);
		}
		
		
		return resultlist;
		
	}
	
	@Override
	public List<String> getEventDatasBar(String date) {	
		List<String> resultlist=new ArrayList<String>();
		List<Object> list=new ArrayList<Object>();
		Connection conn=null;
		PreparedStatement ps=null;
		ResultSet rs=null;
		conn=this.getConn();
		String sql="select a.END_RANGE AS TIMES,LISTAGG(b.STATION_NAME,',') WITHIN GROUP (order by a.IN_CUST_CNT desc) as NAMES,LISTAGG(nvl(a.IN_CUST_CNT,0),',') WITHIN GROUP (order by a.IN_CUST_CNT desc) as NUM from tbl_edw_ats_in_qua_cust a,TBL_EDW_DPA_DIM_LINE_STATION b where a.STATION_ID=b.STATION_ID AND a.BEGIN_RANGE>='063000' AND a.END_RANGE<='234500' and a.DM_DATE=? GROUP BY a.END_RANGE";
		
		try {
			ps=conn.prepareStatement(sql);
		
			
			ps.setString(1, date);
			rs = ps.executeQuery();
			String result="";
			String stationname="";
			String value="";
			Event ec=new Event();
			while(rs.next())
			{
				list=new ArrayList<Object>();
				String times=rs.getString("TIMES");
				String[] stationnames=rs.getString("NAMES").split(",");
				String[] values=rs.getString("NUM").split(",");
				
				for(int i=0;i<stationnames.length;i++){
					
					stationname=StringUtil.isNotEmpty(stationnames[i])?stationnames[i]:null;
				    value=StringUtil.isNotEmpty(values[i])?values[i]:null;
				    ec=new Event(stationname,value);
					list.add(ec);
					
				}			
				result = "[\"" +times+"\"" + "," + list + "]";
				resultlist.add(result);
				//map.put(times, list);
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		finally{
			
			closeAll(rs, ps, conn);
		}
		
		
		return resultlist;
		
	}

}
