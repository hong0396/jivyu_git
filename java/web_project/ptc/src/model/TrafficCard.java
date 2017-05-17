package model;

public class TrafficCard {
	private String result;
	private String rechargeNum;
	private String rechargeAmt;	
	
	public TrafficCard() {
		super();
	}
	
	public TrafficCard(String result, String rechargeNum, String rechargeAmt) {
		super();
		this.result = result;
		this.rechargeNum = rechargeNum;
		this.rechargeAmt = rechargeAmt;
	}
	
	public String getResult() {
		return result;
	}
	public void setResult(String result) {
		this.result = result;
	}
	public String getRechargeNum() {
		return rechargeNum;
	}
	public void setRechargeNum(String rechargeNum) {
		this.rechargeNum = rechargeNum;
	}
	public String getRechargeAmt() {
		return rechargeAmt;
	}
	public void setRechargeAmt(String rechargeAmt) {
		this.rechargeAmt = rechargeAmt;
	}
	@Override
	public String toString() {
		return "{\"result\"=\"" + result + "\", \"rechargeNum\"=\"" + rechargeNum
				+ "\", \"rechargeAmt\"=\"" + rechargeAmt + "\"}";
	}

}
