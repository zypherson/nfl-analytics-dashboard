import { useEffect, useState } from "react";
import { getTeams } from "../services/nfl";

const Home = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getTeams();
      setTeams(data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>NFL Teams</h1>

      {teams.length === 0 ? (
        <p>Loading...</p>
      ) : (
        teams.map((team) => (
          <div key={team.team.id}>
            {team.team.name}
          </div>
        ))
      )}
    </div>
  );
};

export default Home;