import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import HomePage from "../HomePage";
import SignupPage from "../SignupPage";
import CreateVideo from "../CreateVideo";
import AllVideos from "../AllVideos";

export const routes = {
  home: "/",
  signupPage: "/signup",
  createVideo: "/createVideo",
  allVideo: "/allVideo"
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route exact path={routes.home} component={HomePage} />
        <Route exact path={routes.signupPage} component={SignupPage} />
        <Route exact path={routes.createVideo} component={CreateVideo}/>
        <Route exact path={routes.allVideo} component={AllVideos}/>
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
