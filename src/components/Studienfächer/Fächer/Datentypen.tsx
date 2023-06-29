import * as React from "react";
import "../../Devops.css";
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


function Datentypen(){

    const [data, setData] = useState<LearningResource[]>([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const [response1, response2, response3, response4,response5,response6] = await Promise.all([
              axios.get<LearningResource[]>("./Definitionen_in_der_Informatik.json"),
              axios.get<LearningResource[]>("./Datentypen.json"),
              axios.get<LearningResource[]>("./Variablen_und_Konstanten.json"),
              axios.get<LearningResource[]>("./Arithmetische_und_logische_Operationen.json"),
              axios.get<LearningResource[]>("./Kontrollanweisungen.json"),
              axios.get<LearningResource[]>("./O_Notation_und_Rechenregeln.json")
              
            ]);
      
            setData([...response1.data, ...response2.data, ...response3.data, ...response4.data,...response5.data,...response6.data]);
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
              <span className="scrum">{data[7]["https://schema.org/termCode"]?.map(title => title["@value"]).join(', ')}</span>
              <div className="flex-container">
                <div className="rectangle-1">  
                <TreeView
              aria-label="customized"
              defaultExpanded={['1']}
              defaultCollapseIcon={<MinusSquare />}
              defaultExpandIcon={<PlusSquare />}
              defaultEndIcon={<CloseSquare />}
              sx={{ height: 264, flexGrow: 1, maxWidth: 400, overflowY: 'auto' }}>





                <StyledTreeItem nodeId="1" label={<Link className="link" to="/Grundgebietederinformatik">Grundgebiete der Informatik</Link>}>
                    
                    <StyledTreeItem nodeId="2" label={<Link className="link" to="/datentypen">Definitionen in der Informatik</Link>} >
                      <StyledTreeItem nodeId="5" label={<Link className="link" to="/video_datentypen1"> {data[0]["https://schema.org/title"]?.map(title => title["@value"]).join(', ')} </Link>} />
                      <StyledTreeItem nodeId="6" label={<Link className="link" to="/video_datentypen2">{data[2]["https://schema.org/title"]?.map(title => title["@value"]).join(', ')}</Link>} />
                      <StyledTreeItem nodeId="7" label={<Link className="link" to="/video_datentypen3">{data[3]["https://schema.org/title"]?.map(title => title["@value"]).join(', ')}</Link>} />
                      <StyledTreeItem nodeId="8" label={<Link className="link" to="/video_datentypen4">{data[4]["https://schema.org/title"]?.map(title => title["@value"]).join(', ')}</Link>} />
                      <StyledTreeItem nodeId="9" label={<Link className="link" to="/video_datentypen5">{data[5]["https://schema.org/title"]?.map(title => title["@value"]).join(', ')}</Link>} />
                      
                    </StyledTreeItem>


                      
                    <StyledTreeItem nodeId="3" label={<Link className="link" to="/Grundgebietederinformatik">C-Programmierung</Link>}>

                       <StyledTreeItem nodeId="10" label={<Link className="link" to="/datentypen">Datentypen</Link>}>
                          <StyledTreeItem nodeId="14" label={<Link className="link" to="/video_datentypen1">{data[6]["https://schema.org/title"]?.map(title => title["@value"]).join(', ')} </Link>} />
                          <StyledTreeItem nodeId="15" label={<Link className="link" to="/video_datentypen2">{data[8]["https://schema.org/title"]?.map(title => title["@value"]).join(', ')}</Link>} />
                          <StyledTreeItem nodeId="16" label={<Link className="link" to="/video_datentypen3">{data[9]["https://schema.org/title"]?.map(title => title["@value"]).join(', ')}</Link>} />
                          <StyledTreeItem nodeId="17" label={<Link className="link" to="/video_datentypen4">{data[10]["https://schema.org/title"]?.map(title => title["@value"]).join(', ')}</Link>} />
                          <StyledTreeItem nodeId="18" label={<Link className="link" to="/video_datentypen5">{data[11]["https://schema.org/title"]?.map(title => title["@value"]).join(', ')}</Link>} />
                       </StyledTreeItem>



                       <StyledTreeItem nodeId="11" label={<Link className="link" to="/variablen&konstanten">Variablen & Konstanten</Link>}>
                          <StyledTreeItem nodeId="19" label={<Link className="link" to="/video_variablen&konstanten1"> {data[13]["https://schema.org/title"]?.map(title => title["@value"]).join(', ')} </Link>} />
                          <StyledTreeItem nodeId="20" label={<Link className="link" to="/video_variablen&konstanten2">{data[15]["https://schema.org/title"]?.map(title => title["@value"]).join(', ')}</Link>} />
                          <StyledTreeItem nodeId="21" label={<Link className="link" to="/video_variablen&konstanten3">{data[16]["https://schema.org/title"]?.map(title => title["@value"]).join(', ')}</Link>} />
                          <StyledTreeItem nodeId="22" label={<Link className="link" to="/video_variablen&konstanten4">{data[17]["https://schema.org/title"]?.map(title => title["@value"]).join(', ')}</Link>} />
                          <StyledTreeItem nodeId="23" label={<Link className="link" to="/video_variablen&konstanten5">{data[18]["https://schema.org/title"]?.map(title => title["@value"]).join(', ')}</Link>} />
                       </StyledTreeItem>



                       <StyledTreeItem nodeId="12" label={<Link className="link" to="/arithmetische&logischeoperationen">Arithmetische & logische Operationen</Link>}>
                          <StyledTreeItem nodeId="24" label={<Link className="link" to="/video_arithmetische&logischeoperationen1"> {data[19]["https://schema.org/title"]?.map(title => title["@value"]).join(', ')} </Link>} />
                          <StyledTreeItem nodeId="25" label={<Link className="link" to="/video_arithmetische&logischeoperationen2">{data[21]["https://schema.org/title"]?.map(title => title["@value"]).join(', ')}</Link>} />
                          <StyledTreeItem nodeId="26" label={<Link className="link" to="/video_arithmetische&logischeoperationen3">{data[22]["https://schema.org/title"]?.map(title => title["@value"]).join(', ')}</Link>} />
                          <StyledTreeItem nodeId="27" label={<Link className="link" to="/video_arithmetische&logischeoperationen4">{data[23]["https://schema.org/title"]?.map(title => title["@value"]).join(', ')}</Link>} />
                          <StyledTreeItem nodeId="28" label={<Link className="link" to="/video_arithmetische&logischeoperationen5">{data[24]["https://schema.org/title"]?.map(title => title["@value"]).join(', ')}</Link>} />
                       </StyledTreeItem>



                       <StyledTreeItem nodeId="13" label={<Link className="link" to="/kontrollanweisungenn">Kontrollanweisungen</Link>}>
                          <StyledTreeItem nodeId="29" label={<Link className="link" to="/video_kontrollanweisungenn1"> {data[25]["https://schema.org/title"]?.map(title => title["@value"]).join(', ')} </Link>} />
                          <StyledTreeItem nodeId="30" label={<Link className="link" to="/video_kontrollanweisungenn2">{data[27]["https://schema.org/title"]?.map(title => title["@value"]).join(', ')}</Link>} />
                          <StyledTreeItem nodeId="31" label={<Link className="link" to="/video_kontrollanweisungenn3">{data[28]["https://schema.org/title"]?.map(title => title["@value"]).join(', ')}</Link>} />
                          <StyledTreeItem nodeId="32" label={<Link className="link" to="/video_kontrollanweisungenn4">{data[29]["https://schema.org/title"]?.map(title => title["@value"]).join(', ')}</Link>} />
                          <StyledTreeItem nodeId="33" label={<Link className="link" to="/video_kontrollanweisungenn5">{data[30]["https://schema.org/title"]?.map(title => title["@value"]).join(', ')}</Link>} />
                       </StyledTreeItem>


                    </StyledTreeItem>





                    <StyledTreeItem nodeId="4" label={<Link className="link" to="/Grundgebietederinformatik">Laufzeitanalyse</Link>}>

                      <StyledTreeItem nodeId="8" label={<Link className="link" to="/o-Notationundrechenregeln">O-Notation und Rechenregeln</Link>}>
                          <StyledTreeItem nodeId="32" label={<Link className="link" to="/video_o-Notationundrechenregeln1">{data[31]["https://schema.org/title"]?.map(title => title["@value"]).join(', ')} </Link>} />
                          <StyledTreeItem nodeId="33" label={<Link className="link" to="/video_o-Notationundrechenregeln2">{data[33]["https://schema.org/title"]?.map(title => title["@value"]).join(', ')}</Link>} />
                          <StyledTreeItem nodeId="34" label={<Link className="link" to="/video_o-Notationundrechenregeln3">{data[34]["https://schema.org/title"]?.map(title => title["@value"]).join(', ')}</Link>} />
                          <StyledTreeItem nodeId="35" label={<Link className="link" to="/video_o-Notationundrechenregeln4">{data[35]["https://schema.org/title"]?.map(title => title["@value"]).join(', ')}</Link>} />
                          <StyledTreeItem nodeId="36" label={<Link className="link" to="/video_o-Notationundrechenregeln5">{data[36]["https://schema.org/title"]?.map(title => title["@value"]).join(', ')}</Link>} />
                      </StyledTreeItem>
                       
                    </StyledTreeItem>


                </StyledTreeItem>
                      
                 
            </TreeView>

            </div>
            <div className="rectangle-6">
          <span>Videos</span>
          <div className="videos">
            <div><Link className="link" to="/video_datentypen1"><img className="img" src={data[6]["https://schema.org/thumbnailUrl"]?.map(thumbnail => thumbnail["@value"]).join(', ')} alt="Thumbnail" /></Link><h6 style={{whiteSpace: "pre-line"}}>{data[6]["https://schema.org/title"]?.map(title => title["@value"]).join(', ')}</h6> </div>
            <div><Link className="link" to="/video_datentypen2"><img className="img" src={data[8]["https://schema.org/thumbnailUrl"]?.map(thumbnail => thumbnail["@value"]).join(', ')} alt="Thumbnail" /></Link><h6 style={{whiteSpace: "pre-line"}}>{data[8]["https://schema.org/title"]?.map(title => title["@value"]).join(', ')}</h6>  </div>
            <div><Link className="link" to="/video_datentypen3"><img className="img" src={data[9]["https://schema.org/thumbnailUrl"]?.map(thumbnail => thumbnail["@value"]).join(', ')} alt="Thumbnail" /></Link><h6 style={{whiteSpace: "pre-line"}}>{data[9]["https://schema.org/title"]?.map(title => title["@value"]).join(', ')}</h6>  </div>
            <div><Link className="link" to="/video_datentypen4"><img className="img" src={data[10]["https://schema.org/thumbnailUrl"]?.map(thumbnail => thumbnail["@value"]).join(', ')} alt="Thumbnail" /></Link><h6 style={{whiteSpace: "pre-line"}}>{data[10]["https://schema.org/title"]?.map(title => title["@value"]).join(', ')}</h6>  </div>
            <div><Link className="link" to="/video_datentypen5"><img className="img" src={data[11]["https://schema.org/thumbnailUrl"]?.map(thumbnail => thumbnail["@value"]).join(', ')} alt="Thumbnail" /></Link><h6 style={{whiteSpace: "pre-line"}}>{data[11]["https://schema.org/title"]?.map(title => title["@value"]).join(', ')}</h6>  </div>
          </div>
          <p>Article</p>
          <div className="videos">
          
          <a href={data[12]["https://schema.org/url"]?.map(url => url["@value"]).join(', ')} >{data[6]["https://schema.org/title"]?.map(title => title["@value"]).join(', ')}</a>


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

export default Datentypen;