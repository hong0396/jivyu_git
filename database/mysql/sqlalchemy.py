from sqlalchemy import create_engine

engine = create_engine('mysql+pymysql://root:guihong@localhost/datebase?charset=utf8')