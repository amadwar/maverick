import * as React from "react";
import "./Einstellungen.css";

function Einstellungen(){
  const rectangle ="./rectangleEinstellungButton.svg";
  return (
    <div className="einstellungen">
      
      <span className="einstellungen-1">Einstellungen</span>
      <div className="flex-container">
        <div className="rectangle-15">
          <span className="benachrichtigungen-wallet-id-suc">
            Benachrichtigungen Wallet-ID Sucheinstellungen Anzeige
            Berechtigungen ...
          </span>
        </div>
        <img className="rectangle-16" src={rectangle} />
        <div className="rectangle-17">Wallet ID Einstellungen</div>
      </div>
    </div>
  );
};
export default Einstellungen;
