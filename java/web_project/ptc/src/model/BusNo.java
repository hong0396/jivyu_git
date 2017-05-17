package model;

public class BusNo {
	private String result;
	private String custNum;
	
	
	public BusNo() {
		super();
	}
	
	public BusNo(String result, String custNum) {
		super();
		this.result = result;
		this.custNum = custNum;
	}
	
	public String getResult() {
		return result;
	}
	public void setResult(String result) {
		this.result = result;
	}
	public String getCustNum() {
		return custNum;
	}
	public void setCustNum(String custNum) {
		this.custNum = custNum;
	}
	@Override
	public String toString() {
		return "[\"result\":\"" + result + "\", \"custNum\":\"" + custNum + "\"]";
	}

}
