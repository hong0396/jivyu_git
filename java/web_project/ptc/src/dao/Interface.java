package dao;



import model.BusNo;
import model.MetroTransit;
import model.SubwayLine;
import model.SubwayStation;
import model.TrafficCard;

public interface Interface {
	/**********************1.������·�ĳ˳�������ѯ****************************/
	public abstract  BusNo selectBusNo(String date,String startTime,String endTime,String busNO);
	/***********************2.��ͨ��������ʱ��������ѯ************************************/
	public abstract  TrafficCard selectTrafficCard(String date,String stationID);
	/*************************3.������·�Ľ�ͨ����������ѯ*****************************************************/
	public abstract SubwayLine selectSubwayLine(String date,String lineID);
	/************************4.����վ�Ľ��������ѯ*********************************************************/
	public abstract SubwayStation selectSubwayStation(String date,String stationID);
	/************************5.��������������ѯ**********************************************************/
	public abstract MetroTransit selectMetroTransit(String date,String startHour,String endHour,String stationID);
}
