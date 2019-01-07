import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import './styles/index.css';
import './styles/home.css';
import './styles/movie.css'
import './styles/heroes.css'
import './styles/info.css'

import Home from './components/Home';
import Info from './components/Info';
import Heroes, {Hero} from './components/Heroes';
import {Movie} from './components/Movie';
import {InfoItem} from "./components/Info";


class App extends Component {
  render() {
    return (
        <Router>
            <div className="inRoot">
                <Header />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/heroes" component={Heroes} />

                    {/*<Route path="/heroes/:id" component={Hero} />*/}

                    <Route exact path="/info" component={Info} />
                    <Route path="/info/:id" component={InfoItem} />
                    <Route exact path="/movie" component={Movie} />
                    <Route path="*" component={Home}/>
                </Switch>
                <Footer />
            </div>
        </Router>
    );
  }
}

const Header = () => (
    <header>
        <Link className="movieName" to="/">INCEPTION</Link>
        <div className="navPanel">
            <Link to="/">Home</Link>
            <Link to="/movie">Movie</Link>
            <Link to="/heroes">Heroes</Link>
            <Link to="/info">Info</Link>
        </div>
    </header>
);

const Footer = () => (
    <footer>
        <div className="navPanel">
            <Link to="/">Home</Link>
            <Link to="/movie">Movie</Link>
            <Link to="/heroes">Heroes</Link>
            <Link to="/info">Info</Link>
        </div>
    </footer>
);


export default App;
