import os


class Config:
    SQLALCHEMY_DATABASE_URI = 'mysql+pymysql://{user}:{password}@{host}/{database}?charset=utf8'.format(**{
        'user': os.getenv('DB_USER', 'mysqluser'),
        'password': os.getenv('DB_PASSWORD', 'mysqlpassword'),
        'host': os.getenv('DB_HOST', 'db'),
        'database': os.getenv('DB_DATABASE', 'mysqldatabase')
    })
    SQLALCHEMY_TRACK_MODIFICATIONS = False
