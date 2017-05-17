package model;

public class Exchange {
	private String name;
	private String lng;
	private String lat;
	private String num;
	@Override
	public String toString() {
		return "{\"name\":\"" + name + "\", \"lng\":\"" + lng + "\", \"lat\":\"" + lat
				+ "\", \"num\":\"" + num + "\"}";
	}
	public Exchange(String name, String lng, String lat, String num) {
		super();
		this.name = name;
		this.lng = lng;
		this.lat = lat;
		this.num = num;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getLng() {
		return lng;
	}
	public void setLng(String lng) {
		this.lng = lng;
	}
	public String getLat() {
		return lat;
	}
	public void setLat(String lat) {
		this.lat = lat;
	}
	public String getNum() {
		return num;
	}
	public void setNum(String num) {
		this.num = num;
	}

}
