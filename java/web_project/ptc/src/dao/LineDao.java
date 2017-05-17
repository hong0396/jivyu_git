package dao;
import java.util.List;

import model.Line;
import model.beforeLine;
public interface LineDao {
	public abstract List<Line>getPedictLine(String date,String hour,String sitecode);
	
	public abstract List<beforeLine>beforePedictLine(String date,String hour,String sitecode);
}
