import { api } from "./api";

export const getTeams = async () => {
  try {
    const res = await api.get("/teams?league=1&season=2023");
    return res.data.response;
  } catch (err) {
    console.error("Error fetching teams:", err);
    return [];
  }
};