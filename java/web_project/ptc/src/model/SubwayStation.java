package model;

public class SubwayStation {
	private String result;
	private String date;
	private String stationID;
	@Override
	public String toString() {
		return "{\"result\"=\"" + result + "\", \"date\"=\"" + date
				+ "\", \"stationID\"=\"" + stationID + "\"}";
	}
	
	public SubwayStation() {
		super();
	}
	
	public SubwayStation(String result, String date, String stationID) {
		super();
		this.result = result;
		this.date = date;
		this.stationID = stationID;
	}
	
	public String getResult() {
		return result;
	}
	public void setResult(String result) {
		this.result = result;
	}
	public String getDate() {
		return date;
	}
	public void setDate(String date) {
		this.date = date;
	}
	public String getStationID() {
		return stationID;
	}
	public void setStationID(String stationID) {
		this.stationID = stationID;
	}
	

}
