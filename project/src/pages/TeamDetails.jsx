import { useParams } from "react-router-dom";

const TeamDetails = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Team Details</h1>
      <p>Team ID: {id}</p>
    </div>
  );
};

export default TeamDetails;