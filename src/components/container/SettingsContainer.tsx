import { NavigateFunction } from "react-router-dom";
import React, { useState } from "react";
import SettingsView from "../views/SettingsView";
import NavbarView from "../views/NavBar/NavBarView";
import HelpTextAboutUs from "../views/HelpTextAboutUs";

const ContainerSettings: React.FC = () => {
  const [isAboutUsPopupOpen, setIsAboutUsPopupOpen] = useState(false);

  const handleImpressumClick = (navigate: NavigateFunction) => {
    navigate("/legal/impressum");
  };
  const handleDatenschutzClick = (navigate: NavigateFunction) => {
    navigate("/legal/datenschutz");
  };
  const handleClosePopup = () => {
    setIsAboutUsPopupOpen(false);
  };

  return (
    <div>
      <NavbarView />
      <SettingsView
        onDatenschutzClick={handleDatenschutzClick}
        onImpressumClick={handleImpressumClick}
        onIsAboutUsPopupOpen={setIsAboutUsPopupOpen}
      />
      {isAboutUsPopupOpen && <HelpTextAboutUs onClose={handleClosePopup} />}
    </div>
  );
};

export default ContainerSettings;
