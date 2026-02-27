export type LoginPayload = {
  username: string;
  password: string;
};

export type AdminSession = {
  username: string;
  role: "ADMIN";
};

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? "http://localhost:3333";

async function request<T>(path: string, init?: RequestInit): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    ...init,
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      ...(init?.headers ?? {})
    }
  });

  if (!response.ok) {
    throw new Error("Request failed");
  }

  if (response.status === 204) {
    return undefined as T;
  }

  return (await response.json()) as T;
}

export function loginRequest(payload: LoginPayload) {
  return request<AdminSession>("/api/auth/login", {
    method: "POST",
    body: JSON.stringify(payload)
  });
}

export function getMeRequest() {
  return request<AdminSession>("/api/auth/me", {
    method: "GET"
  });
}

export function logoutRequest() {
  return request<void>("/api/auth/logout", {
    method: "POST"
  });
}