package util;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.UnsupportedEncodingException;
import java.math.BigDecimal;
import java.util.Iterator;
import java.util.Random;
import java.util.Set;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class StringUtil {
	
	  /**
	   * 功能：空值替换,类似于oracle的nvl函数，如果as_str为空，则替换为as_val
	   */
	  public static String nvl(String as_str,String as_val){//equal nvl function in oracle
	    if(as_str==null) return as_val;
	    if ( (as_str.trim()).length()==0 || as_str.equals("") ){

	    }else{
	      as_val = as_str;
	    }
	    return as_val;
	  }//nvl(String as_str,String as_val)
	  
	
    /** 检测一个字符串是否是数字
     * @param num 输入字符串
     * @return true 是数字； false 不是数字。
     */
    public static boolean isNumber(String num) {
    	Pattern pattern = Pattern.compile("[0-9]+");
     	return pattern.matcher(num).matches();
    }
    
    
    /** 检测一个字符串是否是整数
     * @param num 输入字符串
     * @return true 是整数； false 不是整数。
     */
    public static boolean isInt(String num) {
        try {
            Integer.parseInt(num);
            return true;
        } catch (NumberFormatException e) {
            return false;
        }
    }
    
    /** 检测一个字符串是否是正整数
     * @param num 输入字符串
     * @return true 是整数； false 不是整数。
     */
    public static boolean isSignInt(String num) {
        try {
            int n = Integer.parseInt(num);
            if (n >= 0)
            	return true;
            else 
            	return false;
        } catch (NumberFormatException e) {
            return false;
        }
    }
    /** 检测一个字符串是否是小数
     * @param msg 输入字符串
     * @return true 是小数； false 不是小数。
     */
    
    public static boolean  isDouble(String msg){
		try{
			Double.valueOf(msg);
			return true;
			
		}catch(NumberFormatException e){
			return false;
		}
		
	}


    /** 将输入字符串解析为int
     * @param num 输入字符串
     * @return 解析后的int值，如果有任何意外，返回0，所以这个方法有缺陷
     */
    public static int toInt(String num) {
        int i = 0;
        try {
            if (null != num) {
                i = Integer.parseInt(num.trim());
            }
        } catch (NumberFormatException e) {
            i = 0;
        }
        return i;
    }

    /** 将输入字符串解析为long
     * @param num 输入字符串
     * @return 解析后的long值，如果有任何意外，返回0，所以这个方法有缺陷
     */
    public static long toLong(String num) {
        long i = 0;
        try {
            i = Long.parseLong(num.trim());
        } catch (NumberFormatException e) {
            i = 0;
        }
        return i;
    }

    /**
     * 检测一个字符串是否为空
     * @param strOne
     *            待检测字符串
     * @return true 是null或者空串； false 不是空串。
     */
    public static boolean isNullorBlank(String strOne) {
        if (strOne == null) {
            return true;
        } else if (strOne.trim().equals("")) {
            return true;
        }
        return false;
    }

    /**
     * 检查字符产是否为null，如果为null，返回""；否则返回trim(字符串)
     * @param value
     * @return String  如果为null，返回""；否则返回trim(字符串)
     */
    public static String nullToBlank(String value) {
        if (null == value) {
            return "";
        } else {
            return value.trim();
        }
    }
    
    /**
     * 翻转字符串
     * 
     * @param str
     * @return
     */
    public static String reverseString(String str)
	{
	        if(str.length()<0)
	            return "";
	        
	        char [] ch = str.toCharArray();
	        for(int i=0;i<ch.length/2;i++)
	        {
	            char tmp = ch[i];
	            ch[i] = ch[ch.length-i-1];
	            ch[ch.length-i-1] = tmp;
	        }
	        
	        str = String.valueOf(ch);
	        
	        return str;
	}  
    
    /**
     * 将输入数值 1.按位四舍五入 2.以逗号分隔方式输出
     * 如 输入为 12345.67
     *    输出为 123,45.67
     * 
     * @param munber 输入数值
     * @param scale  保留的小数位数
     * @return
     */
    public static String bigDecimalToStringFormat(BigDecimal number, Integer scale ){
    	if(number == null){
    		return "";
    	}
    	String minus = "";
    	if(number.doubleValue()<0){
    		minus = "-";
    	}
    	if(scale != null && scale < 0){
    		return number.toString();
    	}
    	
    	//四射五入
    	number =  number.setScale(scale,java.math.BigDecimal.ROUND_HALF_UP);
    	String intPart = "";
    	String digitPart = "";
    	
    	//整数部分
		String str = number.toString();
		str = str.replace(".", "/");
		String[] members = str.split("/");
		int len = members[0].toString().length();
		if(minus.equals("-")){
			len =len-1;
			members[0] = members[0].toString().substring(1,members[0].length());
		}
		intPart = reverseString(members[0]);
		StringBuffer sf = new StringBuffer();
		//(len -1)/3 添加逗号分隔符的个数
		for(int i =0; i<=(len-1)/3; i++){
			if(i<(len-1)/3){
				sf.append(intPart.substring(i*3,(i+1)*3)).append(",");
			}else{
				if((len-1)%3 == 0){
					sf.append(intPart.substring(i*3,(i+1)*3-2));
				}else if((len-1)%3 == 1){
					sf.append(intPart.substring(i*3,(i+1)*3-1));
				}else if((len-1)%3 == 2){
					sf.append(intPart.substring(i*3,(i+1)*3));
				}
			}
		}
		intPart = reverseString(sf.toString());
		
		//小数部分
		if(members.length == 2){
			if(members[1] != null){
				if(scale  != null){
					if(members[1].length() <= scale ){
						digitPart = members[1].toString();
					}else{
						digitPart = members[1].toString().substring(0,scale);
					}
				}else{
					digitPart = members[1].toString().substring(0,2);
				}
			}
		}else{
			return intPart;
		}
		if(minus.equals("-")){
			intPart = "-"+intPart;
		}
		return intPart+"."+digitPart;
	}
    
    /**
     * 将输入 1.按位四舍五入 2.以逗号分隔方式输出
     * 如 输入为 12345.67
     *    输出为 123,45.67
     * @param munber 输入数值
     * @param scale  保留的小数位数
     * @return
     */
    public static String doubleToStringFormat(Double number, Integer scale ){
    	if(number == null){
    		return "";
    	}
    	return bigDecimalToStringFormat(new BigDecimal(String.valueOf(number)),scale);
		
	}
    
    /**
     * 用于将InputStream转换成byte[]（例如图片）
     * @param is	InputStream
     * @return
     * @throws IOException
     */
    public static byte[] InputStreamToByte(InputStream is) throws IOException {   
    	ByteArrayOutputStream bytestream = new ByteArrayOutputStream();   
    	int ch;   
    	while ((ch = is.read()) != -1) {   
    		bytestream.write(ch);   
    	}   
    	byte imgdata[] = bytestream.toByteArray();   
    	bytestream.close();   
    	return imgdata;   
	}
    
	public static boolean isNull(String str){
		if (str == null){
			return true;
		} 
		return false;
	}
	
	public static boolean isNotNull(String str){
		if (str == null){
			return false;
		} 
		return true;
	}
	
	public static boolean isEmpty(String str){
		if (str == null || "".equals(str.trim())){
			return true;
		} 
		return false;
	}
	
	public static boolean isNotEmpty(String str){
		if (str == null || "".equals(str.trim())){
			return false;
		} 
		return true;
	}
	public static String firstCharUpper(String s) {
		String result = s.substring(0, 1).toUpperCase() + s.substring(1);
		return result;
	}


	public static String firstCharLower(String s) {
		String result = s.substring(0, 1).toLowerCase() + s.substring(1);
		return result;
	}

	public static String genRandom(int length) {
		StringBuffer buffer = new StringBuffer();
		Random r = new Random();
		int i = 0;

		while (i < length) {
			int c = r.nextInt(122);
			if (((48 <= c) && (c <= 57)) || ((65 <= c) && (c <= 90))
					|| ((97 <= c) && (c <= 122))) {
				buffer.append((char) c);
				++i;
			}
		}
		return buffer.toString();
	}

	public static String fillLeft(String orgStr, char fillWith, int fixLen) {
		return fillStr(orgStr, fillWith, fixLen, true);
	}

	public static String fillRight(String orgStr, char fillWith, int fixLen) {
		return fillStr(orgStr, fillWith, fixLen, false);
	}

	private static String fillStr(String orgStr, char fillWith, int fixLen,
			boolean isLeft) {
		int toFill = fixLen - orgStr.length();

		if (toFill <= 0)
			return orgStr;

		StringBuilder sb = new StringBuilder(orgStr);
		for (; toFill > 0; --toFill)
			if (isLeft)
				sb.insert(0, fillWith);
			else
				sb.append(fillWith);

		return sb.toString();
	}

	public static String toTrim(String str) {
		if (str == null)
			return "";

		return str.trim();
	}

	public static String convertToString(int length, String value) {
		StringBuffer buffer = new StringBuffer();
		for (int i = 0; i < length - value.length(); ++i)
			buffer.append("0");

		buffer.append(value);
		return buffer.toString();
	}

	public static String arrayToString(Object[] array, String split) {
		StringBuffer buffer = new StringBuffer();
		for (int i = 0; i < array.length; ++i)
			buffer.append(array[i].toString()).append(split);

		if (buffer.length() != 0)
			return buffer.substring(0, buffer.length() - split.length());

		return "";
	}

	public static String arrayToString(Set set, String split) {
		StringBuffer buffer = new StringBuffer();
		for (Iterator i = set.iterator(); i.hasNext();)
			buffer.append(i.next().toString()).append(split);

		if (buffer.length() != 0)
			return buffer.substring(0, buffer.length() - split.length());

		return "";
	}

	public static String trimLeft(String s, char c) {
		if (s == null)
			return "";

		StringBuffer b = new StringBuffer();
		char[] cc = s.toCharArray();
		int i = 0;
		for (i = 0; i < cc.length; ++i)
			if (cc[i] != c)
				break;

		for (int n = i; n < cc.length; ++n)
			b.append(cc[n]);

		return b.toString();
	}

	public static String repNull(Object o) {
		if (o == null)
			return "";

		return o.toString().trim();
	}

	public static String generateRandomString(int len) {
		char[] mm = { '0', '1', '2', '3', '4', '5', '6', '7', '8', '9' };

		StringBuffer sb = new StringBuffer();
		Random random = new Random();

		for (int i = 0; i < len; ++i)
			sb.append(mm[random.nextInt(mm.length)]);

		return sb.toString();
	}

	public static String toColumnName(String attributeName) {
		StringBuffer buffer = new StringBuffer();
		for (int i = 0; i < attributeName.length(); ++i) {
			char temp = attributeName.charAt(i);
			if ((temp >= 'a') && (temp <= 'z'))
				buffer.append((char) (temp - ' '));

			if ((temp >= 'A') && (temp <= 'Z'))
				buffer.append("_").append(temp);
		}

		return buffer.toString();
	}

	public static String toPropertyName(String columnName) {
		StringBuffer buffer = new StringBuffer();
		boolean b = false;
		for (int i = 0; i < columnName.length(); ++i) {
			char temp = columnName.charAt(i);
			if ((temp >= '0') && (temp <= '9')) {
				buffer.append((char) temp);
			} else if (temp == '_') {
				b = true;
			} else {
				if (!(b))
					buffer.append((char) (temp + ' '));
				else
					buffer.append((char) temp);

				b = false;
			}
		}
		return buffer.toString();
	}

	public static String bytesToHexString(byte[] src) {
		StringBuilder stringBuilder = new StringBuilder("");
		if ((src == null) || (src.length <= 0))
			return null;

		for (int i = 0; i < src.length; ++i) {
			int v = src[i] & 0xFF;
			String hv = Integer.toHexString(v);
			if (hv.length() < 2)
				stringBuilder.append(0);

			stringBuilder.append(hv);
		}
		return stringBuilder.toString();
	}

	public static byte[] hexStringToBytes(String hexString) {
		if ((hexString == null) || (hexString.equals("")))
			return null;

		hexString = hexString.toUpperCase();
		int length = hexString.length() / 2;
		char[] hexChars = hexString.toCharArray();
		byte[] d = new byte[length];
		for (int i = 0; i < length; ++i) {
			int pos = i * 2;
			d[i] = (byte) (charToByte(hexChars[pos]) << 4 | charToByte(hexChars[(pos + 1)]));
		}
		return d;
	}

	private static byte charToByte(char c) {
		return (byte) "0123456789ABCDEF".indexOf(c);
	}

	public static String makeInputString(String name, String value){
		if (value == null) value = "";
		return "<input type='hidden' name='" + name + "' value='" + value + "'/>";
	}
	/**
     *String的字符串转换成unicode的String
     */
    public static String stringToUnicode(String strText) throws Exception {
        char c;
        String strRet = "";
        int intAsc;
        String strHex;
        for (int i = 0; i < strText.length(); i++) {
            c = strText.charAt(i);
            intAsc = (int) c;
            strHex = Integer.toHexString(intAsc);
            if (intAsc > 128) {
                strRet += "\\u" + strHex;
            } else {
                // 低位在前面补00
                strRet += "\\u00" + strHex;
            }
        }
        return strRet;
    }
    /**
     *unicode的String转换成String的字符串
     */
    public static String unicodeToString(String hex) {
        int t = hex.length() / 6;
        StringBuilder str = new StringBuilder();
        for (int i = 0; i < t; i++) {
            String s = hex.substring(i * 6, (i + 1) * 6);
            // 高位需要补上00再转
            String s1 = s.substring(2, 4) + "00";
            // 低位直接转
            String s2 = s.substring(4);
            // 将16进制的string转为int
            int n = Integer.valueOf(s1, 16) + Integer.valueOf(s2, 16);
            // 将int转换为字符
            char[] chars = Character.toChars(n);
            str.append(new String(chars));
        }
        return str.toString();
    }


    /**
     * 字符串填充，按byte长度计算
     * @param targetStr
     * @param strLength
     * @return
     * @throws Exception 
     */
	public static String fillStrByByte(String targetStr, char fillChar, int strLength, String encoding, boolean isLeft) throws Exception {
		if (targetStr == null) targetStr = "";
		int curLength = targetStr.getBytes(encoding).length;
		if (curLength > strLength) {
			targetStr = targetStr.substring(0, strLength);
		}
		int cutLength = strLength - targetStr.getBytes(encoding).length;
		for (int i = 0; i < cutLength; i++)
			if (isLeft)
				targetStr = fillChar + targetStr;
			else
				targetStr += fillChar;
		return targetStr;
	}
    /**
     * 左侧填充字符串，按byte长度计算
     * @param targetStr
     * @param strLength
     * @return
     * @throws Exception 
     */
	public static String fillStrByByteLeft(String targetStr, char fillChar, int strLength, String encoding) throws Exception {
		return fillStrByByte(targetStr, fillChar, strLength, encoding, true);
	}
    /**
     * 右侧填充字符串，按byte长度计算
     * @param targetStr
     * @param strLength
     * @return
     * @throws Exception 
     */
	public static String fillStrByByteRight(String targetStr, char fillChar, int strLength, String encoding) throws Exception {
		return fillStrByByte(targetStr, fillChar, strLength, encoding, false);
	}
    /**
     * 字符串左补零，长度*2计算
     * @param targetStr
     * @param strLength
     * @return
     */
	public static String fillStringZero(String targetStr, int strLength) {
		if (targetStr == null) targetStr = "";
		strLength = strLength * 2;
		if (targetStr.length() > strLength) {
			targetStr = targetStr.substring(targetStr.length() - strLength);
		}
		int cutLength = strLength - targetStr.length();
		for (int i = 0; i < cutLength; i++)
			targetStr = "0" + targetStr;
		return targetStr;
	}
	
	public static String fillPath(String path) {
		String patternStr = "(\\$\\{[a-zA-Z_]+\\})";
		Pattern pattern = Pattern.compile(patternStr);
		Matcher matcher = pattern.matcher(path);
		StringBuffer buf = new StringBuffer();
		while (matcher.find()) {
			String replaceStr = matcher.group();
			String token = replaceStr.substring(replaceStr.indexOf('{') + 1, replaceStr.lastIndexOf('}'));
			replaceStr = System.getProperty(token);
			if (replaceStr == null)
				throw new IllegalStateException("Path identified by token[" + token + "] not found");
			matcher.appendReplacement(buf, replaceStr);
		}

		matcher.appendTail(buf);
		return buf.toString();
	}
	
	
	/*
	 * zyy 20140805 字符数组转化为字符串
	 */
	public static String stringArrtoString(String[] strArr,String prefx){
		String str = "";
		for(int i=0;i<strArr.length;i++){
			str += strArr[i];
			if(i!=(strArr.length-1)){
				str += prefx ;
			}
		}
		return str;
	}
	
	public static void main(String[] args) {
		String s = "asdfghjklpoiuytrewq";
		byte[] b = s.getBytes();
		String w = Integer.toHexString(10);
		System.out.println(w);
	}
}
