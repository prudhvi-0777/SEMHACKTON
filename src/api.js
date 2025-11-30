// central API functions - frontend only
export const API_BASE = "http://localhost:5000";

async function request(path, opts = {}) {
  const res = await fetch(API_BASE + path, opts);
  const json = await res.json();
  return json;
}

// AUTH
export function loginApi(username, password) {
  return request("/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });
}

export function registerApi(username, password) {
  return request("/auth/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });
}

// ITEMS (CRUD) - requires passing token in header 'token'
export function fetchItems(token) {
  return request("/items", { headers: { token } });
}

export function createItemApi(item, token) {
  return request("/items", {
    method: "POST",
    headers: { "Content-Type": "application/json", token },
    body: JSON.stringify(item),
  });
}

export function updateItemApi(id, item, token) {
  return request(`/items/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json", token },
    body: JSON.stringify(item),
  });
}

export function deleteItemApi(id, token) {
  return request(`/items/${id}`, {
    method: "DELETE",
    headers: { token },
  });
}
