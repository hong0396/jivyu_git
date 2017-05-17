package util;
import java.lang.reflect.Field;
import java.lang.reflect.Method;
import java.util.ArrayList;
import java.util.List;

import model.Echarts;
public class JSONUTIL {
	public static <T> String fromList(List<T> list) throws Throwable {  
        StringBuilder json = new StringBuilder();  
          
        if (list == null || list.size() == 0) {  
            return null;  
        }  
          
        json.append("[");  
         //START 
        for(int i = 0; i < list.size(); i++) {  
            json.append("[");  //
          
            T t = list.get(i);  
            Class clazz = t.getClass();  
           Field[] fields = t.getClass().getDeclaredFields();  
            for(int j=0; j<fields.length; j++) {  
                Field field = fields[j];  
                String strFields = field.getName();  
                 String getMethodName = "get"+ strFields.substring(0, 1).toUpperCase() + strFields.substring(1);  
                Method method =clazz.getMethod(getMethodName, new Class[]{});  
                 Object value = method.invoke(t, new Object[]{});  
                json.append("{\"" + strFields + "\"" + ":" + "\"" + value + "\"}");
               // json.append("["+"{"+"name"+":"+strFields.+"}"+","+"{"+"name"+":"+"strFields"+","+"value"+":"+value+"}"+"]");
                  
                if (j < fields.length - 1) {  
                    json.append(",");  
                }  
             
            }  //
            json.append("]");  
            if (i < list.size() - 1) {  
                json.append(",");  
            }  
        }  
          //END
        json.append("]");  
          
        return json.toString().replace("inname", "name").replace("outname", "name").replace("},{\"value", ",\"value");  
    }  
	public static void main(String[] args){
		List<Echarts> list = new ArrayList<Echarts>();
		Echarts e1 = new Echarts("a1","b1",123);
		Echarts e2 = new Echarts("a1","b1",123);
		Echarts e3 = new Echarts("a1","b1",123);
		Echarts e4 = new Echarts("a1","b1",123);
		list.add(e1);
		list.add(e2);
		list.add(e3);
		list.add(e4);
		try {
			String str = fromList(list);
//			str = str.replace("inname", "name").replace("outname", "name").replace("},{\"value", ",\"value");
			System.out.println(str);
		} catch (Throwable e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
	}
}
