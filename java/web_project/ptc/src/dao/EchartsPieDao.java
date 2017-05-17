package dao;

import java.util.List;

import model.SubwayPie;

public interface EchartsPieDao {
	//小时段进站换乘比例
	public abstract List<SubwayPie> AnalysisSubwayPieInByHour(String sitecode,String date);
	
	//小时段出站换乘比例
	public abstract List<SubwayPie> AnalysisSubwayPieOutByHour(String sitecode,String date);
	//日均进站换乘比例
		public abstract List<SubwayPie> AnalysisSubwayPieInByDay(String sitecode,String date);
		
		//日均出站换乘比例
		public abstract List<SubwayPie> AnalysisSubwayPieOutByDay(String sitecode,String date);
		//月均进站换乘比例
				public abstract List<SubwayPie> AnalysisSubwayPieInByMonth(String sitecode,String date);
				
				//月均出站换乘比例
				public abstract List<SubwayPie> AnalysisSubwayPieOutByMonth(String sitecode,String date);
}
