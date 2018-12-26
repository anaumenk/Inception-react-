import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import './styles/index.css';
import './styles/home.css';
import './styles/movie.css'

import Home from './components/Home';
import Info from './components/Info';
import Heroes from './components/Heroes';
import {Movie} from './components/Movie';


class App extends Component {
  render() {
    return (
        <Router>
            <div style={{position: 'relative', height: '100%', display: 'grid', gridTemplateRows: '100px auto 60px'}}>
                <Header />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/heroes" component={Heroes} />
                    <Route path="/info" component={Info} />
                    <Route path="/movie" component={Movie} />
                    <Route path="*" component={NotFound}/>
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

const NotFound = () => (
    <h1>Not Found</h1>
);



export default App;
