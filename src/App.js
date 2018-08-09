import React, { Component } from 'react';
import './App.css';
import {DiffContainer} from 'wayback-diff';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
    webMonitoringProcessingURL= 'http://localhost';
    webMonitoringProcessingPort= '8888';

  render() {
    return (
        <Router>
            <Switch>
                <Route path="/diff/:timestampA/:timestampB/:site" render={({match}) =>
                    <DiffContainer site={match.params.site} timestampA={match.params.timestampA}
                      webMonitoringProcessingURL={this.webMonitoringProcessingURL}
                      webMonitoringProcessingPort={this.webMonitoringProcessingPort}
                      timestampB={match.params.timestampB} fetchCallback = {null} />
                }/>
                <Route path="/diff/:site" render={({match}) =>
                    <DiffContainer site={match.params.site} fetchCallback = {null}
                     webMonitoringProcessingURL={this.webMonitoringProcessingURL}
                      webMonitoringProcessingPort={this.webMonitoringProcessingPort}
                    />} />
            </Switch>
        </Router>
    );
  }
}

export default App;
