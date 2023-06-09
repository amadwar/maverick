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
import Gettitle from "../../GetTitle";



function Video_architektur1(){



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
      
      
      <span className="scrum">Architektur Studium</span>
      <div className="flex-container">
      <div className="rectangle-1">  
        <TreeView
       aria-label="customized"
       defaultExpanded={['1']}
       defaultCollapseIcon={<MinusSquare />}
       defaultExpandIcon={<PlusSquare />}
      
       sx={{ height: 264, flexGrow: 1, maxWidth: 400, overflowY: 'auto' }}
       >



      
       <StyledTreeItem nodeId="1" label={<Link className="link" to="/architektur">Architektur Studium</Link>}>
        <StyledTreeItem nodeId="2" label={checked ? <div className="checked"> <img className="heck" src={check} /><Link className="link" to="/video_architektur1">Architecture and the Built Environment |KTH Virtual campus tour </Link></div> :<Link className="link" to="/video_architektur1">Architecture and the Built Environment |KTH Virtual campus tour</Link>} />
        <StyledTreeItem nodeId="3" label={<Link className="link" to="/video_architektur2">Learning to See Like an Architect</Link>} />
        <StyledTreeItem nodeId="4" label={<Link className="link" to="/video_architektur3">New ideas for a collaborative space on the Architecture Quad!</Link>} />
        <StyledTreeItem nodeId="5" label={<Link className="link" to="/video_architektur4">Interior Design with an Architect's Eye: Here's my Process</Link>} />
        <StyledTreeItem nodeId="6" label={<Link className="link" to="/video_architektur5">Pro tip: Add a human subject in architecture to create scale!</Link>} />
       </StyledTreeItem>





       </TreeView>
        
      


        </div>
        <div className="rectangle-6">
          <h3><Gettitle link="https://entitygraph.azurewebsites.net/api/s/REAL_UI_MockUP_TdF/entities/Zfhp8ToC6vk?property=sdo.identifier"/></h3>
          
            <div className="video"><GetVideo link="https://entitygraph.azurewebsites.net/api/s/REAL_UI_MockUP_TdF/entities/Zfhp8ToC6vk?property=sdo.identifier" width="600px" height="400px"/></div>
          
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

export default Video_architektur1;