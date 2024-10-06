import { NavigateFunction } from "react-router-dom";
import React from "react";
import SettingsView from "../views/SettingsView";
import NavbarView from "../views/NavBar/NavBarView";
const ContainerSettings: React.FC = () => {
  const handleImpressumClick = (navigate: NavigateFunction) => {
    navigate("/legal/impressum");
  };
  const handleDatenschutzClick = (navigate: NavigateFunction) => {
    navigate("/legal/datenschutz");
  };

  return (
    <div>
      <NavbarView />
      <SettingsView
        onDatenschutzClick={handleDatenschutzClick}
        onImpressumClick={handleImpressumClick}
      />
    </div>
  );
};

export default ContainerSettings;
