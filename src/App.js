import React from "react";
import { Switch, Route } from "react-router";

import TwoDGraph from "./components/2DGraph";
import OverallView from "./components/OverallView";
import EntityReport from "./components/EntityReport";
import QualityView from "./components/QualityView";
import ProfileGraph from "./components/ProfileGraph";
import ThreeDGraph from "./components/3DGraph";
import EnterpriseDataModel from "./components/EnterpriseDataModel";
import "./App.css";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={TwoDGraph} />
        <Route path="/overall" component={OverallView} />
        <Route path="/entityReport/:name" component={EntityReport} />
        <Route path="/QualityView" component={QualityView} />
        <Route path="/profile" component={ProfileGraph} />
        <Route path="/EnterpriseDataModel" component={EnterpriseDataModel} />
      </Switch>
    </div>
  );
}

export default App;
