from flask import Flask
from flask_cors import CORS
from pymongo import MongoClient
import config
from routes.reservations import reservations_bp

app = Flask(__name__)
app.config['SECRET_KEY'] = config.SECRET_KEY

# Enable CORS (for Vite frontend)
CORS(app, origins=["http://localhost", "http://localhost:5173"])

# MongoDB connection
client = MongoClient(config.MONGO_URI)
db = client.get_database()   # will pick database from URI
app.db = db   # attach db to app so routes can use it

# Register blueprints
app.register_blueprint(reservations_bp, url_prefix="/api/reservations")

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)

