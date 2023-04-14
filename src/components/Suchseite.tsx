import React from "react";
import "./Suchseite.css";

function Suchseite() {
  const screenshot = "./screenshot.png";

  return (
    <div className="such-seite">
      <span className="gefundene-lernpfade">Gefundene Lernpfade</span>
      <span className="skill-lernpfad">Skill Lernpfad</span>
      <div className="rectangle-10">
        <img className="screenshot-2023-01-31-002506-1" src={screenshot} alt="screenshot" /> {/* Fügen Sie das alt-Attribut hinzu */}
        <span className="ziel-softwareentwicklungsmethode">
          Ziel: Softwareentwicklungsmethoden
          <br />
          Fortschritt: 80%
        </span>
      </div>
      <span className="beruf-lernpfad">Beruf Lernpfad</span>
      <div className="rectangle-19">
        <span>Softwareentwickler</span>
        <span className="ein-softwareentwickler-englisch">
          Ein Softwareentwickler (englisch software developer) ist eine Person,
          die an der Erstellung einer Software mitwirkt. Der Begriff ist nicht
          scharf definiert. Die konkreten Aufgaben eines Softwareentwicklers
          richten sich nach der Rolle, die er im Softwareentwicklungsteam
          einnimmt. Die bekannteste Rolle ist hierbei die des Programmierers.
          Umgangssprachlich wird zwischen den Begriffen „Programmierer“ und
          „Softwareentwickler“ oft nicht unterschieden. (Quelle Wikipedia)
        </span>
      </div>
    </div>
  );
}

export default Suchseite;
