// src/components/App/index.js
import React, { Component } from 'react';
import { BrowserRouter as Router, Route , Switch, Link, Redirect} from 'react-router-dom';
import logo from './images/scs-logo.png';
// import Welcome from './Welcome';
// import About from './About';
// import Chapters from './Chapters';
import Events from './Events';
import EventDetails from './EventDetails';
import Contact from './Contact';
import Footer from './Footer';
import '../index.css';
import $ from 'jquery';


class App extends Component {

    componentDidMount() {
        $.ready();
    }

    render() {  
        return (
            <Router>
            <div>  
            <header className="xs-header header-transparent">
                <div className="container">
                    <nav className="xs-menus">
                        <div className="nav-header">
                            <div className="nav-toggle"></div>
                            <a href="#" className="nav-logo">
                                <img src={logo} alt=""/>
                            </a>
                            </div>
                            <div className="nav-menus-wrapper row">
                            <div className="xs-logo-wraper col-lg-2 xs-padding-0">
                                <a className="nav-brand" href="#">
                                    <img src={logo} alt=""/>
                                </a>
                            </div>
                            <div className="col-lg-7">
                                <ul className="nav-menu">
                                <li><Link to="/events">Events</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                                </ul>
                            </div>
                            <div className="xs-navs-button d-flex-center-end col-lg-3">
                                <a href="#" className="btn btn-primary">
                                <span className="badge"><i className="fa fa-heart"></i></span> Donate Now
                                </a>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
            <Switch>
                <Redirect from="/" exact to="/events" />
                <Route exact path="/events" component={Events} />
                <Route exact path="/events/:id" component={EventDetails} />
                <Route exact path="/contact" component={Contact} />
            </Switch>
            <Footer />
            </div>
            </Router>
        );
    }
}

export default App;