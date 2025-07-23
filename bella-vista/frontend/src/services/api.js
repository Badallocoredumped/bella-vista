const API_BASE_URL = "http://localhost:5000/api";

export const createReservation = async (reservationData) => {
  const response = await fetch(`${API_BASE_URL}/reservations/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(reservationData),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.errors.join(", "));
  }

  return response.json();
};

export const getReservations = async () => {
  const response = await fetch(`${API_BASE_URL}/reservations/`);
  if (!response.ok) {
    throw new Error("Failed to fetch reservations");
  }
  return response.json();
};