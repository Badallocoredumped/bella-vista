from datetime import datetime
from bson import ObjectId

class ReservationModel:
    def __init__(self, db):
        self.collection = db["reservations"]

    def create(self, data):
        reservation = {
            "name": data["name"],
            "email": data["email"],
            "phone": data["phone"],
            "guests": int(data["guests"]),
            "reservation_datetime": datetime.fromisoformat(f"{data['date']}T{data['time']}"),
            "special_requests": data.get("special_requests", ""),
            "created_at": datetime.utcnow()
        }
        return self.collection.insert_one(reservation)

    def get_all(self):
        reservations = self.collection.find().sort("reservation_datetime", 1)
        return [
            {
                "id": str(r["_id"]),
                "name": r["name"],
                "email": r["email"],
                "phone": r["phone"],
                "guests": r["guests"],
                "date": r["reservation_datetime"].strftime("%Y-%m-%d"),
                "time": r["reservation_datetime"].strftime("%H:%M"),
                "special_requests": r.get("special_requests", "")
            }
            for r in reservations
        ]
