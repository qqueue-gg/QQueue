import React from "react";
import styled from "styled-components";
import {
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  ExpansionPanelActions,
  Divider,
  Button,
  Typography,
  makeStyles
} from "@material-ui/core";
import { ExpandMore, Message, MailOutline } from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
  heading: {
    fontSize: theme.typography.pxToRem(15)
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary
  },
  column: {
    flexBasis: "33.33%"
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline"
    }
  },
  displayCol: {
    display: "flex",
    flexDirection: "column"
  },
  mb: {
    marginBottom: "0.5rem"
  }
}));

const ProfileImage = styled.img`
  border-radius: 50%;
  width: 4rem;
`;

export const User = props => {
  const classes = useStyles();

  return (
    <ExpansionPanel className={classes.mb}>
      <ExpansionPanelSummary
        expandIcon={<ExpandMore />}
        aria-controls="panel1c-content"
        id="panel1c-header"
      >
        <div className={classes.column}>
          <ProfileImage src={props.logo} />
          <Typography className={classes.heading}>@{props.username}</Typography>
        </div>
        <div className={classes.column}>
          <Typography className={classes.secondaryHeading}>{props.primaryGame}</Typography>
          <Typography className={classes.secondaryHeading}>
            Rank: {props.skill}
          </Typography>
          <Typography className={classes.secondaryHeading}>
            Current Team: {props.currentTeam}
          </Typography>
        </div>
        <div className={classes.column}>
          <Typography className={classes.secondaryHeading}>Age: {props.age}</Typography>
          <div className={classes.column}>
            <Typography className={classes.secondaryHeading}>
              Timezone: {props.timezone}
            </Typography>
          </div>
          <div className={classes.column}>
            <Typography className={classes.secondaryHeading}>
              Last Seen: {props.lastSeen}
            </Typography>
          </div>
        </div>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <div className={classes.displayCol}>
          <Typography>
            Gaming Interests: {props.hobbyGames}
          </Typography>
      
          <Typography>
            <a
              className={classes.link}
              href={props.steamprofile}
              target="_blank"
              rel="noopener noreferrer"
            >
              Steam Profile
            </a>
          </Typography>
        </div>
      </ExpansionPanelDetails>
      <Divider />
      <ExpansionPanelActions>
        <Button>
          <Message />
        </Button>
        <Button variant="contained" href="mailto:eisele.joseph1@gmail.com" color="primary">
          <MailOutline />
        </Button>
      </ExpansionPanelActions>
    </ExpansionPanel>
  );
};
