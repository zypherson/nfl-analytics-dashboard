import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TeamDetails from "./pages/TeamDetails";
import PlayerDetails from "./pages/PlayerDetails";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team/:id" element={<TeamDetails />} />
        <Route path="/player/:id" element={<PlayerDetails />} />
      </Routes>
    </Router>
  );
}

export default App;