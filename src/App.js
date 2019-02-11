import React, { Component } from 'react';
import './App.css';
import {DiffContainer, SunburstContainer} from 'wayback-diff';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


class App extends Component {
    conf = require('./conf.json');

    // fetchSnapshot (timestamp) {
    //     var pathname = window.location.pathname;
    //     if (pathname[pathname.length - 1] === '/') {
    //         pathname = pathname.substring(0, pathname.length - 2);
    //     }
    //     pathname = pathname.split('/');
    //     let domain = pathname.pop();
    //     let url = this.conf.snapshotsPrefix + timestamp + '/' + domain;
    //     return fetch(url);
    // }

  render() {
    return (
        <Router>
          <Switch>
            <Route path='/diff/([0-9]{14})/([0-9]{14})/(.+)' render={({match, location}) =>
              <DiffContainer url={match.params[2] + location.search} timestampA={match.params[0]}
                timestampB={match.params[1]} fetchCDXCallback={null} conf={this.conf} fetchSnapshotCallback={null} />
            } />
            <Route path='/diff/([0-9]{14})//(.+)' render={({match, location}) =>
              <DiffContainer url={match.params[1] + location.search} timestampA={match.params[0]}
                fetchCDXCallback={null} conf={this.conf} fetchSnapshotCallback={null}/>
            } />
            <Route path='/diff//([0-9]{14})/(.+)' render={({match, location}) =>
              <DiffContainer url={match.params[1] + location.search} timestampB={match.params[0]}
                fetchCDXCallback={null} conf={this.conf} fetchSnapshotCallback={null}/>
            } />
            <Route path='/diff///(.+)' render={({match, location}) =>
              <DiffContainer url={match.params[0] + location.search} conf={this.conf} noTimestamps={true}
                fetchCDXCallback={null}/>} />
            <Route path='/diff/(.+)' render={({match, location}) =>
              <DiffContainer url={match.params[0] + location.search} fetchCDXCallback={null} conf={this.conf}/>}/>
            <Route path='/diffgraph/([0-9]{14})/(.+)' render={({match, location}) =>
              <SunburstContainer url={match.params[1] + location.search} timestamp={match.params[0]}
                conf={this.conf} fetchSnapshotCallback={null}/>}
            />
          </Switch>
        </Router>
    );
  }
}

export default App;
