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



function Suchseite_medienwissenschaft() {
  const [data, setData] = useState<LearningResource[]>([]);
  const navigate = useNavigate(); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<LearningResource[]>("./Medienwissenschaft_Studium.json");
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const navigateToBiologie = () => {
    navigate("/medienwissenschaft");
  }

  return (
    <div className="such-seite">
      <span className="skill-lernpfad">Skill: {data[1] && data[1]["https://schema.org/termCode"]?.map(title => title["@value"]).join(', ')}</span>

      <div className="rectangle-19">
        <h3>{data[1] && data[1]["https://schema.org/termCode"]?.map(title => title["@value"]).join(', ')}</h3>
        <span className="ein-softwareentwickler-englisch">
        Medienwissenschaft ist die wissenschaftliche Beschäftigung mit den Medien, darunter die Massenmedien und die öffentliche Kommunikation, aber auch Aspekte der Ästhetik, Technik, Geschichte und Theorie der Medien. Die Medienwissenschaft gründet in der sprach- und geisteswissenschaftlichen Beschäftigung mit den Medien in der Literatur-, Theater-, Kunst- und Musikwissenschaft. Je nach Medienbegriff stehen dabei beispielsweise Einzelmedien wie Printmedien (Zeitung und Zeitschrift), Rundfunk-Medien (Hörfunk und Fernsehen) oder Onlinemedien (z. B. Blogs oder Webvideos) im Mittelpunkt. 
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

export default Suchseite_medienwissenschaft;
