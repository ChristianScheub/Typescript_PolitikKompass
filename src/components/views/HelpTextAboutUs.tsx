import React from "react";
import Popup from "../../ui/Popup/Popup";

interface HHelpTextAboutUsContainerProps {
    onClose: () => void;
}

export const HelpTextAboutUs: React.FC<HHelpTextAboutUsContainerProps> = ({ onClose }) => {

    const helpTextContent = (
        <div>
            <h2>Ist diese Anwendung von einer Partei finanziert?</h2>
            <p>Nein! Diese Anwendung möchte lediglich dem Anwender helfen sich politisch besser einordnen zu können und ist unabhängig von jeder Partei</p>

        </div>
    );

    return (
        <Popup content={helpTextContent} onClose={onClose} />
    );
};

export default HelpTextAboutUs;