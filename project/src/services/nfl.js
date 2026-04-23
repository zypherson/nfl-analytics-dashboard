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
export const getTeamById = async (id) => {
  try {
    const res = await api.get(`/teams?id=${id}`);
    return res.data.response[0];
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const getPlayersByTeam = async (teamId) => {
  try {
    const res = await api.get(`/players?team=${teamId}&season=2023`);
    return res.data.response;
  } catch (err) {
    console.error(err);
    return [];
  }
};
export const getPlayerStats = async (playerId) => {
  try {
    const res = await api.get(`/players/statistics?player=${playerId}&season=2023`);
    return res.data.response;
  } catch (err) {
    console.error(err);
    return [];
  }
};