import endpoint from "shared/endpoint";

/**
 * Get Posts list
 */
export function getPostsList(params: any = {}) {
  return endpoint.get("/posts", {
    params,
  });
}

/**
 * Get posts details
 */
export function getPost(id: string | number) {
  return endpoint.get("/posts/" + id);
}
