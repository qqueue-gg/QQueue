import React from "react";
import { Users } from "./components/Users";
import { Teams } from "./components/Teams";
import UserProfile from "./components/UserProfile";
import Messages from "./components/Messages";

const routes = {
  "/": () => <Users />,
  "/teams": () => <Teams />,
  "/profile": () => <UserProfile />,
  "/messages": () => <Messages />
};

export default routes;
