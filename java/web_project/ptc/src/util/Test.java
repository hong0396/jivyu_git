package util;

import java.util.List;

import dao.impl.LineDaoImpl;

import model.Line;

public class Test {

	/**
	 * @param args
	 */
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		LineDaoImpl ldi=new LineDaoImpl();
		
		 List<Line>list=ldi.getPedictLine("20150315","0700","0123");
		
		 System.out.println(list);

	}

}
