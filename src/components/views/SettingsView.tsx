import { useNavigate, NavigateFunction } from "react-router-dom";
import React from "react";
import { useTranslation } from "react-i18next";
import UsedLibsListContainer from "../../legal/usedLibs/container_usedLibList";

interface ViewSettingsProps {
  onDatenschutzClick: (navigate: NavigateFunction) => void;
  onImpressumClick: (navigate: NavigateFunction) => void;
  onIsAboutUsPopupOpen: (isOpen: boolean) => void;
}

const ViewSettings: React.FC<ViewSettingsProps> = ({
  onDatenschutzClick,
  onImpressumClick,
  onIsAboutUsPopupOpen,
}) => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="backgroundColor">
      <div>
        <br />

        <div className="after-login-container">
          <div className="mb-3 margin2vw">
            <h1>{t("settings_Information")}</h1>
            <hr />
            <p
              data-testid="settings-impressum"
              onClick={() => onIsAboutUsPopupOpen(true)}
            >
              Über uns
            </p>
            <hr />
            <p
              data-testid="settings-edatenschutz"
              onClick={() => onDatenschutzClick(navigate)}
            >
              {t("settings_Datenschutz")}
            </p>
            <hr />
            <p
              data-testid="settings-impressum"
              onClick={() => onImpressumClick(navigate)}
            >
              {t("settings_Impressum")}
            </p>
            <hr />
            <UsedLibsListContainer />
            <hr />
            <a
              href="https://github.com/ChristianScheub/Typescript_PolitikKompass/tree/main"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <p>{t("settings_GitHubRepo")}</p>
            </a>
            <hr />
            <br /> <br /> <br /> <br /> <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewSettings;
