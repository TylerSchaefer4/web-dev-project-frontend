import "./App.css";
import Readdit from "./readdit";
import Comments from "./readdit/comments/index";
import {
  BrowserRouter as Router,
  Route,
  Navigate,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/readdit/home" replace />} />
        <Route path="/readdit/*" element={<Readdit />} />
        <Route path="/comments/:pid" element={<Comments />} />
      </Routes>
    </Router>
  );
}

export default App;
