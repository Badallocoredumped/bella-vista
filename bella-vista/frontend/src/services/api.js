const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api";

export const createReservation = async (reservationData) => {
  const response = await fetch(`${API_BASE_URL}/reservations/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(reservationData),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({ error: 'Unknown error' }));
    throw new Error(errorData.error || errorData.errors?.join(", ") || "Failed to create reservation");
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