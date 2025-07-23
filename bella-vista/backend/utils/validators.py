from datetime import datetime

def validate_reservation(data):
    errors = []

    if not data.get("name"):
        errors.append("Name is required.")
    if not data.get("email") or "@" not in data["email"]:
        errors.append("Valid email is required.")
    if not data.get("phone") or len(data["phone"]) < 7:
        errors.append("Valid phone number is required.")
    if not isinstance(data.get("guests"), int) or data["guests"] <= 0:
        errors.append("Guests count must be a positive number.")
    if not data.get("date") or not data.get("time"):
        errors.append("Date and Time are required.")
    else:
        try:
            datetime.fromisoformat(f"{data['date']}T{data['time']}")
        except ValueError:
            errors.append("Date or Time format is invalid (use YYYY-MM-DD and HH:MM).")

    return errors
