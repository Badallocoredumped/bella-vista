from flask import Blueprint, request, jsonify, current_app
from models.reservation import ReservationModel
from utils.validators import validate_reservation

reservations_bp = Blueprint('reservations', __name__)

@reservations_bp.route("/", methods=["POST"])
def create_reservation():
    data = request.json
    errors = validate_reservation(data)
    if errors:
        return jsonify({"errors": errors}), 400

    result = ReservationModel(current_app.db).create(data)
    return jsonify({"id": str(result.inserted_id)}), 201

@reservations_bp.route("/", methods=["GET"])
def list_reservations():
    reservations = ReservationModel(current_app.db).get_all()
    return jsonify(reservations), 200
