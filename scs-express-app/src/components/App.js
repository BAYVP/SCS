// src/components/App/index.js
import React, { Component } from 'react';
import { BrowserRouter as Router, Route , Switch, Link, Redirect} from 'react-router-dom';
import logo from './images/scs-logo.png';
import Welcome from './Welcome';
import About from './About';
import Chapters from './Chapters';
import Svm from './Svm';
import Events from './Events';
import EventDetails from './EventDetails';
//import Contact from './Contact';
//import SvmEnrollmentAndPolicy from './SvmEnrollmentAndPolicy';
import SvmEvents from './SvmEvents';
//import SvmCurriculam from './SvmCurriculam';
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
                            <Link to="/welcome" className="nav-logo"><img src={logo} alt=""/></Link>
                            </div>
                            <div className="nav-menus-wrapper row">
                            <div className="xs-logo-wraper col-lg-2 xs-padding-0">
                            <Link to="/welcome" className="nav-brand"><img src={logo} alt=""/></Link>
                            </div>
                            <div className="col-lg-7">
                                <ul className="nav-menu">
                                <li><Link to="/welcome">Home</Link></li>
                                <li><Link to="/events">Events</Link></li>
                                <li><Link to="/svm">Vidya Mandir</Link>
                                    <ul className="nav-dropdown">
                                        <li><Link to="/svm/svmEvents">SVM Events</Link></li>
                                    </ul>
                                </li>
                                <li><Link to="/chapters">Chapters</Link></li>
                                <li><Link to="/about">About</Link></li>
                                </ul>
                            </div>
                            <div className="xs-navs-button d-flex-center-end col-lg-3">
                                <a target="_blank" href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=N66FMVUXQE65G" className="btn btn-primary">
                                <span className="badge"><i className="fa fa-heart"></i></span> Donate Now
                                </a>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
            <Switch>
                <Redirect from="/" exact to="/welcome" />
                <Route exact path="/welcome" component={Welcome} />
                <Route exact path="/events" component={Events} />
                <Route exact path="/svm" component={Svm} />
                <Route exact path="/svm/svmEvents" component={SvmEvents} />
                <Route exact path="/events/:id" component={EventDetails} />
                <Route exact path="/chapters" component={Chapters} />
                <Route exact path="/about" component={About} />
                
            </Switch>
            <Footer />
            </div>
            </Router>
        );
    }
}

export default App;