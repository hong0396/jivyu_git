package model;

public class Od5Minute {
	private String inname;
	private String outname;
	private String value;	
	@Override
	public String toString() {
	/*	return "{inname=" + inname + ", outname=" + outname
				+ ", value=" + value + ", timeid=" + timeid + "}";
				[{\"inname\":\""+inname+"\"},{\"outname\":\""+outname+"\",\"value\":\""+value+"\"}]
	*/	
		//return "{\"inname\":\""+inname+"\",\"outname\":\""+outname+"\",\"value\":\""+value+"\",\"timeid\":\""+timeid+"\"}";
		return "["+"{\"name\":\""+inname+"\"}"+","+"{\"name\":\""+outname+"\",\"value\":\""+value+"\"}"+"]";
	}
	public Od5Minute() {
		super();
	}
	public Od5Minute(String inname, String outname, String value) {
		super();
		this.inname = inname;
		this.outname = outname;
		this.value = value;
		
	}
	public String getInname() {
		return inname;
	}
	public void setInname(String inname) {
		this.inname = inname;
	}
	public String getOutname() {
		return outname;
	}
	public void setOutname(String outname) {
		this.outname = outname;
	}
	public String getValue() {
		return value;
	}
	public void setValue(String value) {
		this.value = value;
	}	

}
