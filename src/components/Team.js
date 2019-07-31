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
  },
  displayCol: {
    display: "flex",
    flexDirection: "column"
  }

}))

export default function Team (props){
  const classes = useStyles();
  
  // get All team players
  const mappedPlayers = props.teamMates.map((mates) =>{
    return(
      <Chip key={mates._id} label={mates.name} className={'chips'} >
      </Chip>
    )   
  });
    // get all accolates
  const mappedAccolades = props.accolades.map((acco) =>{
    return(
      <Chip label={acco.accolade} key={acco._id}>

      </Chip>
    )
  })

  return(
  <container>
    <ExpansionPanel>
      <ExpansionPanelSummary> 
        <div>
          <Avatar alt="Remy Sharp" src={teamPic} className={classes.avatar} />
        </div>

        <div className={classes.column}>
          <Typography>{props.teamName}</Typography>  
        </div>
        <div className={classes.column}>
          <Typography>{props.motto}</Typography>
        </div>
        <div className={classes.column}>
          <Typography>{props.primaryGame}</Typography>
        </div>
        <div className={classes.column}>
        <Button size="small" color="primary" email={props.email}>Email</Button>
        </div>
      </ExpansionPanelSummary>
{/*Details Below */}
      <ExpansionPanelDetails>
        <div className={classes.displayCol}>
          {mappedPlayers}

        </div>
        <div className={'bio'}>
          {props.bio}
        </div>
        <div className={'Accolades'} >
          {mappedAccolades}
        </div>

      </ExpansionPanelDetails>
      <Divider />
            
    </ExpansionPanel>
  </container>
  )
};

// Team.PropTypes = {
//   TeamName: PropTypes.string.isRequired,
//   TeamData: PropTypes.object.isRequired
// }

