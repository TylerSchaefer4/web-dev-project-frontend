import "./App.css";
import Readdit from "./readdit";
import { HashRouter } from "react-router-dom";
import { Routes, Route } from "react-router";
import CommentsPage from "./readdit/comments/index";

function App() {
  return (
    <HashRouter>
      <div className="container">
        <Routes>
          <Route path="/readdit/*" element={<Readdit />} />
          <Route path="/comments/${post.id}" element={<CommentsPage />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
