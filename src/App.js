import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import bootstrap from "bootstrap";
import Home from "./pages/Home";
import Education from "./pages/Education";
import News from "./pages/News";
import Publication from "./pages/Publication";
import Team from "./pages/Team";
import GroupActivities from "./pages/GroupActivities";
import Research from "./pages/Research";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import TeamInfo from "./pages/TeamInfo";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/research" element={<Research />} />
          <Route path="/education" element={<Education />} />
          <Route path="/news" element={<News />} />
          <Route path="/publications" element={<Publication />} />
          <Route path="/team" element={<Team />} />
          <Route path="/team/:name" element={<TeamInfo />} />
          <Route path="/group-activities" element={<GroupActivities />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
