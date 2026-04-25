import { useState } from "react";
import { getPlayerStats } from "../services/nfl";

const ComparePlayers = () => {
  const [playerOneId, setPlayerOneId] = useState("");
  const [playerTwoId, setPlayerTwoId] = useState("");

  const [playerOneStats, setPlayerOneStats] = useState(null);
  const [playerTwoStats, setPlayerTwoStats] = useState(null);

  const handleCompare = async () => {
    const p1 = await getPlayerStats(playerOneId);
    const p2 = await getPlayerStats(playerTwoId);

    setPlayerOneStats(p1[0]);
    setPlayerTwoStats(p2[0]);
  };

  return (
    <div>
      <h1>Compare Players</h1>

      <input
        placeholder="Player 1 ID"
        value={playerOneId}
        onChange={(e)=>setPlayerOneId(e.target.value)}
      />

      <input
        placeholder="Player 2 ID"
        value={playerTwoId}
        onChange={(e)=>setPlayerTwoId(e.target.value)}
      />

      <button onClick={handleCompare}>
        Compare
      </button>

      {playerOneStats && playerTwoStats && (
        <div>
          <h2>Comparison</h2>

          <p>
            Passing Yards:
            {playerOneStats.statistics[0].passing.yards}
            vs
            {playerTwoStats.statistics[0].passing.yards}
          </p>

          <p>
            Touchdowns:
            {playerOneStats.statistics[0].passing.touchdowns}
            vs
            {playerTwoStats.statistics[0].passing.touchdowns}
          </p>

        </div>
      )}
    </div>
  );
};

export default ComparePlayers;