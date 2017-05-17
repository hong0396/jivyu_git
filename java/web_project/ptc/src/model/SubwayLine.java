package model;

public class SubwayLine {
	private String result;
	private String inNum;
	private String outNum;
	@Override
	public String toString() {
		return "{\"result\"=\"" + result + "\", \"inNum\"=\"" + inNum
				+ "\", \"outNum\"=\"" + outNum + "\"}";
	}
	
	public SubwayLine() {
		super();
	}
	
	public SubwayLine(String result, String inNum, String outNum) {
		super();
		this.result = result;
		this.inNum = inNum;
		this.outNum = outNum;
	}
	
	public String getResult() {
		return result;
	}
	public void setResult(String result) {
		this.result = result;
	}
	public String getInNum() {
		return inNum;
	}
	public void setInNum(String inNum) {
		this.inNum = inNum;
	}
	public String getOutNum() {
		return outNum;
	}
	public void setOutNum(String outNum) {
		this.outNum = outNum;
	}

}
