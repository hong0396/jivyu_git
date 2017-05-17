package model;

public class ExchangePie {
	private String name1;
	private String ld_cust_cnt;
	private	String name2;
	private String bus_cnt;
	private	String name3;
	private String taix_cnt;
	private	String name4;
	private String pr_cut;
	private	String name5;	
	private String non_change_cnt;
	private String timeids;
	@Override
	public String toString() {
		return "[{name1:" + name1 + ", ld_cust_cnt:" + ld_cust_cnt
				+ ",timeids:" + timeids	+ "},{ name2:" + name2 + ", bus_cnt:" + bus_cnt + ",timeids:" + timeids	+ "}, {name3:"
				+ name3 + ", taix_cnt:" + taix_cnt + ",timeids:" + timeids	+ "},{ name4:" + name4
				+ ", pr_cut:" + pr_cut + ",timeids:" + timeids	+ "},{ name5:" + name5
				+ ", non_change_cnt:" + non_change_cnt + ",timeids:" + timeids	+ "}]";
	}

	public ExchangePie(String name1, String name2, String name3, String name4,
			String name5, String ld_cust_cnt, String bus_cnt, String taix_cnt,
			String pr_cut, String non_change_cnt, String timeids) {
		super();
		this.name1 = name1;
		this.name2 = name2;
		this.name3 = name3;
		this.name4 = name4;
		this.name5 = name5;
		this.ld_cust_cnt = ld_cust_cnt;
		this.bus_cnt = bus_cnt;
		this.taix_cnt = taix_cnt;
		this.pr_cut = pr_cut;
		this.non_change_cnt = non_change_cnt;
		this.timeids = timeids;
	}
	
	public String getName1() {
		return name1;
	}
	public void setName1(String name1) {
		this.name1 = name1;
	}
	public String getName2() {
		return name2;
	}
	public void setName2(String name2) {
		this.name2 = name2;
	}
	public String getName3() {
		return name3;
	}
	public void setName3(String name3) {
		this.name3 = name3;
	}
	public String getName4() {
		return name4;
	}
	public void setName4(String name4) {
		this.name4 = name4;
	}
	public String getName5() {
		return name5;
	}
	public void setName5(String name5) {
		this.name5 = name5;
	}
	public String getLd_cust_cnt() {
		return ld_cust_cnt;
	}
	public void setLd_cust_cnt(String ld_cust_cnt) {
		this.ld_cust_cnt = ld_cust_cnt;
	}
	public String getBus_cnt() {
		return bus_cnt;
	}
	public void setBus_cnt(String bus_cnt) {
		this.bus_cnt = bus_cnt;
	}
	public String getTaix_cnt() {
		return taix_cnt;
	}
	public void setTaix_cnt(String taix_cnt) {
		this.taix_cnt = taix_cnt;
	}
	public String getPr_cut() {
		return pr_cut;
	}
	public void setPr_cut(String pr_cut) {
		this.pr_cut = pr_cut;
	}
	public String getNon_change_cnt() {
		return non_change_cnt;
	}
	public void setNon_change_cnt(String non_change_cnt) {
		this.non_change_cnt = non_change_cnt;
	}
	public String getTimeids() {
		return timeids;
	}
	public void setTimeids(String timeids) {
		this.timeids = timeids;
	}
	
	
	
}
