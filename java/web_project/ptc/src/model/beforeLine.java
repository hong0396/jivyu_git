package model;

public class beforeLine {
	private String time;
	private String realvalue;
	private String predictvalue;
	

	@Override
	public String toString() {
		return "[\"" + time + "\", \"" + realvalue + "\", \"" + predictvalue + "\"]";
	}
	
	public beforeLine() {
		super();
	}
	
	public beforeLine(String time, String realvalue,String predictvalue) {
		super();
		this.time = time;
		this.realvalue = realvalue;
		this.predictvalue=predictvalue;
	}
	
	public String getTime() {
		return time;
	}
	public void setTime(String time) {
		this.time = time;
	}
	public String getRealvalue() {
		return realvalue;
	}
	public void setRealvalue(String realvalue) {
		this.realvalue = realvalue;
	}
	public String getPredictvalue() {
		return predictvalue;
	}

	public void setPredictvalue(String predictvalue) {
		this.predictvalue = predictvalue;
	}
	

}
