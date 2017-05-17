package model;

public class SubwayPie {
	private String NAME;
	private String TOTAL;
	private String VALUE;
	private String HOUR;
	



	@Override
	public String toString() {
		return "{ \"VALUE\":\""
				+ VALUE + "\",\"NAME\":\"" + NAME + "\",\"HOUR\":\""+HOUR+"\"}";
	}
	
	
	
	public SubwayPie() {
		super();
	}
	
	public SubwayPie(String nAME, String tOTAL, String vALUE,String hOUR) {
		super();
		NAME = nAME;
		TOTAL = tOTAL;
		VALUE = vALUE;
		HOUR=hOUR;
	}
	
	public String getNAME() {
		return NAME;
	}
	public void setNAME(String nAME) {
		NAME = nAME;
	}
	public String getTOTAL() {
		return TOTAL;
	}
	public void setTOTAL(String tOTAL) {
		TOTAL = tOTAL;
	}
	public String getVALUE() {
		return VALUE;
	}
	public void setVALUE(String vALUE) {
		VALUE = vALUE;
	}
	public String getHOUR() {
		return HOUR;
	}
	public void setHOUR(String hOUR) {
		HOUR = hOUR;
	}
	
}
