import * as React from "react";
import "../../Video_devops.css";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import TreeView from '@mui/lab/TreeView';
import TreeItem, { treeItemClasses, TreeItemProps } from '@mui/lab/TreeItem';
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';
import { alpha, styled } from '@mui/material/styles';
import Collapse from '@mui/material/Collapse';
import { useSpring, animated } from "@react-spring/web";
import { TransitionProps } from '@mui/material/transitions';
import { Link } from "react-router-dom";
import GetVideo from "../../getvideo";
import { useEffect, useState } from "react";
import axios from "axios";
import VideoGallery1 from "../../getYoutubeVideo";

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
  




function Video_kontrollanweisungenn5(){

  const [data, setData] = useState<LearningResource[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<LearningResource[]>("./Kontrollanweisungen.json");
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

   const check="./check.svg.svg";
   const minus="./minus.svg.png";
    
   const [checked, setChecked] = React.useState(false);

  const handleCheckClick = () => {
    setChecked(true);
  };

  const handleMinusClick = () => {
    setChecked(true);
  };

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
          <span className="scrum">{data?.[1]?.["https://schema.org/termCode"]?.map(title => title["@value"]).join(', ')}</span>
          <div className="flex-container">
            <div className="rectangle-1">  
              <TreeView
                aria-label="customized"
                defaultExpanded={['1']}
                defaultCollapseIcon={<MinusSquare />}
                defaultExpandIcon={<PlusSquare />}
                defaultEndIcon={<CloseSquare/>}
                sx={{ height: 264, flexGrow: 1, maxWidth: 400, overflowY: 'auto' }}
              >
                <StyledTreeItem nodeId="1" label={<Link className="link" to="/kontrollanweisungenn">{data?.[1]?.["https://schema.org/termCode"]?.map(title => title["@value"]).join(', ')}</Link>}>
                  <StyledTreeItem nodeId="2" label={<Link className="link" to="/video_kontrollanweisungenn1"> {data?.[0]?.["https://schema.org/title"]?.map(title => title["@value"]).join(', ')} </Link>} />
                  <StyledTreeItem nodeId="3" label={<Link className="link" to="/video_kontrollanweisungenn2">{data?.[2]?.["https://schema.org/title"]?.map(title => title["@value"]).join(', ')}</Link>} />
                  <StyledTreeItem nodeId="4" label={<Link className="link" to="/video_kontrollanweisungenn3">{data?.[3]?.["https://schema.org/title"]?.map(title => title["@value"]).join(', ')}</Link>} />
                  <StyledTreeItem nodeId="5" label={<Link className="link" to="/video_kontrollanweisungenn4">{data?.[4]?.["https://schema.org/title"]?.map(title => title["@value"]).join(', ')}</Link>} />
                 <StyledTreeItem nodeId="6" label={checked ? <div className="checked"> <img className="heck" src={check} /><Link className="link" to="/video_kontrollanweisungenn5">{data?.[5]?.["https://schema.org/title"]?.map(title => title["@value"]).join(', ')}</Link></div> :<Link className="link" to="/video_kontrollanweisungenn5">{data?.[5]?.["https://schema.org/title"]?.map(title => title["@value"]).join(', ')}</Link>} />
                </StyledTreeItem>   
              </TreeView>
               
            </div>
            <div className="rectangle-6">
              <h3>{data?.[5]?.["https://schema.org/title"]?.map(title => title["@value"]).join(', ')}</h3>
              <div className="video">
              <VideoGallery1 
                  src={data?.[5]?.["https://schema.org/url"]?.map(url => url["@value"]).join(', ')??""}
                  width="600px" 
                  height="400px"
                />
              </div>
              <p>Ist dieses Video hilfreich?</p>
              <div className="Feedback">
            <img className="check" src={check} onClick={handleCheckClick}/>
            <img className="minus" src={minus} onClick={handleMinusClick}/>


            </div>
             </div>
          </div>
        </div>
      );
      
    }
    
    export default Video_kontrollanweisungenn5;





   