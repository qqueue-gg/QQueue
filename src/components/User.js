import React, { useState, useEffect } from "react";
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
  }
}));

const ProfileImage = styled.img`
  border-radius: 50%;
  width: 4rem;
`;

export const User = props => {
  const classes = useStyles();

  return (
    <ExpansionPanel>
      <ExpansionPanelSummary
        expandIcon={<ExpandMore />}
        aria-controls="panel1c-content"
        id="panel1c-header"
      >
        <div className={classes.column}>
          <ProfileImage src="http://pngimg.com/uploads/fish/fish_PNG25137.png" />
          <Typography className={classes.heading}>@fish</Typography>
        </div>
        <div className={classes.column}>
          <Typography className={classes.secondaryHeading}>CS:GO</Typography>
          <Typography className={classes.secondaryHeading}>
            Rank: Legendary Eagle
          </Typography>
          <Typography className={classes.secondaryHeading}>
            Current Team: Team Liquid
          </Typography>
        </div>
        <div className={classes.column}>
          <Typography className={classes.secondaryHeading}>Age: 25</Typography>
          <div className={classes.column}>
            <Typography className={classes.secondaryHeading}>
              Timezone: PST - USA
            </Typography>
          </div>
          <div className={classes.column}>
            <Typography className={classes.secondaryHeading}>
              Last Seen: Jul 30, 19
            </Typography>
          </div>
        </div>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Typography>
          Gaming Interests: Fortnite, Apex Legends, League of Legends, DOTA 2
        </Typography>
        <hr />
        <Typography>
          <a
            href="https://steamcommunity.com/id/stewie2kTv"
            className={classes.link}
          >
            Steam Profile
          </a>
        </Typography>
      </ExpansionPanelDetails>
      <Divider />
      <ExpansionPanelActions>
        <Button>
          <Message />
        </Button>
        <Button color="primary">
          <MailOutline />
        </Button>
      </ExpansionPanelActions>
    </ExpansionPanel>
  );
};
