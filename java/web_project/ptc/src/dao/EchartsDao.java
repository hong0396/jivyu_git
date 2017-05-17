package dao;

import java.util.List;

import model.Echarts;

public interface EchartsDao {
	//��վODͼ
	public abstract List<Echarts> getDatasIn(String id,String outcode,String date);
	//��վODͼ
	public abstract List<Echarts> getDatasOut(String insitecode,String outsitecode,String date);
	//��վODͼ����Сʱɸѡ��
	public abstract List<Echarts> getDatasInByHour(String id,String outcode,String date,String hour);
	//��վODͼ����Сʱɸѡ��
	public abstract List<Echarts> getDatasOutByHour(String insitecode,String outsitecode,String date,String hour);
	//�����ܱ�С����վ����ͳ��
	public abstract List<Echarts>getDatasInByHourForStatistics(String insitecode,String date,String beginhour,String endhour);
}
