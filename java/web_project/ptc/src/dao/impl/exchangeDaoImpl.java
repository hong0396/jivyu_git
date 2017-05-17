package dao.impl;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import model.Exchange;


import dao.BaseDao;
import dao.exchangeDao;

public class exchangeDaoImpl extends BaseDao implements exchangeDao {

	@Override
	public List<String> getexchangeDatas(String date) {		
				List<String>listresult=new ArrayList<String>();
				List<Exchange> list=new ArrayList<Exchange>();
				Connection conn=null;
				PreparedStatement ps=null;
				ResultSet rs=null;
				conn=this.getConn();
			
			
				
			String sql="select x.dm_date,y.lineno,listagg( x.station_name,',') within group(order by row_num) station_names, listagg( x.longitude,',')  within group(order by row_num) longitude, listagg( x.latitude, ',')  within group(order by row_num) latitude, listagg( x.cust_cnt, ',' )  within group(order by y.row_num ) cust_cnt from tbl_edw_dm_jiuting_people x,tbl_edw_dpa_dim_jiuting_path y where x.station_name=y.station_name and x.dm_date=? group by x.dm_date,y.lineno";	
				
					try {
					ps = conn.prepareStatement(sql);

					ps.setString(1,date);

					rs = ps.executeQuery();
					String names[];
					String[] lngs;
					String[] lats;
					String[] nums;
					String name;
					String lng;
					String lat;
					String num;
					String result;
					while (rs.next()) {
						list = new ArrayList<Exchange>();
						 names = rs.getString("STATION_NAMES").split(",");
						 lngs = rs.getString("LONGITUDE").split(",");
						 lats = rs.getString("LATITUDE").split(",");
						 nums = rs.getString("CUST_CNT").split(",");
						for (int i = 0; i < names.length; i++) {
							 name=names[i];
							 lng = lngs[i];
							 lat = lats[i];
							 num = nums[i];
							 Exchange ec = new Exchange(name, lng, lat, num);
							list.add(ec);
						}

					   // result = "[" + list + "]";
					    result = list.toString();
						listresult.add(result);

					}		
					}
					 
		catch (SQLException e) {

			e.printStackTrace();
			
		} finally {
			
			closeAll(rs, ps, conn);
			
		}
					
				return listresult;
	}

}
