import endpoint from "shared/endpoint";

/**
 * Get Contacts list
 */
export function getContactsList(params: any = {}) {
  return endpoint.get("/contact", {
    params,
  });
}

/**
 * Get contact details
 */
export function getContact(id: string | number) {
  return endpoint.get("/contact/" + id);
}
