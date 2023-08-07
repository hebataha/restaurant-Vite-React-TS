import endpoint from "shared/endpoint";

/**
 * Get Layouts list
 */
export function getLayoutsList(params: any = {}) {
  return endpoint.get("/layout", {
    params,
  });
}

/**
 * Get layout details
 */
export function getLayout(id: string | number) {
  return endpoint.get("/layout/" + id);
}
