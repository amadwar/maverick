import * as React from "react";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import "./Anmelden.css";
import { Link } from 'react-router-dom'; // Importieren Sie die Link-Komponente
function Anmelden() {

   

  const handleAnmeldenClick = () => {
    // Navigieren Sie zur Startseite
    window.location.href = "/";
  };

  const iconLogo = "./iconLogo.svg";
  return (
    <div className="login-seite">
      <div className="rm-373-batch-2-08-1">
        <div className="flex-container">
          <img className="icon-logo" src={iconLogo} />
          <span>E365 Maverick</span>
        </div>
        <span className="lernpfade-mit-kostenfreien-inhal">
          Lernpfade mit kostenfreien Inhalten aus dem Web
        </span>
        <span className="herzlich-willkommen-bei-e-365-mave">
          Herzlich Willkommen bei E365Maverick, ein Proof of Concept für das
          Generieren von Vorschlägen für Lernpfade mit kostenfreien
          Lernhinhalten aus dem Web.<br/> Falls Sie diese Anwendung das erste Mal
          besuchen, melden Sie sich bitte an und verknüpfen ihre persönliche
          Wallet.
        </span>
        <div className="rectangle-1">
          <span className="log-in">Log in</span>
          <div className="flex-container-1">
            <FormControl
              className="rectangle-2-instance"
            />
            <div className="cat-absolute-container">DAAD-ID</div>
          </div>
          <div className="flex-container-2">
            <FormControl
              className="rectangle-3-instance"
              
            />
            <div className="cat-absolute-container-1">Passwort</div>
          </div>
          
          <button className="einloggen-button-instance" onClick={handleAnmeldenClick}>Anmelden</button>
          
          <span className="noch-keinen-account-registrieren">
            Noch keinen Account? Registrieren
          </span>
        </div>
      </div>
    </div>
  );
};
export default Anmelden;
