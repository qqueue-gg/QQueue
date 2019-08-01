import React from "react";
import { Users } from "./components/Users";
import { Teams } from "./components/Teams";
import UserProfile from "./components/UserProfile";
import Messages from "./components/Messages";
import LoginSignup from "./components/LoginSignup";

const routes = {
  "/": () => <Users />,
  "/teams": () => <Teams />,
  "/profile": () => <UserProfile />,
  "/messages": () => <Messages />,
  "/login": () => <LoginSignup />,
};

export default routes;
