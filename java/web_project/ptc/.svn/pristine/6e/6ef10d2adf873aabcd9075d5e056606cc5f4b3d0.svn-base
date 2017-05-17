package util;   
  
import java.lang.reflect.Constructor;   
import java.lang.reflect.Field;   
import java.lang.reflect.Method;   
   
  
public class Esg {   
  
public static void main(String[] a) throws ClassNotFoundException {   
  // Class c1 = People.class;   
  Class c1=Class.forName("util.People");
   Field[] fs = c1.getFields();   
   System.out.println("*******getFields()*********");   
   for (int i = 0; i < fs.length; i++) {   
    System.out.println(fs[i].getName());   
   }   
   System.out.println("*******getDeclaredFields()*********");   
   fs = c1.getDeclaredFields();   
   for (int i = 0; i < fs.length; i++) {   
    System.out.println(fs[i].getName());   
   }   
   System.out.println("*******getMethods()*********");   
   Method[] md = c1.getMethods();   
   for (int i = 0; i < md.length; i++) {   
    System.out.println(md[i].getName());   
   }   
   System.out.println("*******getDeclaredMethods()*********");   
   md = c1.getDeclaredMethods();   
   for (int i = 0; i < md.length; i++) {   
    System.out.println(md[i].getName());   
   }   
  
   System.out.println("*******getConstructors()*********");   
   Constructor[] con = c1.getConstructors();   
   for (int i = 0; i < con.length; i++) {   
    System.out.println(con[i].getName());   
   }   
   System.out.println("*******getDeclaredConstructors()*********");   
   con = c1.getDeclaredConstructors();   
   for (int i = 0; i < con.length; i++) {   
    System.out.println(con[i].getName());   
   }   
}   
}   
