import { NavigateFunction, useLocation } from "react-router-dom";
import React from "react";
import SettingsView from "../views/SettingsView";
const ContainerSettings: React.FC = () => {
  const location = useLocation();

  const isInfoStart = location.pathname.includes("infoStart");

  const handleImpressumClick = (navigate: NavigateFunction) => {
    if (isInfoStart) {
      navigate("/impressumStart");
    } else {
      navigate("/impressum");
    }
  };
  const handleDatenschutzClick = (navigate: NavigateFunction) => {
    if (isInfoStart) {
      navigate("/datenschutzStart");
    } else {
      navigate("/datenschutz");
    }
  };

  return (
    <SettingsView
      onDatenschutzClick={handleDatenschutzClick}
      onImpressumClick={handleImpressumClick}
    />
  );
};

export default ContainerSettings;