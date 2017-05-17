package model;

public class MetroTransit {
	private String result;
	private String exchangeNum;
	public String getResult() {
		return result;
	}
	public void setResult(String result) {
		this.result = result;
	}
	public String getExchangeNum() {
		return exchangeNum;
	}
	public void setExchangeNum(String exchangeNum) {
		this.exchangeNum = exchangeNum;
	}
	
	public MetroTransit(String result, String exchangeNum) {
		super();
		this.result = result;
		this.exchangeNum = exchangeNum;
	}
	
	public MetroTransit() {
		super();
	}
	
	@Override
	public String toString() {
		return "{\"result\"=\"" + result + "\", \"exchangeNum\"=\""
				+ exchangeNum + "\"}";
	}
	

}
