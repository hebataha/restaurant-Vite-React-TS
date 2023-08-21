import endpoint from "shared/endpoint";

/**
 * Get Reservations list
 */
export function getReservationsList(params: any = {}) {
  return endpoint.get("/reservation", {
    params,
  });
}

/**
 * Get reservation details
 */
export function getReservation(id: string | number) {
  return endpoint.get("/reservation/" + id);
}
