package util;

public class State {
	public enum response{
		
		success("00","�ɹ�"),
		error("01","ʧ��"),
		sqlerror("03","���ݿ��쳣");
		private String  nCode ;
		private String message;
		

		public String getMessage() {
			return message;
		}

		public void setMessage(String message) {
			this.message = message;
		}

		public String getnCode() {
			return nCode;
		}

		public void setnCode(String nCode) {
			this.nCode = nCode;
		}

		private response(String nCode,String message) {
			this.nCode = nCode;
			this.message=message;
		}
		@Override
	       public String toString() {
	           return String.valueOf ( this . nCode );
	       }
		 
		
	}
	

	@Override
	public String toString() {
		return "State [getClass()=" + getClass() + ", hashCode()=" + hashCode()
				+ ", toString()=" + super.toString() + "]";
	}

}
