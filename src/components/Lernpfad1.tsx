import * as React from "react";
import"./Lernpfad1.css";


function lernpfad() {
  
    const line1 ="./line1.svg"; 
    const line ="./line1.svg"; 
    const rectangle000 ="./rectangle000.svg"; 
    const rectangle111 ="./rectangle111.svg"; 


  return (
    <div className="lernpfad-softwareentwicklungsmet">
      <span className="softwareentwicklungsmethoden">
        Softwareentwicklungsmethoden
      </span>
      <div className="flex-container">
        <div className="flex-container-1">
          <img className="rectangle-22" src={rectangle111} />
          <img className="line-1" src={line} />
        </div>
        <img className="rectangle-21" src={rectangle000} />
      </div>
    </div>
  );
};
export default lernpfad;
