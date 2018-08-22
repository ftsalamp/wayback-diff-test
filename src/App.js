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
                <Route path="/diff/([^/]*)/([^/]*)/(.+)" render={({match}) =>
                  <DiffContainer site={match.params[2]} timestampA={match.params[0]}
                    loader={<Loading waybackLoaderPath={'https://users.it.teithe.gr/~it133996/wayback-loader.svg'}/>}
                    timestampB={match.params[1]} fetchCallback = {null} conf={this.conf}/>
                }/>
                <Route path="/diff/:timestampA//:site" render={({match}) =>
                    <DiffContainer site={match.params.site} timestampA={match.params.timestampA}
                      conf={this.conf}
                      loader={<Loading waybackLoaderPath={'https://users.it.teithe.gr/~it133996/wayback-loader.svg'}/>}/>
                }/>
                <Route path="/diff//:timestampB/:site" render={({match}) =>
                    <DiffContainer site={match.params.site} timestampB={match.params.timestampB}
                      conf={this.conf}
                      loader={<Loading waybackLoaderPath={'https://users.it.teithe.gr/~it133996/wayback-loader.svg'}/>}/>
                }/>
                <Route path="/diff/:site" render={({match}) =>
                    <DiffContainer site={match.params.site} fetchCallback = {null} conf={this.conf}
                     loader={<Loading waybackLoaderPath={'https://users.it.teithe.gr/~it133996/wayback-loader.svg'}/>}
                    />} />
            </Switch>
        </Router>
    );
  }
}

export default App;
