import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getTeamById, getPlayersByTeam } from "../services/nfl";

const TeamDetails = () => {
  const { id } = useParams();

  const [team, setTeam] = useState(null);
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const teamData = await getTeamById(id);
      const playerData = await getPlayersByTeam(id);

      setTeam(teamData);
      setPlayers(playerData);
    };

    fetchData();
  }, [id]);

  if (!team) return <p>Loading...</p>;

  return (
    <div>
      <h1>{team.team.name}</h1>
        <img src={team.team.logo} alt={team.team.name} width={100} />
      <h2>Roster</h2>
      {players.length === 0 ? (
        <p>Loading players...</p>
      ) : (
        players.slice(0, 10).map((player) => (
          <div key={player.player.id}>
            {player.player.name}
          </div>
        ))
      )}
    </div>
  );
};

export default TeamDetails;