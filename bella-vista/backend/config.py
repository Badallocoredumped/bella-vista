import os
from dotenv import load_dotenv

load_dotenv()  # load from .env file

MONGO_URI = os.getenv("MONGO_URI", "mongodb://localhost:27017/restaurant_db")
SECRET_KEY = os.getenv("SECRET_KEY", "supersecretkey")
