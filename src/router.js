import React from "react";
import { Users } from "./components/Users";
import { Teams } from "./components/Teams";
import UserProfile from "./components/UserProfile";

const routes = {
  "/": () => <Users />,
  "/teams": () => <Teams />,
  "/profile": () => <UserProfile />,
};

export default routes;
