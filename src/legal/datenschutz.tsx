import { Card } from "react-bootstrap";
import { datenschutz_text } from "./app_texts";
import CodeToTextParser from "./codeToTextParser";
import React from "react";
import NavbarView from "../components/views/NavBar/NavBarView";

const Datenschutz: React.FC = () => {
  return (
    <div>
      <NavbarView />
      <div
        style={{
          marginTop: "env(safe-area-inset-top)",
          paddingTop: "15vw"
        }}
      >
        <div className="after-login-container">
          <Card className="mb-3 margin2vw">
            <Card.Header as="h2">Infos</Card.Header>
            <Card.Body>
              <CodeToTextParser code={datenschutz_text} />
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Datenschutz;