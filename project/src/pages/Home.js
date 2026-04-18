import { useEffect, useState } from "react";
import { getTeams } from "../services/nfl";
import { Link } from "react-router-dom";


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
         <Link to={`/team/${team.team.id}`}>
             <div>
                {team.team.name}
             </div>
        </Link>
        ))
      )}
    </div>
  );
};

export default Home;