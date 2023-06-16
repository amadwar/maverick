import React, { useEffect, useState } from "react";
import "../../Suchseite.css";
import { Link } from 'react-router-dom'; 
import ClosableBadge from "../../ClosableBadge";
import { useNavigate } from 'react-router-dom';
import Badge from "../../Badge";
import axios from "axios";



interface CosineSimilarity {
  "@type": string;
  "@value": string;
}

interface Identifier {
  "@value": string;
}

interface Teaches {
  "@id": string;
}

interface ThumbnailUrl {
  "@type": string;
  "@value": string;
}

interface Title {
  "@value": string;
}

interface Url {
  "@type": string;
  "@value": string;
}

interface TermCode {
  "@value": string;
}

interface LearningResource {
  "@id": string;
  "@type": string[];
  "https://schema.org/cosineSimilarity"?: CosineSimilarity[];
  "https://schema.org/identifier"?: Identifier[];
  "https://schema.org/teaches"?: Teaches[];
  "https://schema.org/thumbnailUrl"?: ThumbnailUrl[];
  "https://schema.org/title"?: Title[];
  "https://schema.org/url"?: Url[];
  "https://schema.org/termCode"?: TermCode[];
}



function Suchseite_sozialogie() {
  const [data, setData] = useState<LearningResource[]>([]);
  const navigate = useNavigate(); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<LearningResource[]>("./Soziologie_Studium.json");
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const navigateToBiologie = () => {
    navigate("/sozialogie");
  }

  return (
    <div className="such-seite">
      <span className="skill-lernpfad">Skill: {data[1] && data[1]["https://schema.org/termCode"]?.map(title => title["@value"]).join(', ')}</span>

      <div className="rectangle-19">
        <h3>{data[1] && data[1]["https://schema.org/termCode"]?.map(title => title["@value"]).join(', ')}</h3>
        <span className="ein-softwareentwickler-englisch">
        Soziologie (lateinisch socius ‚Gefährte‘ und -logie) ist eine Wissenschaft, die sich mit der empirischen und theoretischen Erforschung des sozialen Verhaltens befasst, also die Voraussetzungen, Abläufe und Folgen des Zusammenlebens von Menschen untersucht. Als systematisch-kritische Wissenschaft des Sozialen ging die Soziologie aus dem Zeitalter der Aufklärung hervor und nimmt als Sozialwissenschaft eine Mittelstellung zwischen Natur- und Geisteswissenschaften ein. Ihren Namen erhielt sie von Auguste Comte, bevor sie sich in der zweiten Hälfte des 19. Jahrhunderts als eigenständige universitäre Disziplin durchsetzte. Ferdinand Tönnies, Georg Simmel und Max Weber gelten als Begründer der deutschsprachigen Soziologie.
        (Quelle Wikipedia)
        </span>
      </div>

      <div className="rectangle-10">
        <span className="text1">Personalisiere deinen Lernpfad</span>
        <span className="text2">Welche Themen sind bei dir bereits bekannt?</span>
        <div className="badgen">
          <Badge text={data[0] && data[0]["https://schema.org/title"] ? data[0]["https://schema.org/title"].map(title => title["@value"]).join(', ') : ""}/>{" "}
          <Badge text={data[2] && data[2]["https://schema.org/title"] ? data[2]["https://schema.org/title"].map(title => title["@value"]).join(', ') : ""} />{" "}
          <Badge text={data[3] && data[3]["https://schema.org/title"] ? data[3]["https://schema.org/title"].map(title => title["@value"]).join(', ') : ""} />{" "}
          <Badge text={data[4] && data[4]["https://schema.org/title"] ? data[4]["https://schema.org/title"].map(title => title["@value"]).join(', ') : ""} />{" "}
          <Badge text={data[5] && data[5]["https://schema.org/title"] ? data[5]["https://schema.org/title"].map(title => title["@value"]).join(', ') : ""}/>{" "}
          
        </div>
      </div>
     
      <button type="button" className="button" onClick={navigateToBiologie}>Starte dein Lernpfad</button>      
          
    </div>
  );
}

export default Suchseite_sozialogie;