import React, { Component } from 'react';
import './App.css';
import {DiffContainer, SunburstContainer} from 'wayback-diff';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Loading from "./loading.jsx";

class App extends Component {
    conf = require('./conf.json');

    fetchSnapshot (timestamp) {
        var pathname = window.location.pathname;
        if (pathname[pathname.length - 1] === '/') {
            pathname = pathname.substring(0, pathname.length - 2);
        }
        pathname = pathname.split('/');
        let domain = pathname.pop();
        let url = this.conf.snapshotsPrefix + timestamp + '/' + domain;
        return fetch(url);
    }

  render() {
    return (
        <Router>
          <Switch>
            <Route path='/diff/([0-9]{14})/([0-9]{14})/(.+)' render={({match}) =>
              <DiffContainer url={match.params[2]} timestampA={match.params[0]}
                loader={<Loading waybackLoaderPath={'https://users.it.teithe.gr/~it133996/wayback-loader.svg'} />}
                timestampB={match.params[1]} fetchCDXCallback={null} conf={this.conf} fetchSnapshotCallback={null} />
            } />
            <Route path='/diff/([0-9]{14})//(.+)' render={({match}) =>
              <DiffContainer url={match.params[1]} timestampA={match.params[0]}
                loader={<Loading waybackLoaderPath={'https://users.it.teithe.gr/~it133996/wayback-loader.svg'} />}
                fetchCDXCallback={null} conf={this.conf} fetchSnapshotCallback={null}/>
            } />
            <Route path='/diff//([0-9]{14})/(.+)' render={({match}) =>
              <DiffContainer url={match.params[1]} timestampB={match.params[0]}
                loader={<Loading waybackLoaderPath={'https://users.it.teithe.gr/~it133996/wayback-loader.svg'} />}
                fetchCDXCallback={null} conf={this.conf} fetchSnapshotCallback={null}/>
            } />

            <Route path='/diff///(.+)' render={({match}) =>
              <DiffContainer url={match.params[0]} conf={this.conf} noTimestamps={true} fetchCDXCallback={null}
                loader={<Loading waybackLoaderPath={'https://users.it.teithe.gr/~it133996/wayback-loader.svg'} />}/>
            } />
            <Route path='/diff/(.+)' render={({match}) =>
              <DiffContainer url={match.params[0]} fetchCDXCallback={null}
                loader={<Loading waybackLoaderPath={'https://users.it.teithe.gr/~it133996/wayback-loader.svg'} />} conf={this.conf}/>}
            />
            <Route path='/diffgraph/([0-9]{14})/(.+)' render={({match}) =>
              <SunburstContainer url={match.params[1]} wdd={this.conf['wayback-discover-diff']} timestamp={match.params[0]}
                loader={<Loading waybackLoaderPath={'https://users.it.teithe.gr/~it133996/wayback-loader.svg'} />}
                urlPrefix={this.conf.urlPrefix}/>} />
          </Switch>
        </Router>
    );
  }
}

export default App;
