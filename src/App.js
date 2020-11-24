import React from "react";
import { Switch, Route } from "react-router";

import LaunchScreen from "./components/LaunchScreen";
import OverallView from "./components/OverallView/OverallView";
import EntityReport from "./components/EntityReport";
import QualityView from "./components/QualityView";
import ProfileGraph from "./components/ProfileGraph";
import EnterpriseDataModel from "./components/EnterpriseDataModel";
import "./App.css";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/MP/" component={LaunchScreen} />
        <Route path="/MP/overall/:name" component={OverallView} />
        <Route path="/MP/entityReport/:name" component={EntityReport} />
        <Route path="/MP/QualityView/:name" component={QualityView} />
        <Route path="/MP/profile" component={ProfileGraph} />
        <Route path="/MP/EnterpriseDataModel" component={EnterpriseDataModel} />
      </Switch>
    </div>
  );
}

export default App;
