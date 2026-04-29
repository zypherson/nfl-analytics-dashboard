import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getPlayerStats } from "../services/nfl";
import { useFavorites } from "../context/FavoritesContext";
const PlayerDetails = () => {
  const { id } = useParams();
  const [stats, setStats] = useState([]);
const { dispatch } = useFavorites();
  useEffect(() => {
    const fetchStats = async () => {
      const data = await getPlayerStats(id);
      setStats(data);
    };

    fetchStats();
  }, [id]);

  if (!stats.length) return <p>Loading player stats...</p>;

  const player = stats[0].player;
  const games = stats[0].statistics[0];

  return (
    <div>
      <h1>{player.name}</h1>

      <h2>Stats</h2>
      <p>Games Played: {games.games.appearances}</p>
      <p>Passing Yards: {games.passing.yards}</p>
      <p>Touchdowns: {games.passing.touchdowns}</p>
      <button
        onClick={() =>
        dispatch({
         type: "ADD_FAVORITE",
         payload: {
         id: player.id,
        name: player.name
        }
        })
         }
        >
        Add Favorite
     </button>
    </div>

  );
};

export default PlayerDetails;