package dao.impl;

import java.io.IOException;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import util.State.response;

import model.BusNo;
import model.MetroTransit;
import model.SubwayLine;
import model.SubwayStation;
import model.TrafficCard;

import dao.BaseDao;

import dao.Interface;

public class InterfaceImpl extends BaseDao implements Interface{
	//1.公交线路的乘车数量查询
	public BusNo selectBusNo(String date,String startTime,String endTime,String busNO){
		// TODO Auto-generated method stub
	
		Connection conn=null;
		PreparedStatement ps=null;
		ResultSet rs=null;
		conn=this.getConn();

		//String sql="select sum(A.CUST_CNT) as custNum from tbl_edw_dm_bus_cust A,TBL_EDW_DPA_TIME_RANGE B where A.TIME_ID in (select TIME_ID from TBL_EDW_DPA_TIME_RANGE) and A.DM_DATE=? and B.BEGIN_RANGE>=? and B.END_RANGE<=? and A.BUS_CODE=?";
		String sql="select sum(A.CUST_CNT) as custNum from tbl_edw_dm_bus_cust A,TBL_EDW_DPA_TIME_RANGE C where A.TIME_ID =C.TIME_ID AND  A.DM_DATE=? and C.BEGIN_RANGE>=? and C.END_RANGE<=? and A.BUS_CODE=?";
			BusNo bn;
			String custNum = null;
			String result = null;
			try {
				ps=conn.prepareStatement(sql);

				ps.setString(1, date);
				ps.setString(2, startTime);
				
					ps.setString(3, endTime);
					ps.setString(4, busNO);
				
				rs = ps.executeQuery();
				bn = null;				
				while(rs.next())
				{
					 custNum=rs.getString("custNum");
					result="00";
					
				}
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			bn=new BusNo(result,custNum);
			closeAll(rs, ps, conn);
		return bn;
		
	}
	//2.交通卡地铁充资笔数与金额查询
	public   TrafficCard selectTrafficCard(String date,String stationID){
		Connection conn=null;
		PreparedStatement ps=null;
		ResultSet rs=null;
		conn=this.getConn();
		
		String sql="select A.TOTAL_TXNNUM AS rechargeNum,A.TOTAL_TXNAMT AS rechargeAmt from TBL_EDW_DM_CARD_DEPOSIT A where  A.TXNDATE=? AND A.WD_DM=?";
		TrafficCard bn = null;
		try {
			ps=conn.prepareStatement(sql);
			ps.setString(1, date);
			ps.setString(2, stationID);
			
			rs = ps.executeQuery();
		
			if(rs.next())
			{
				String 	rechargeNum=rs.getString("rechargeNum");
				String  rechargeAmt=rs.getString("rechargeAmt");
				String  result="00";
				bn=new TrafficCard(result,rechargeNum,rechargeAmt);
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		closeAll(rs, ps, conn);
		return bn;
		
	}
	//3.地铁线路的交通卡客流量查询
	public   SubwayLine selectSubwayLine(String date,String lineID){
		Connection conn=null;
		PreparedStatement ps=null;
		ResultSet rs=null;
		conn=this.getConn();
		
		String sql="select SUM(A.IN_CUST_CNT) AS inNum,SUM(A.OUT_CUST_CNT) AS outNum from tbl_edw_dm_orbit_site_cust A WHERE A.DM_DATE=? AND A.LINE_ID=?";
		SubwayLine sl = null;
		try {
			ps=conn.prepareStatement(sql);
			ps.setString(1, date);
			ps.setString(2, lineID);
			
			rs = ps.executeQuery();
		
			if(rs.next())
			{
				String 	inNum=rs.getString("inNum");
				String  outNum=rs.getString("outNum");
				String  result="00";
				sl=new SubwayLine(result,inNum,outNum);
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		closeAll(rs, ps, conn);
		return sl;
	}
	//4.地铁车站的进出客流查询
		public   SubwayStation selectSubwayStation(String date,String stationID){
			Connection conn=null;
			PreparedStatement ps=null;
			ResultSet rs=null;
			conn=this.getConn();
			
			String sql="select SUM(A.IN_CUST_CNT) AS inNum,SUM(A.OUT_CUST_CNT) AS outNum from tbl_edw_dm_orbit_site_cust A WHERE A.DM_DATE=? AND A.SITE_CODE=?";
			SubwayStation ss = null;
			try {
				ps=conn.prepareStatement(sql);
				ps.setString(1, date);
				ps.setString(2, stationID);
				
				rs = ps.executeQuery();
			
				if(rs.next())
				{
					String 	inNum=rs.getString("inNum");
					String  outNum=rs.getString("outNum");
					String  result="00";
					ss=new SubwayStation(result,inNum,outNum);
				}
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			closeAll(rs, ps, conn);
			return ss;
		}
		//5.地铁公交换乘数量查询
		public  MetroTransit selectMetroTransit(String date,String startHour,String endHour,String stationID){
			Connection conn=null;
			PreparedStatement ps=null;
			ResultSet rs=null;
			conn=this.getConn();
			
			String sql="select sum(cust_cnt) as exchangeNum from tbl_edw_dm_station_bus_cust where stat_code=? and od_date=? and ceil(time_id/12)>?  and ceil(time_id/12)<?";
			MetroTransit mt = null;
			response[] re=response.values();
			try {
				ps=conn.prepareStatement(sql);
				ps.setString(1, stationID);
				ps.setString(2, date);
				ps.setString(3, startHour);
				ps.setString(4, endHour);
				
				rs = ps.executeQuery();
			
				if(rs.next())
				{
					String 	exchangeNum=rs.getString("exchangeNum");
					
					String  result=re[1].toString();
					mt=new MetroTransit(result,exchangeNum);
				}
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			closeAll(rs, ps, conn);
			return mt;
		}

}
