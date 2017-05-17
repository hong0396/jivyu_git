package model;

public class MapInfo {
private String	lng;
private String lat;
private String count;
private String hour;
@Override
public String toString() {
	return "{\"hour\":\"" + hour + "\",\"lng\":\"" + lng + "\", \"lat\":\"" + lat + "\", \"count\":\"" + count + "\"}";
}/*
public String toString() {
	return "[" + lng + ", " + lat + ", " + count + "]";
}*/
public MapInfo() {
	super();
}

public MapInfo(String hour,String lng, String lat, String count) {
	super();
	this.lng = lng;
	this.lat = lat;
	this.count = count;
	this.hour=hour;
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
public String getCount() {
	return count;
}
public void setCount(String count) {
	this.count = count;
}
public String getHour() {
	return hour;
}
public void setHour(String hour) {
	this.hour = hour;
}

}
