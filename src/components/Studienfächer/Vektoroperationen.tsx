import * as React from "react";
import "../Devops.css";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import TreeView from '@mui/lab/TreeView';
import TreeItem, { treeItemClasses, TreeItemProps } from '@mui/lab/TreeItem';
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';
import { alpha, styled } from '@mui/material/styles';
import Collapse from '@mui/material/Collapse';
import { useSpring, animated } from "@react-spring/web";
import { TransitionProps } from '@mui/material/transitions';
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";


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


function Vektoroperationen(){

    const [data, setData] = useState<LearningResource[]>([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const [response1, response2, response3, response4,response5,response6,response7] = await Promise.all([
            axios.get<LearningResource[]>("./Darstellung_und_Eigenschaften_von_Funktionen.json"),
            axios.get<LearningResource[]>("./Ganzrationale_Funktionen.json"),
            axios.get<LearningResource[]>("./Potenzfunktionen.json"),
            axios.get<LearningResource[]>("./Wurzelfunktionen.json"),
            axios.get<LearningResource[]>("./Eigenschaften_von_Vektoren_Grundlagen.json"),
            axios.get<LearningResource[]>("./Vektoroperationen.json"),
            axios.get<LearningResource[]>("./Matrizen_Grundlagen.json")
          ]);
    
          setData([...response1.data, ...response2.data, ...response3.data, ...response4.data,...response5.data,...response6.data,...response7.data]);
        } catch (error) {
          console.error(error);
        }
      };
    
      fetchData();
    }, []);


    function MinusSquare(props: SvgIconProps) {
      return (
        <SvgIcon fontSize="inherit" style={{ width: 14, height: 14 }} {...props}>
          {/* tslint:disable-next-line: max-line-length */}
          <path d="M22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0zM17.873 11.023h-11.826q-.375 0-.669.281t-.294.682v0q0 .401.294 .682t.669.281h11.826q.375 0 .669-.281t.294-.682v0q0-.401-.294-.682t-.669-.281z" />
        </SvgIcon>
      );
    }
    
    function PlusSquare(props: SvgIconProps) {
      return (
        <SvgIcon fontSize="inherit" style={{ width: 14, height: 14 }} {...props}>
          {/* tslint:disable-next-line: max-line-length */}
          <path d="M22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0zM17.873 12.977h-4.923v4.896q0 .401-.281.682t-.682.281v0q-.375 0-.669-.281t-.294-.682v-4.896h-4.923q-.401 0-.682-.294t-.281-.669v0q0-.401.281-.682t.682-.281h4.923v-4.896q0-.401.294-.682t.669-.281v0q.401 0 .682.281t.281.682v4.896h4.923q.401 0 .682.281t.281.682v0q0 .375-.281.669t-.682.294z" />
        </SvgIcon>
      );
    }
    
    function CloseSquare(props: SvgIconProps) {
      return (
        <SvgIcon
          className="close"
          fontSize="inherit"
          style={{ width: 14, height: 14 }}
          {...props}
        >
          {/* tslint:disable-next-line: max-line-length */}
          <path d="M17.485 17.512q-.281.281-.682.281t-.696-.268l-4.12-4.147-4.12 4.147q-.294.268-.696.268t-.682-.281-.281-.682.294-.669l4.12-4.147-4.12-4.147q-.294-.268-.294-.669t.281-.682.682-.281.696 .268l4.12 4.147 4.12-4.147q.294-.268.696-.268t.682.281 .281.669-.294.682l-4.12 4.147 4.12 4.147q.294.268 .294.669t-.281.682zM22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0z" />
        </SvgIcon>
      );
    }
    
    function TransitionComponent(props: TransitionProps) {
      const style = useSpring({
        from: {
          opacity: 0,
          transform: 'translate3d(20px,0,0)',
        },
        to: {
          opacity: props.in ? 1 : 0,
          transform: `translate3d(${props.in ? 0 : 20}px,0,0)`,
        },
      });
    
      return (
        <animated.div style={style}>
          <Collapse {...props} />
        </animated.div>
      );
    }
    
    const StyledTreeItem = styled((props: TreeItemProps) => (
      <TreeItem {...props} TransitionComponent={TransitionComponent} />
    ))(({ theme }) => ({
      [`& .${treeItemClasses.iconContainer}`]: {
        '& .close': {
          opacity: 0.3,
        },
      },
      [`& .${treeItemClasses.group}`]: {
        marginLeft: 15,
        paddingLeft: 18,
        borderLeft: `1px dashed ${alpha(theme.palette.text.primary, 0.4)}`,
      },
    }));
    


    return (
        <div className="lernpfad-scrum">
          {data.length ? (  // überprüft, ob Daten vorhanden sind
            <>
              <span className="scrum">{data[35]["https://schema.org/termCode"]?.map(title => title["@value"]).join(', ')}</span>
              <div className="flex-container">
                <div className="rectangle-1">  
                <TreeView
                    aria-label="customized"
                    defaultExpanded={['1']}
                    defaultCollapseIcon={<MinusSquare />}
                    defaultExpandIcon={<PlusSquare />}
                    defaultEndIcon={<CloseSquare />}
                    sx={{ height: 264, flexGrow: 1, maxWidth: 400, overflowY: 'auto' }}>





                    <StyledTreeItem nodeId="1" label={<Link className="link" to="/mathe1">Mathe1</Link>}>
                      <StyledTreeItem nodeId="2" label={<Link className="link" to="/mathe1">Funktionen</Link>} >
                        <StyledTreeItem nodeId="4" label={<Link className="link" to="/darstellung_und_eigenschaften_von_funktionen">Darstellung und Eigenschaften von Funktionen</Link>}>

                      <StyledTreeItem nodeId="11" label={<Link className="link" to="/video_darstellungvonfkt1"> {data[0]["https://schema.org/title"]?.map(title => title["@value"]).join(', ')} </Link>} />
                      <StyledTreeItem nodeId="12" label={<Link className="link" to="/video_darstellungvonfkt2">{data[2]["https://schema.org/title"]?.map(title => title["@value"]).join(', ')}</Link>} />
                      <StyledTreeItem nodeId="13" label={<Link className="link" to="/video_darstellungvonfkt3">{data[3]["https://schema.org/title"]?.map(title => title["@value"]).join(', ')}</Link>} />
                      <StyledTreeItem nodeId="14" label={<Link className="link" to="/video_darstellungvonfkt4">{data[4]["https://schema.org/title"]?.map(title => title["@value"]).join(', ')}</Link>} />
                      <StyledTreeItem nodeId="15" label={<Link className="link" to="/video_darstellungvonfkt5">{data[5]["https://schema.org/title"]?.map(title => title["@value"]).join(', ')}</Link>} />


                        </StyledTreeItem>
                        


                        <StyledTreeItem nodeId="5" label={<Link className="link" to="/ganzrationalefunktionen">Ganzrationale Funktionen</Link>} >
  

                         <StyledTreeItem nodeId="16" label={<Link className="link" to="/video_ganzrationaleFkt1"> {data[7]["https://schema.org/title"]?.map(title => title["@value"]).join(', ')} </Link>} />
                         <StyledTreeItem nodeId="17" label={<Link className="link" to="/video_ganzrationaleFkt2">{data[9]["https://schema.org/title"]?.map(title => title["@value"]).join(', ')}</Link>} />
                         <StyledTreeItem nodeId="18" label={<Link className="link" to="/video_ganzrationaleFkt3">{data[10]["https://schema.org/title"]?.map(title => title["@value"]).join(', ')}</Link>} />
                         <StyledTreeItem nodeId="19" label={<Link className="link" to="/video_ganzrationaleFkt4">{data[11]["https://schema.org/title"]?.map(title => title["@value"]).join(', ')}</Link>} />
                         <StyledTreeItem nodeId="20" label={<Link className="link" to="/video_ganzrationaleFkt5">{data[12]["https://schema.org/title"]?.map(title => title["@value"]).join(', ')}</Link>} />

                         </StyledTreeItem>



                        <StyledTreeItem nodeId="6" label={<Link className="link" to="/potenzenfuntionen">Potenzfunktionen</Link>}>

                         


                          <StyledTreeItem nodeId="21" label={<Link className="link" to="/video_potenzFkt1"> {data[14]["https://schema.org/title"]?.map(title => title["@value"]).join(', ')} </Link>} />
                          <StyledTreeItem nodeId="22" label={<Link className="link" to="/video_potenzFkt2">{data[16]["https://schema.org/title"]?.map(title => title["@value"]).join(', ')}</Link>} />
                          <StyledTreeItem nodeId="23" label={<Link className="link" to="/video_potenzFkt3">{data[17]["https://schema.org/title"]?.map(title => title["@value"]).join(', ')}</Link>} />
                          <StyledTreeItem nodeId="24" label={<Link className="link" to="/video_potenzFkt4">{data[18]["https://schema.org/title"]?.map(title => title["@value"]).join(', ')}</Link>} />
                          <StyledTreeItem nodeId="25" label={<Link className="link" to="/video_potenzFkt5">{data[19]["https://schema.org/title"]?.map(title => title["@value"]).join(', ')}</Link>} />

                          

                        </StyledTreeItem>
                        <StyledTreeItem nodeId="7" label={<Link className="link" to="/wurzelfunktionen">Wurzelfunktionen</Link>}>
                           


                          <StyledTreeItem nodeId="26" label={<Link className="link" to="/video_wurzelFkt1"> {data[21]["https://schema.org/title"]?.map(title => title["@value"]).join(', ')} </Link>} />
                          <StyledTreeItem nodeId="27" label={<Link className="link" to="/video_wurzelFkt2">{data[23]["https://schema.org/title"]?.map(title => title["@value"]).join(', ')}</Link>} />
                          <StyledTreeItem nodeId="28" label={<Link className="link" to="/video_wurzelFkt3">{data[24]["https://schema.org/title"]?.map(title => title["@value"]).join(', ')}</Link>} />
                          <StyledTreeItem nodeId="29" label={<Link className="link" to="/video_wurzelFkt4">{data[25]["https://schema.org/title"]?.map(title => title["@value"]).join(', ')}</Link>} />
                          <StyledTreeItem nodeId="30" label={<Link className="link" to="/video_wurzelFkt5">{data[26]["https://schema.org/title"]?.map(title => title["@value"]).join(', ')}</Link>} />
                            
                         
                         </StyledTreeItem>






                      </StyledTreeItem>


                      
                      <StyledTreeItem nodeId="3" label={<Link className="link" to="/mathe1">Vektoren & Matrizen</Link>}>
                       <StyledTreeItem nodeId="8" label={<Link className="link" to="/eigenschaftvonvektoren">Eigenschaften von Vektoren(Grundlagen)</Link>}>

                          

                       
                          <StyledTreeItem nodeId="31" label={<Link className="link" to="/video_eigenschaftenvonvektoren1">{data[28]["https://schema.org/title"]?.map(title => title["@value"]).join(', ')} </Link>} />
                          <StyledTreeItem nodeId="32" label={<Link className="link" to="/video_eigenschaftenvonvektoren2">{data[30]["https://schema.org/title"]?.map(title => title["@value"]).join(', ')}</Link>} />
                          <StyledTreeItem nodeId="33" label={<Link className="link" to="/video_eigenschaftenvonvektoren3">{data[31]["https://schema.org/title"]?.map(title => title["@value"]).join(', ')}</Link>} />
                          <StyledTreeItem nodeId="34" label={<Link className="link" to="/video_eigenschaftenvonvektoren4">{data[32]["https://schema.org/title"]?.map(title => title["@value"]).join(', ')}</Link>} />
                          <StyledTreeItem nodeId="35" label={<Link className="link" to="/video_eigenschaftenvonvektoren5">{data[33]["https://schema.org/title"]?.map(title => title["@value"]).join(', ')}</Link>} />
                       
                       
                       
                       
                       </StyledTreeItem>



                       <StyledTreeItem nodeId="9" label={<Link className="link" to="/vektoroperationen">Vektoroperationen</Link>}>
                          



                          <StyledTreeItem nodeId="36" label={<Link className="link" to="/video_vektoroperationen1"> {data[34]["https://schema.org/title"]?.map(title => title["@value"]).join(', ')} </Link>} />
                          <StyledTreeItem nodeId="37" label={<Link className="link" to="/video_vektoroperationen2">{data[36]["https://schema.org/title"]?.map(title => title["@value"]).join(', ')}</Link>} />
                          <StyledTreeItem nodeId="38" label={<Link className="link" to="/video_vektoroperationen3">{data[37]["https://schema.org/title"]?.map(title => title["@value"]).join(', ')}</Link>} />
                          <StyledTreeItem nodeId="39" label={<Link className="link" to="/video_vektoroperationen4">{data[38]["https://schema.org/title"]?.map(title => title["@value"]).join(', ')}</Link>} />
                          <StyledTreeItem nodeId="40" label={<Link className="link" to="/video_vektoroperationen5">{data[39]["https://schema.org/title"]?.map(title => title["@value"]).join(', ')}</Link>} />




                       </StyledTreeItem>



                       <StyledTreeItem nodeId="10" label={<Link className="link" to="/matrizen">Matrizen(Grundlagen)</Link>}>
                       
                          


                          <StyledTreeItem nodeId="41" label={<Link className="link" to="/video_matrizen1"> {data[41]["https://schema.org/title"]?.map(title => title["@value"]).join(', ')} </Link>} />
                          <StyledTreeItem nodeId="42" label={<Link className="link" to="/video_matrizen2">{data[43]["https://schema.org/title"]?.map(title => title["@value"]).join(', ')}</Link>} />
                          <StyledTreeItem nodeId="43" label={<Link className="link" to="/video_matrizen3">{data[44]["https://schema.org/title"]?.map(title => title["@value"]).join(', ')}</Link>} />
                          <StyledTreeItem nodeId="44" label={<Link className="link" to="/video_matrizen4">{data[45]["https://schema.org/title"]?.map(title => title["@value"]).join(', ')}</Link>} />
                          <StyledTreeItem nodeId="45" label={<Link className="link" to="/video_matrizen5">{data[46]["https://schema.org/title"]?.map(title => title["@value"]).join(', ')}</Link>} />







                       </StyledTreeItem>








                      </StyledTreeItem>
                      
                    </StyledTreeItem>

















                  </TreeView>
                </div>
                <div className="rectangle-6">
          <span>Videos</span>
          <div className="videos">
            <div><Link className="link" to="/video_vektoroperationen1"><img className="img" src={data[34]["https://schema.org/thumbnailUrl"]?.map(thumbnail => thumbnail["@value"]).join(', ')} alt="Thumbnail" /></Link><h6 style={{whiteSpace: "pre-line"}}>{data[34]["https://schema.org/title"]?.map(title => title["@value"]).join(', ')}</h6> </div>
            <div><Link className="link" to="/video_vektoroperationen2"><img className="img" src={data[36]["https://schema.org/thumbnailUrl"]?.map(thumbnail => thumbnail["@value"]).join(', ')} alt="Thumbnail" /></Link><h6 style={{whiteSpace: "pre-line"}}>{data[36]["https://schema.org/title"]?.map(title => title["@value"]).join(', ')}</h6>  </div>
            <div><Link className="link" to="/video_vektoroperationen3"><img className="img" src={data[37]["https://schema.org/thumbnailUrl"]?.map(thumbnail => thumbnail["@value"]).join(', ')} alt="Thumbnail" /></Link><h6 style={{whiteSpace: "pre-line"}}>{data[37]["https://schema.org/title"]?.map(title => title["@value"]).join(', ')}</h6>  </div>
            <div><Link className="link" to="/video_vektoroperationen4"><img className="img" src={data[38]["https://schema.org/thumbnailUrl"]?.map(thumbnail => thumbnail["@value"]).join(', ')} alt="Thumbnail" /></Link><h6 style={{whiteSpace: "pre-line"}}>{data[38]["https://schema.org/title"]?.map(title => title["@value"]).join(', ')}</h6>  </div>
            <div><Link className="link" to="/video_vektoroperationen5"><img className="img" src={data[39]["https://schema.org/thumbnailUrl"]?.map(thumbnail => thumbnail["@value"]).join(', ')} alt="Thumbnail" /></Link><h6 style={{whiteSpace: "pre-line"}}>{data[39]["https://schema.org/title"]?.map(title => title["@value"]).join(', ')}</h6>  </div>
          </div>
          <p>Article</p>
          <div className="videos">
          
          <a href={data[40]["https://schema.org/url"]?.map(url => url["@value"]).join(', ')} >{data[40]["https://schema.org/title"]?.map(title => title["@value"]).join(', ')}</a>


          </div>
        </div>
              </div>
            </>
          ) : (
            <p>Daten werden geladen...</p>  // wird angezeigt, wenn Daten noch nicht geladen sind
          )}
        </div>
      );

}

export default Vektoroperationen;