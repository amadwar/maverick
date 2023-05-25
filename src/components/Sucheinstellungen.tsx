import * as React from "react";
import CheckboxList from "./CheckboxList";
import "./Einstellungen.css";

function Sucheinstellungen(){
 
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
        
        <div className="rectangle-16">
           <div className="Suchen">
           <h3>Lernmedien</h3>
           <CheckboxList/>
           </div>
        </div>
      </div>
    </div>
  );
};
export default Sucheinstellungen;
