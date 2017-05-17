package model;

public class Event {
	private String name;
	private String value;
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getValue() {
		return value;
	}
	public void setValue(String value) {
		this.value = value;
	}
	public Event(String name, String value) {
		super();
		this.name = name;
		this.value = value;
	}
	public Event() {
		super();
	}
	@Override
	public String toString() {
		return "{\"name\":\"" + name + "\", \"value\":\"" + value + "\"}";
	}

}
