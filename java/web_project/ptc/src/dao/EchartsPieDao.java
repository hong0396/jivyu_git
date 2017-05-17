package dao;

import java.util.List;

import model.SubwayPie;

public interface EchartsPieDao {
	//Сʱ�ν�վ���˱���
	public abstract List<SubwayPie> AnalysisSubwayPieInByHour(String sitecode,String date);
	
	//Сʱ�γ�վ���˱���
	public abstract List<SubwayPie> AnalysisSubwayPieOutByHour(String sitecode,String date);
	//�վ���վ���˱���
		public abstract List<SubwayPie> AnalysisSubwayPieInByDay(String sitecode,String date);
		
		//�վ���վ���˱���
		public abstract List<SubwayPie> AnalysisSubwayPieOutByDay(String sitecode,String date);
		//�¾���վ���˱���
				public abstract List<SubwayPie> AnalysisSubwayPieInByMonth(String sitecode,String date);
				
				//�¾���վ���˱���
				public abstract List<SubwayPie> AnalysisSubwayPieOutByMonth(String sitecode,String date);
}
