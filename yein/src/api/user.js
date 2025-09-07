import { api } from "./client";

export const getMyPet = async () => {
  const res = await api.get("/api/pets/me");
  return res.data;
};

export const getMyProfile = async () => {
  const res = await api.get("/api/users/me");
  return res.data?.data ?? res.data;
};

export const getPetStatus = async () => {
  const res = await api.get("/api/pets/me");
  return res.data?.data ?? res.data;
};

export const logout = () => api.post("/auth/logout");
