import endpoint from "shared/endpoint";

/**
 * Get Blogs list
 */
export function getBlogsList(params: any = {}) {
  return endpoint.get("/blog", {
    params,
  });
}

/**
 * Get blog details
 */
export function getBlog(id: string | number) {
  return endpoint.get("/blog/" + id);
}
