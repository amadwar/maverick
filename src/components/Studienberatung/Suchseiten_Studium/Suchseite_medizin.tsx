import React from "react";
import "../../Suchseite.css";
import { useNavigate } from 'react-router-dom';
import Badge from "../../Badge";
function Suchseite_medizin() {
  
  const navigate = useNavigate(); 

  const navigateToMedizin = () => {
    navigate("/medizin");
  }
  return (
    <div className="such-seite">

    
      
      <span className="skill-lernpfad">Skill: Medizin Studium</span>

      <div className="rectangle-19">
        <h3>Medizin Studium</h3>
        <span className="ein-softwareentwickler-englisch">
        Als Studium der Medizin oder Medizinstudium wird die wissenschaftliche und praktische Ausbildung von Ärzten bezeichnet. Ähnlich wie in anderen Studiengängen werden die wissenschaftlichen Grundlagen mit berufspraktischen Anteilen verknüpft. 
        (Quelle Wikipedia)
        </span>
      </div>


      <div className="rectangle-10">
      <span className="text1">Personalisiere deinen Lernpfad</span>
      <span className="text2">Welche Themen sind bei dir bereits bekannt?</span>
      <div className="badgen">
      <Badge text="Ist das Medizinstudium machbar? Auf diese Eigenschaften kommt es WIRKLICH an!" />{" "}
      <Badge text="Medizin Studium- Quoten, TMS, FSJ, Wartezeit, Abi?" />{" "}
      <Badge text="Medizin studieren: Alles über das Medizinstudium!" />{" "}
      <Badge text="The BEST PRE-MED MAJOR|Proven By Med School Acceptance Data " />{" "}
      <Badge text="Medizinstudium- was ich gerne DAVOR gewusst hätte"/>{" "}
      </div>
      
      

        
      </div>
     
    
      <button type="button" className="button" onClick={navigateToMedizin}>Starte dein Lernpfad</button>      
          
    </div>
  );
}

export default Suchseite_medizin;
