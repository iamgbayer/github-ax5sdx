import React, { Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { firebase } from "@poc/common";

import { SignIn, Signup } from "./pages";
import { WithAuthorization } from "./containers";

const Creators = React.lazy(() => import("creators/App"));
const Members = React.lazy(() => import("members/App"));

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div />}>
        <Switch>
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={Signup} />

          <WithAuthorization>
            <Route exact path="/" component={Members} />
            <Route exact path="/creators" component={Creators} />
          </WithAuthorization>
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
