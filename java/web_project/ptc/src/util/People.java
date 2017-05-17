package util;

public class People {
public String name = null;
private String sex = null;
private String age = null;
private String tel = null;
private String address = null;
public static String s = null;   
static {   
   System.out.println("loading People");   
}   
  
public static void showPeople() {   
  
}   
  
public People(String name) {   
   this.name = name;   
}   
  
private People() {   
   this.name = name;   
}   
  
private void showPeopleInfo() {   
   System.out.println(name + " " + sex + " " + age + " " + tel + " "  
     + address);   
}   
  
public String getName() {   
   return name;   
}   
  
public void setName(String name) {   
   this.name = name;   
}   
  
public String getSex() {   
   return sex;   
}   
  
public void setSex(String sex) {   
   this.sex = sex;   
}   
  
public String getAge() {   
   return age;   
}   
  
public void setAge(String age) {   
   this.age = age;   
}   
  
public String getTel() {   
   return tel;   
}   
  
public void setTel(String tel) {   
   this.tel = tel;   
}   
  
public String getAddress() {   
   return address;   
}   
  
public void setAddress(String address) {   
   this.address = address;   
}   
  
}   