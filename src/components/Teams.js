import React, { useState, useEffect } from "react";
import { Container } from "@material-ui/core";

import Team  from './Team.js';


export const Teams = () => {
  // iterate over users and render User components

  return (
    <Container>
      <Team />
    </Container>
  );
};
