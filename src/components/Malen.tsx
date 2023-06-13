import * as React from "react";
import "./Devops.css";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import TreeView from '@mui/lab/TreeView';
import TreeItem, { treeItemClasses, TreeItemProps } from '@mui/lab/TreeItem';
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';
import { alpha, styled } from '@mui/material/styles';
import Collapse from '@mui/material/Collapse';
import { useSpring, animated } from "@react-spring/web";
import { TransitionProps } from '@mui/material/transitions';
import { Link } from "react-router-dom";
import GetLearningResource from "./getVideoDaten";



function Malen(){




    const grafik2="./grafik2.png";
    const grafik4 = "./grafik4.png";
    const grafik6 = "./grafik6.png";
    const grafik = "./grafik.png";
    const frame = "./frame.svg";
    

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
      
      
      <span className="scrum">Malen</span>
      <div className="flex-container">
      <div className="rectangle-1">  
        <TreeView
       aria-label="customized"
       defaultExpanded={['1']}
       defaultCollapseIcon={<MinusSquare />}
       defaultExpandIcon={<PlusSquare />}
       defaultEndIcon={<CloseSquare />}
       sx={{ height: 264, flexGrow: 1, maxWidth: 400, overflowY: 'auto' }}
       >
      <StyledTreeItem nodeId="1" label="Malen">
        <StyledTreeItem nodeId="2" label={<Link className="link" to="/video_malen1">Evergreen Falls Bob Ross Wet On Wet Oil Painting Tutorial</Link>} />
        <StyledTreeItem nodeId="3" label={<Link className="link" to="/Video_malen2">Alcohol Ink WISPY Looks + embellishments - Detailed Tutorial</Link>} />
        <StyledTreeItem nodeId="4" label={<Link className="link" to="/video_malen3">ALCOHOL INK ✨ Easy GLITTER Borders in ANY Color</Link>} />
        <StyledTreeItem nodeId="5" label={<Link className="link" to="/video_malen4">thick paint on my vice</Link>} />
        <StyledTreeItem nodeId="6" label={<Link className="link" to="/video_malen5">Paint a Rooster in Acrylics</Link>} />
       </StyledTreeItem>
       </TreeView>
        
      


        </div>
        <div className="rectangle-6">
          <span>Videos</span>
          <div className="videos">
            <div><Link className="link" to="/video_malen1">< GetLearningResource  link="https://entitygraph.azurewebsites.net/api/s/REAL_UI_MockUP_TdF/entities/lQXMLnJu35A?property=sdo.identifier"/></Link>  </div>
            <div><Link className="link" to="/video_malen2">< GetLearningResource  link="https://entitygraph.azurewebsites.net/api/s/REAL_UI_MockUP_TdF/entities/70wtDY5WwnE?property=sdo.identifier"/></Link>  </div>
            <div><Link className="link" to="/video_malen3">< GetLearningResource  link="https://entitygraph.azurewebsites.net/api/s/REAL_UI_MockUP_TdF/entities/oAQEZY_v08E?property=sdo.identifier"/></Link>  </div>
            <div><Link className="link" to="/video_malen4">< GetLearningResource  link="https://entitygraph.azurewebsites.net/api/s/REAL_UI_MockUP_TdF/entities/8Usi8K5U9w8?property=sdo.identifier"/></Link>  </div>
            <div><Link className="link" to="/video_malen5">< GetLearningResource  link="https://entitygraph.azurewebsites.net/api/s/REAL_UI_MockUP_TdF/entities/5ZJpsNNbQfk?property=sdo.identifier"/></Link>  </div>
            
            
          </div>
        </div>
      </div>
    </div>
  );

}

export default Malen;