package dao;

import java.util.List;


import model.ExchangePie;


public interface HeatmapDao {
	//5���ӽ�վ���˱���
		public abstract List<ExchangePie> AnalysisSubwayPieInBy5Minute(String sitecode,String date,String timeid);		
		//5���ӳ�վ���˱���
		public abstract List<ExchangePie> AnalysisSubwayPieOutBy5Minute(String sitecode,String date,String timeid);
		//��ȡ����ͼ����
       public abstract List<String>getHeatmapData(String sitecode,String date,String timeid);
       
       //��ȡ5���ӹ������˵���С��ͼ�����
       public abstract List<String>getBus5MinuteData(String date);
   
}
