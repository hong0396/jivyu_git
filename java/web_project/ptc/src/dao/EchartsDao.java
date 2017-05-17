package dao;

import java.util.List;

import model.Echarts;

public interface EchartsDao {
	//进站OD图
	public abstract List<Echarts> getDatasIn(String id,String outcode,String date);
	//出站OD图
	public abstract List<Echarts> getDatasOut(String insitecode,String outsitecode,String date);
	//进站OD图（按小时筛选）
	public abstract List<Echarts> getDatasInByHour(String id,String outcode,String date,String hour);
	//出站OD图（按小时筛选）
	public abstract List<Echarts> getDatasOutByHour(String insitecode,String outsitecode,String date,String hour);
	//地铁周边小区进站人数统计
	public abstract List<Echarts>getDatasInByHourForStatistics(String insitecode,String date,String beginhour,String endhour);
}
