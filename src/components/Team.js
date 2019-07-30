import React from "react";
import PropTypes from "prop-types";
import teamPic  from '../static/images/team1.png';
import { makeStyles, 
  ExpansionPanel, 
  ExpansionPanelDetails, 
  ExpansionPanelSummary, 
  ExpandsionPanelActions, 
  Typographym, 
  Chip, 
  ExpandMoreIcon, 
  Button, 
  Divider,
  Avatar, 
  Typography} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
  },
  column: {
    flexBasis: '33.33%',
  },
  avatar: {
    flexBasis: '33.33%',
    magin: 10,
    width: 60,
    height: 60,
    paddingRight: 10,
  }

}))

export default function Team ({TeamName, TeamData}){
  const classes = useStyles();

  return(
  <container>
    <ExpansionPanel>
      <ExpansionPanelSummary> 
        <div>
          <Avatar alt="Remy Sharp" src={teamPic} className={classes.avatar} />
        </div>

        <div className={classes.column}>
          <Typography>TeamName</Typography>  
        </div>
        <div className={classes.column}>
          <Typography>TeamMoto: Flexin on ya'll</Typography>
        </div>
        <div className={classes.column}>
          <Typography>Game: CSGO</Typography>
        </div>
        <div className={classes.column}>
        <Button size="small" color="primary">Email</Button>
        </div>
      </ExpansionPanelSummary>
{/*Details Below */}
      <ExpansionPanelDetails>

      </ExpansionPanelDetails>
    </ExpansionPanel>
  </container>
  )
};

// Team.PropTypes = {
//   TeamName: PropTypes.string.isRequired,
//   TeamData: PropTypes.object.isRequired
// }

