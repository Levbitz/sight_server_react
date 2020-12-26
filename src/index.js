import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.9.0";

// pages for this product
import Components from "views/Components/Components.js";

import CausePage from "views/LandingPage/CausePage";
import AboutPage from "views/LandingPage/AboutPage";
import GovernacePage from "views/LandingPage/GovernancePage";
import WhatWeDo from "views/LandingPage/WhatWeDoPage";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/about-page" component={AboutPage} />
      <Route path="/governance-page" component={GovernacePage} />
      <Route path="/what-we-do-page" component={WhatWeDo} />
      <Route path="/cause-page" component={CausePage} />
      <Route path="/" component={Components} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
