import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Startseite.css";


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

function Startseite(){
  
  const devops = "./devops.webp";
  
  const [data, setData] = useState<LearningResource[]>([]);
   
    useEffect(() => {
      const fetchData = async () => {
        try {
          const [response1, response2] = await Promise.all([
            axios.get<LearningResource[]>("./Definitionen_in_der_Informatik.json"),
            axios.get<LearningResource[]>("./Datentypen.json"),
            
            
          ]);
    
          setData([...response1.data, ...response2.data]);
        } catch (error) {
          console.error(error);
        }
      };
    
      fetchData();
    }, []);
 
 
  return (
    <div className="startseite">


      <span className="text">Meine aktiven Lernpfade</span>
      <div className="aktiv_lernpfad">
        
       <div ><Link className="link" to="/devops"><img className="img" src={devops}  alt="devops" />
       </Link><p className="text1"> Fortschritt 80%</p> </div>
       
        
        
      </div>




      <span className="text">Was dich noch interessieren könnte </span>
      <div>
         
      {data.length ? (  // überprüft, ob Daten vorhanden sind
          
          <div className="videos">
            <div><Link className="link" to="/video_definitioneninderinformatik1"><img className="img" src={data[0]["https://schema.org/thumbnailUrl"]?.map(thumbnail => thumbnail["@value"]).join(', ')} alt="Thumbnail" /></Link><h6 style={{whiteSpace: "pre-line"}}>{data[6]["https://schema.org/title"]?.map(title => title["@value"]).join(', ')}</h6> </div>
            <div><Link className="link" to="/video_definitioneninderinformatik2"><img className="img" src={data[2]["https://schema.org/thumbnailUrl"]?.map(thumbnail => thumbnail["@value"]).join(', ')} alt="Thumbnail" /></Link><h6 style={{whiteSpace: "pre-line"}}>{data[8]["https://schema.org/title"]?.map(title => title["@value"]).join(', ')}</h6>  </div>
            <div><Link className="link" to="/video_definitioneninderinformatik3"><img className="img" src={data[3]["https://schema.org/thumbnailUrl"]?.map(thumbnail => thumbnail["@value"]).join(', ')} alt="Thumbnail" /></Link><h6 style={{whiteSpace: "pre-line"}}>{data[9]["https://schema.org/title"]?.map(title => title["@value"]).join(', ')}</h6>  </div>
            <div><Link className="link" to="/video_definitioneninderinformatik4"><img className="img" src={data[4]["https://schema.org/thumbnailUrl"]?.map(thumbnail => thumbnail["@value"]).join(', ')} alt="Thumbnail" /></Link><h6 style={{whiteSpace: "pre-line"}}>{data[10]["https://schema.org/title"]?.map(title => title["@value"]).join(', ')}</h6>  </div>
            <div><Link className="link" to="/video_definitioneninderinformatik5"><img className="img" src={data[5]["https://schema.org/thumbnailUrl"]?.map(thumbnail => thumbnail["@value"]).join(', ')} alt="Thumbnail" /></Link><h6 style={{whiteSpace: "pre-line"}}>{data[11]["https://schema.org/title"]?.map(title => title["@value"]).join(', ')}</h6>  </div>
          </div>
        
       
              
            
          ) : (
            <p>Daten werden geladen...</p>  // wird angezeigt, wenn Daten noch nicht geladen sind
          )}
         
         
         
      </div>



      <span className="text">Aktuelle Trends</span>
      <div className="videos">
        
      {data.length ? (  // überprüft, ob Daten vorhanden sind
          
          <div className="videos">
            <div><Link className="link" to="/video_datentypen1"><img className="img" src={data[6]["https://schema.org/thumbnailUrl"]?.map(thumbnail => thumbnail["@value"]).join(', ')} alt="Thumbnail" /></Link><h6 style={{whiteSpace: "pre-line"}}>{data[6]["https://schema.org/title"]?.map(title => title["@value"]).join(', ')}</h6> </div>
            <div><Link className="link" to="/video_datentypen2"><img className="img" src={data[8]["https://schema.org/thumbnailUrl"]?.map(thumbnail => thumbnail["@value"]).join(', ')} alt="Thumbnail" /></Link><h6 style={{whiteSpace: "pre-line"}}>{data[8]["https://schema.org/title"]?.map(title => title["@value"]).join(', ')}</h6>  </div>
            <div><Link className="link" to="/video_datentypen3"><img className="img" src={data[9]["https://schema.org/thumbnailUrl"]?.map(thumbnail => thumbnail["@value"]).join(', ')} alt="Thumbnail" /></Link><h6 style={{whiteSpace: "pre-line"}}>{data[9]["https://schema.org/title"]?.map(title => title["@value"]).join(', ')}</h6>  </div>
            <div><Link className="link" to="/video_datentypen4"><img className="img" src={data[10]["https://schema.org/thumbnailUrl"]?.map(thumbnail => thumbnail["@value"]).join(', ')} alt="Thumbnail" /></Link><h6 style={{whiteSpace: "pre-line"}}>{data[10]["https://schema.org/title"]?.map(title => title["@value"]).join(', ')}</h6>  </div>
            <div><Link className="link" to="/video_datentypen5"><img className="img" src={data[11]["https://schema.org/thumbnailUrl"]?.map(thumbnail => thumbnail["@value"]).join(', ')} alt="Thumbnail" /></Link><h6 style={{whiteSpace: "pre-line"}}>{data[11]["https://schema.org/title"]?.map(title => title["@value"]).join(', ')}</h6>  </div>
          </div>
        
       
              
            
          ) : (
            <p>Daten werden geladen...</p>  // wird angezeigt, wenn Daten noch nicht geladen sind
          )}
        
        
        
        
      </div>

      
      
      
      </div>
   );
  };

export default Startseite;
  
