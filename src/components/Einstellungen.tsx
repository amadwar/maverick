import * as React from "react";
import { Link } from "react-router-dom";
import "./Einstellungen.css";

function Einstellungen(){
 
  return (
    <div className="einstellungen">
      
      <span className="einstellungen-1">Einstellungen</span>
      <div className="flex-container">
        <div className="rectangle-15">
          <span className="benachrichtigungen-wallet-id-suc">
            Benachrichtigungen Wallet-ID <Link className="Sucheinstellungen" to="/Sucheinstellungen">Sucheinstellungen</Link> Anzeige
            Berechtigungen ...
          </span>
        </div>
        
        <div className="rectangle-16">
           

        </div>
      </div>
    </div>
  );
};
export default Einstellungen;
