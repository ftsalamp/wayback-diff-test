import React, { Component } from 'react';
import './App.css';
import {DiffContainer} from 'wayback-diff';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Loading from "./loading.jsx";

class App extends Component {
    webMonitoringProcessingURL= 'http://localhost:8888';

  render() {
    return (
        <Router>
            <Switch>
                <Route path="/diff/([^/]*)/([^/]*)/(.+)" render={({match}) =>
                  <DiffContainer site={match.params[2]} timestampA={match.params[0]}
                    webMonitoringProcessingURL={this.webMonitoringProcessingURL} limit={'1000'}
                    loader={<Loading waybackLoaderPath={'https://users.it.teithe.gr/~it133996/wayback-loader.svg'}/>}
                    timestampB={match.params[1]} fetchCallback = {null} />
                }/>
                <Route path="/diff/:timestampA//:site" render={({match}) =>
                    <DiffContainer site={match.params.site} timestampA={match.params.timestampA}
                      webMonitoringProcessingURL={this.webMonitoringProcessingURL} limit={'1000'}
                      noSnapshotURL={'https://users.it.teithe.gr/~it133996/noSnapshot.html'}
                      loader={<Loading waybackLoaderPath={'https://users.it.teithe.gr/~it133996/wayback-loader.svg'}/>}/>
                }/>
                <Route path="/diff//:timestampB/:site" render={({match}) =>
                    <DiffContainer site={match.params.site} timestampB={match.params.timestampB}
                      webMonitoringProcessingURL={this.webMonitoringProcessingURL} limit={'1000'}
                      noSnapshotURL={'https://users.it.teithe.gr/~it133996/noSnapshot.html'}
                      loader={<Loading waybackLoaderPath={'https://users.it.teithe.gr/~it133996/wayback-loader.svg'}/>}/>
                }/>
                <Route path="/diff/:site" render={({match}) =>
                    <DiffContainer site={match.params.site} fetchCallback = {null}
                     webMonitoringProcessingURL={this.webMonitoringProcessingURL} limit={'1000'}
                     loader={<Loading waybackLoaderPath={'https://users.it.teithe.gr/~it133996/wayback-loader.svg'}/>}
                    />} />
            </Switch>
        </Router>
    );
  }
}

export default App;
