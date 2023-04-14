import * as React from "react";
import "./CardLernpfad.css";
const CardLernpfad = (props: {
  zielScrumVerwandtSoftwareentwi: string,
  className?: string,
}) => {
  const screenshot = './screenshot.png';
  return (
    <div className={`card-lernpfad-1 ${props.className || ""}`}>
      <div className="rectangle-10-6">
        <img className="screenshot-2023-01-31-002506-1-2" src={screenshot} />
        <span className="ziel-scrum-verwandt-softwareentwi-1">
          {props.zielScrumVerwandtSoftwareentwi ||
            "Ziel: Scrum \u2028 Verwandt: Softwareentwicklungsmethoden"}
        </span>
      </div>
    </div>
  );
};
export default CardLernpfad;
