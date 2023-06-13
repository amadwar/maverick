import React from "react";
import "../Suchseite.css";
import { Link } from 'react-router-dom'; 
import ClosableBadge from "../ClosableBadge";
import { useNavigate } from 'react-router-dom';
import Badge from "../Badge";
function Suchseite_stricken() {
  
  const navigate = useNavigate(); 

  const navigateToStricken = () => {
    navigate("/stricken");
  }
  return (
    <div className="such-seite">

    
      
      <span className="skill-lernpfad">Skill: Stricken</span>

      <div className="rectangle-19">
        <h3>Stricken</h3>
        <span className="ein-softwareentwickler-englisch">
        Stricken ist das Herstellen textiler Maschengebilde aus Garnen durch Fadenumschlingung, wobei die Maschen einer Reihe nacheinander gebildet werden. Beim Handstricken wird mit zwei bis fünf, auch mehr sind möglich, Stricknadeln gearbeitet. Beim Maschinenstricken benötigt jedes Maschenstäbchen eine Zungennadel. 
        (Quelle Wikipedia)
        </span>
      </div>


      <div className="rectangle-10">
      <span className="text1">Personalisiere deinen Lernpfad</span>
      <span className="text2">Welche Themen sind bei dir bereits bekannt?</span>
      <div className="badgen">
      <Badge text="[프랑스 자수] 블리온 스티치 Bullion Stitch" />{" "}
      <Badge text="Spinngrundlagen #3 - Gesponnenes Garn -von der Spule zum Strang" />{" "}
      <Badge text="How to sew a narrow rolled edge using a Brother 1034d four(4) Thread Serger" />{" "}
      <Badge text="Kelley's Sock Knitting Class - Gusset " />{" "}
      <Badge text="Brioche Stitch " />{" "}
      </div>
      
      

        
      </div>
     
    
      <button type="button" className="button" onClick={navigateToStricken}>Starte dein Lernpfad</button>      
          
    </div>
  );
}

export default Suchseite_stricken;
