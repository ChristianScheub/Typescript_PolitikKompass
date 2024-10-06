import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ContainerSettings from "./components/container/SettingsContainer";
import HomeContainer from "./components/container/HomeContainer";
import Impressum from "./legal/impressum";
import Datenschutz from "./legal/datenschutz";
import "./i18n";
import "./App.css";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeContainer />} />
        <Route path="/info" element={<ContainerSettings />} />
        <Route path="/impressum" element={<Impressum />} />
        <Route path="/datenschutz" element={<Datenschutz />} />
      </Routes>
    </Router>
  );
};

export default App;