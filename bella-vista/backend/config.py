import os
from dotenv import load_dotenv

load_dotenv()  # load from .env file

MONGO_URI = os.getenv("MONGO_URI")
SECRET_KEY = os.getenv("SECRET_KEY", "supersecretkey")
