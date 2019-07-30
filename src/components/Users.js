import React, { useState, useEffect } from "react";
import { Container } from "@material-ui/core";

import { User } from './User';


export const Users = () => {
  // iterate over users and render User components

  return (
    <Container>
      <User />
    </Container>
  );
};
