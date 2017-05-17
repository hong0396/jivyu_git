package dao;

import java.util.List;


public interface BigEvent {
	
	
	public abstract List<String>getEventDatas(String date);
	
	
	public abstract List<String>getEventDatasBar(String date);

}
