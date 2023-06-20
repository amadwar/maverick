import React, { useEffect, useState } from "react";
import "../../Suchseite.css";
import { Link } from 'react-router-dom'; 
import ClosableBadge from "../../ClosableBadge";
import { useNavigate } from 'react-router-dom';
import Badge from "../../Badge";
import axios from "axios";





function Suchseite_vwl1() {
 
  const navigate = useNavigate(); 

 

  const navigateTovwl1 = () => {
    navigate("/vwl1");
  }

  return (
    <div className="such-seite">
      <span className="skill-lernpfad">Skill: Volkswirtschaftslehre 1</span>

      <div className="rectangle-19">
        <h3>Volkswirtschaftslehre 1</h3>
        <span className="ein-softwareentwickler-englisch">
        Die Volkswirtschaftslehre (auch Nationalökonomie oder wirtschaftliche Staatswissenschaften kurz VWL) bezeichnet im deutschsprachigen Kontext ein Teilgebiet der Wirtschaftswissenschaft.Sie untersucht Zusammenhänge bei der Erzeugung und Verteilung von Gütern und Produktionsfaktoren.  
        Die Volkswirtschaftslehre beschäftigt sich auch mit menschlichem Handeln unter ökonomischen Bedingungen, das heißt mit den Fragen, wie menschliches Handeln ökonomisch begründet werden kann und welches Handeln den größtmöglichen Nutzen für den Einzelnen oder eine Gemeinschaft bringt. Mit ihr wird nach Gesetzmäßigkeiten und Handlungsempfehlungen für die Wirtschaftspolitik gesucht; ferner werden einzelwirtschaftliche Vorgänge im Rahmen der Mikroökonomie und gesamtwirtschaftliche im Rahmen der Makroökonomie betrachtet. 
        (Quelle Wikipedia)
        </span>
      </div>

      <div className="rectangle-10">
        <span className="text1">Personalisiere deinen Lernpfad</span>
        <span className="text2">Welche Themen sind bei dir bereits bekannt?</span>
        <div className="badgen">
          <Badge text="Opportunitätskosten"/>{" "}
          <Badge text="Versenkte Kosten"/>{" "}
          <Badge text="Komparative Kostenvorteile"/>{" "}
          <Badge text="Überschussnachfrage"/>{" "}
          <Badge text="Überschussangebot"/>{" "}
          <Badge text="Pareto-Effizient"/>{" "}
          
          
        </div>
      </div>
     
      <button type="button" className="button" onClick={navigateTovwl1}>Starte dein Lernpfad</button>      
          
    </div>
  );
}

export default Suchseite_vwl1;
