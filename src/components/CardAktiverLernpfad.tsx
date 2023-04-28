import * as React from "react";
import "./CardAktiverLernpfad.css";
import { Link } from 'react-router-dom'; 
const CardAktiverLernpfad = (props: {
  zielSoftwareentwicklungsmethode: string,
  meineAktivenLernpfade: string,
  className?: string,
}) => {
  const screenshot = "./screenshot.png";
  return (
    <div className={`card-aktiver-lernpfad ${props.className || ""}`}>
      <span className="meine-aktiven-lernpfade">
        {props.meineAktivenLernpfade || "Meine aktiven Lernpfade"}
      </span>
      <div className="rectangle-10-2">
        <Link to="/lernpfad1"><img className="screenshot-2023-01-31-002506-1-1" src={screenshot} alt="Screenshot" /></Link>
        <span className="ziel-softwareentwicklungsmethode">
          {props.zielSoftwareentwicklungsmethode ||
            "Ziel: Softwareentwicklungsmethoden\u2028Fortschritt: 80%"}
        </span>
      </div>
    </div>
  );
};
export default CardAktiverLernpfad;
