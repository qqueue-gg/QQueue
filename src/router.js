import React from "react";
import { Users } from "./components/Users";
import { Teams } from "./components/Teams";
import UserProfile from "./components/UserProfile";
import LoginSignup from "./components/LoginSignup";

const routes = {
  "/": () => <Users />,
  "/teams": () => <Teams />,
  "/profile": () => <UserProfile />,
  "/login": () => <LoginSignup />,
};

export default routes;
