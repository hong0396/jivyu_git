package model;

public class geoCoord {
	public String name;
	public String lat;
	public String lng;
	@Override
	public String toString() {
		return "geoCoord [name=" + name + ", lat=" + lat + ", lng=" + lng + "]";
	}
	public geoCoord() {
		super();
	}
	public geoCoord(String name, String lat, String lng) {
		super();
		this.name = name;
		this.lat = lat;
		this.lng = lng;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getLat() {
		return lat;
	}
	public void setLat(String lat) {
		this.lat = lat;
	}
	public String getLng() {
		return lng;
	}
	public void setLng(String lng) {
		this.lng = lng;
	}
	
	

}
