import React, { Component } from 'react';
import './App.css';
import {DiffContainer} from 'wayback-diff';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Loading from "./loading.jsx";

class App extends Component {
    conf = require('./conf.json');

  render() {
    return (
        <Router>
            <Switch>
                <Route path='/diff/([0-9]{14})/([0-9]{14})/(.+)' render={({match}) =>
                    <DiffContainer site={match.params[2]} timestampA={match.params[0]} url={match.url}
                      loader={<Loading waybackLoaderPath={'https://users.it.teithe.gr/~it133996/wayback-loader.svg'} />}
                      timestampB={match.params[1]} fetchCallback={null} conf={this.conf} />
                } />
                <Route path='/diff/([0-9]{14})//(.+)' render={({match}) =>
                    <DiffContainer site={match.params[1]} timestampA={match.params[0]} url={match.url}
                      loader={<Loading waybackLoaderPath={'https://users.it.teithe.gr/~it133996/wayback-loader.svg'} />}
                      fetchCallback={null} conf={this.conf} />
                } />
                <Route path='/diff//([0-9]{14})/(.+)' render={({match}) =>
                    <DiffContainer site={match.params[1]} timestampB={match.params[0]} url={match.url}
                      loader={<Loading waybackLoaderPath={'https://users.it.teithe.gr/~it133996/wayback-loader.svg'} />}
                      fetchCallback={null} conf={this.conf} />
                } />

                <Route path='/diff///(.+)' render={({match}) =>
                    <DiffContainer site={match.params[0]} conf={this.conf} noTimestamps={true}
                      loader={<Loading waybackLoaderPath={'https://users.it.teithe.gr/~it133996/wayback-loader.svg'} />} />
                } />
                <Route path='/diff/(.+)' render={({match}) =>
                    <DiffContainer site={match.params[0]} fetchCallback={null} conf={this.conf}
                     loader={<Loading waybackLoaderPath={'https://users.it.teithe.gr/~it133996/wayback-loader.svg'} />} />}
                />
            </Switch>
        </Router>
    );
  }
}

export default App;
