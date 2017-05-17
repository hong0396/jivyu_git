package dao.impl;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import util.StringUtil;


import model.ExchangePie;
import model.MapInfo;
import model.Od5Minute;
import model.SubwayPie;

import dao.BaseDao;
import dao.HeatmapDao;

public class HeatmapDaoImpl extends BaseDao implements HeatmapDao {
	//5分钟进站换乘比例
	@Override
			public  List<ExchangePie> AnalysisSubwayPieInBy5Minute(String sitecode,String date,String timeid){
		
				List<ExchangePie> list=new ArrayList();
				Connection conn=null;
				PreparedStatement ps=null;
				ResultSet rs=null;
				conn=this.getConn();
	// String sql="select B.WDNAME AS NAME,A.time_id as time,A.ld_cust_cnt,A.bus_cnt,  A.taix_cnt,  A.pr_cut,  A.non_change_cnt  from TBL_EDW_DM_PEP_CHANGE_IND_CUST A,DSJ_WD B  where  A.stat_code=B.CODE AND A.dm_date=?   and A.stat_code=?   and A.type='1' and  A.time_id>=? and  A.time_id<=? order by time";
	 String sql="select B.WDNAME AS NAME,A.END_RANGE AS TIME,nvl(A.ld_cust_cnt,0) AS LD_CUST_CNT,nvl(A.bus_cnt,0) AS BUS_CNT,nvl(A.taix_cnt,0) AS TAXI_CNT,nvl(A.pr_cnt,0) AS PR_CNT,nvl(A.non_change_cust,0)  AS NON_CHANGE_CNT from TBL_EDW_DM_PEP_CHANGE_IND_CUST A,DSJ_WD B  where  A.stat_code=B.CODE AND A.dm_date=? and A.stat_code=? and A.type='1' order by time";
				    String name1="轮渡流量";
					String name2="公交流量";
					String name3="出租流量";
					String name4="PR停车场流量";
					String name5="未换乘流量";
					try {
						ps=conn.prepareStatement(sql);

						ps.setString(1,date);
						
						ps.setString(2, sitecode);
					//	ps.setString(3, timeid);
					//	ps.setInt(4, Integer.parseInt(timeid)+24);
						
						rs = ps.executeQuery();
						while(rs.next())
						{
							
							//String cust_cnt=rs.getString("CUST_CNT");
							String ld_cust_cnt=rs.getString("LD_CUST_CNT");
							String bus_cnt=rs.getString("BUS_CNT");
							String taix_cnt=rs.getString("TAXI_CNT");
							String pr_cut=rs.getString("PR_CNT");
							String non_change_cnt=rs.getString("NON_CHANGE_CNT");							
							String timeids=rs.getString("TIME");
							
						
							ExchangePie ec=new ExchangePie(name1,name2,name3,name4,name5,ld_cust_cnt,bus_cnt,taix_cnt,pr_cut,non_change_cnt,timeids);
							list.add(ec);
							
						}			
					}
					 
					 catch (SQLException e) {
					
						e.printStackTrace();
					}
						
					closeAll(rs, ps, conn);
				
				return list;
			}		
			//5分钟出站换乘比例
	@Override
			public  List<ExchangePie> AnalysisSubwayPieOutBy5Minute(String sitecode,String date,String timeid){
				
		List<ExchangePie> list=new ArrayList();
		Connection conn=null;
		PreparedStatement ps=null;
		ResultSet rs=null;
		conn=this.getConn();
		//String sql="select B.WDNAME AS NAME,A.time_id as time,A.ld_cust_cnt,A.bus_cnt,  A.taix_cnt,  A.pr_cut,  A.non_change_cnt  from TBL_EDW_DM_PEP_CHANGE_IND_CUST A,DSJ_WD B  where  A.stat_code=B.CODE AND A.dm_date=?   and A.stat_code=?   and A.type='2' and  A.time_id>=? and  A.time_id<=? order by time";
		   String sql="select B.WDNAME AS NAME,A.END_RANGE AS TIME,nvl(A.ld_cust_cnt,0) AS LD_CUST_CNT,nvl(A.bus_cnt,0) AS BUS_CNT,nvl(A.taix_cnt,0) AS TAXI_CNT,nvl(A.pr_cnt,0) AS PR_CNT,nvl(A.non_change_cust,0)  AS NON_CHANGE_CNT from TBL_EDW_DM_PEP_CHANGE_IND_CUST A,DSJ_WD B  where  A.stat_code=B.CODE AND A.dm_date=?  and A.stat_code=?   and A.type='2'order by time";
		    String name1="轮渡流量";
			String name2="公交流量";
			String name3="出租流量";
			String name4="PR停车场流量";
			String name5="未换乘流量";
			try {
				ps=conn.prepareStatement(sql);

				ps.setString(1,date);
				
				ps.setString(2, sitecode);
			//	ps.setString(3, timeid);
			//	ps.setInt(4, Integer.parseInt(timeid)+24);
				
				rs = ps.executeQuery();
				while(rs.next())
				{
					
					//String cust_cnt=rs.getString("CUST_CNT");
					String ld_cust_cnt=rs.getString("LD_CUST_CNT");
					String bus_cnt=rs.getString("BUS_CNT");
					String taix_cnt=rs.getString("TAXI_CNT");
					String pr_cut=rs.getString("PR_CNT");
					String non_change_cnt=rs.getString("NON_CHANGE_CNT");							
					String timeids=rs.getString("TIME");
					
					ExchangePie ec=new ExchangePie(name1,name2,name3,name4,name5,ld_cust_cnt,bus_cnt,taix_cnt,pr_cut,non_change_cnt,timeids);
					list.add(ec);
					
					
				}			
			}
			 
			 catch (SQLException e) {
			
				e.printStackTrace();
			}
				
			closeAll(rs, ps, conn);
		
		return list;
				
			}
	//获取热力图流量
	@Override
	public List<String> getHeatmapData(String sitecode,String date,String hour) {
		// TODO Auto-generated method stub
		date="20150302";
		List<String>listresult=new ArrayList<String>();
		List<MapInfo> list=new ArrayList<MapInfo>();
		Connection conn=null;
		PreparedStatement ps=null;
		ResultSet rs=null;
		conn=this.getConn();
	
	
	//String sql="select A.HOUR_ID AS HOUR,B.LONGTITUDE AS LNG,B.LATITUDE AS LAT,SUM(A.CUST_CNT) AS COUNT  FROM TBL_EDW_DM_ORB_POS_INSITE_H A,POS_INSITE B WHERE A.POS_ID=B.POS_ID AND A.OD_DATE=? GROUP BY B.LONGTITUDE,B.LATITUDE,A.HOUR_ID ORDER BY HOUR";	
	String sql="select a.END_RANGE AS HOUR,LISTAGG(a.LON_NAME,',') WITHIN GROUP (order by a.END_RANGE) AS LNG,LISTAGG(a.LAT_NAME,',') WITHIN GROUP (order by a.END_RANGE) AS LAT,LISTAGG(a.CUST_CNT,',') WITHIN GROUP (order by a.END_RANGE) AS COUNT from tbl_edw_dm_coo a WHERE a.DM_DATE='20150401' GROUP BY a.END_RANGE";	
		
			try {
			ps = conn.prepareStatement(sql);

			//ps.setString(1, date);
			// ps.setString(2, hour);
			// ps.setString(3, sitecode);

			rs = ps.executeQuery();
			String hours;
			String[] lngs=null;
			String[] lats;
			String[] counts;
			String lng;
			String lat;
			String count;
			String result;
			while (rs.next()) {
				list = new ArrayList<MapInfo>();
				 hours = rs.getString("HOUR");
				 lngs = rs.getString("LNG").split(",");
				 lats = rs.getString("LAT").split(",");
				 counts = rs.getString("COUNT").split(",");
				for (int i = 0; i < lngs.length; i++) {
					 lng = lngs[i];
					 lat = lats[i];
					 count = counts[i];
					MapInfo ec = new MapInfo(hours, lng, lat, count);
					list.add(ec);
				}

			    result = "[\"" + hours + "\"" + "," + list + "]";
				listresult.add(result);

			}		
			}
			 
			 catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
				
			
			closeAll(rs, ps, conn);
		return listresult;
	}
	  //获取5分钟公交换乘地铁小地图的数据
	@Override
    public  List<String>getBus5MinuteData(String date){
	
		  
		   List<String>listresult=new ArrayList<String>();
				List<Od5Minute> list=new ArrayList<Od5Minute>();
				Connection conn=null;
				PreparedStatement ps=null;
				ResultSet rs=null;
				conn=this.getConn();

		String sql="select a.times,LISTAGG(a.inname,',') WITHIN GROUP (order by times) as inname,LISTAGG(a.outname,',') WITHIN GROUP (order by times) as outname,LISTAGG(a.num,',')  WITHIN GROUP (order by times) as num from (select time_id as times,trim(bus_name) as inname,trim(posid) as outname,sum(cust_cnt) as num from viw_pepole_bus_change where dm_date=? and  time_id>='64' and time_id<='277' group by time_id,bus_name,posid) a group by times";
			try {
					ps=conn.prepareStatement(sql);
				
					ps.setString(1, date);				
				
					rs = ps.executeQuery();
					String timeids;
					String instation;
					String outstation;
					String value;
					String result;
					String hour;
					String minute;
					Od5Minute ec=null;
					while(rs.next())
					{   list=new ArrayList<Od5Minute>();  
						 timeids=rs.getString("TIMES");
						String[] inname=rs.getString("INNAME").split(",");
						String[] outname=rs.getString("OUTNAME").split(",");
						String[] values=rs.getString("NUM").split(",");
						for( int i=0;i<inname.length;i++){
							instation=StringUtil.isNotEmpty(inname[i])?inname[i]:null;
							outstation=StringUtil.isNotEmpty(outname[i])?outname[i]:null;
							value=StringUtil.isNotEmpty(values[i])?values[i]:null;
							 ec=new Od5Minute(instation,outstation,value);
							list.add(ec);							
						}						
						switch(Integer.valueOf(timeids)/12)
						{
						case 0:		hour=	"00"; break;
						case 1:		hour=	"01"; break;
						case 2:		hour=	"02"; break;
						case 3:		hour=	"03"; break;
						case 4:		hour=	"04"; break;
						case 5:		hour=	"05"; break;
						case 6:		hour=	"06"; break;
						case 7:		hour=	"07"; break;
						case 8:		hour=	"08"; break;
						case 9:		hour=	"09"; break;
						default:    hour=	String.valueOf(Integer.parseInt(timeids)/12); break;					
						}	
						switch((Integer.valueOf(timeids)*5)%60)
						{
						case 0:		minute=	"00"; break;
						case 5:		minute=	"05"; break;
						default:    minute=	String.valueOf((Integer.parseInt(timeids)*5)%60);					
						}						
						timeids=hour+":"+minute;
						result = "[\"" +timeids+"\"" + "," + list + "]";
						listresult.add(result);
					}
				} catch (SQLException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
		} 
			finally {
			closeAll(rs, ps, conn);
		}

		return listresult;		
		
		
	}

}
