import React, { Component } from 'react';
import contactBackgroundImg from './images/contact_bg.jpg';

class Contact extends Component {
    render(){
        return (
            <div>
                <section className="xs-banner-inner-section parallax-window" style={{backgroundImage: `url(${contactBackgroundImg})`}}>
                    <div className="xs-black-overlay"></div>
                    <div className="container">
                        <div className="color-white xs-inner-banner-content">
                            <h2>Contact Us</h2>
                            <p>General feedback, suggestions about BAYVP/Shreemaya Krishnadham</p>
                         </div>
                    </div>
                </section>
                <main className="xs-main">
                    <section className="xs-contact-section-v2">
                    <div className="container">
                        <div className="xs-contact-container">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="xs-contact-form-wraper">
                                        <h4>Drop us a line</h4>
                                        <form action="#" method="POST" id="xs-contact-form" className="xs-contact-form contact-form-v2">
                                            <div className="input-group">
                                                <input type="text" name="name" id="xs-name" className="form-control" placeholder="Enter Your Name....." />
                                                <div className="input-group-append">
                                                    <div className="input-group-text"><i className="fa fa-user"></i></div>
                                                </div>
                                            </div>
                                            <div className="input-group">
                                                <input type="email" name="email" id="xs-email" className="form-control" placeholder="Enter Your Email....." />
                                                <div className="input-group-append">
                                                    <div className="input-group-text"><i className="fa fa-envelope-o"></i></div>
                                                </div>
                                            </div>
                                            <div className="input-group massage-group">
                                                <textarea name="massage" placeholder="Enter Your Message....." id="xs-massage" className="form-control" cols="30" rows="10"></textarea>
                                                <div className="input-group-append">
                                                    <div className="input-group-text"><i className="fa fa-pencil"></i></div>
                                                </div>
                                            </div>
                                            <button className="btn btn-success" type="submit" id="xs-submit">submit</button>
                                        </form>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="xs-maps-wraper map-wraper-v2">
                                        <div id="xs-map" className="xs-box-shadow-2"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <section className="xs-contact-details">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6 col-lg-4">
                                    <div className="xs-contact-details">
                                        <ul className="xs-unorder-list">
                                            <li><i className="fa fa-phone color-green"></i>+1-408-586-0006</li>
                                            <li><i className="fa fa-envelope-o color-green"></i>info@bayvp.org</li>
                                            <li><i className="fa fa-map-marker color-green"></i>25 Cornig Avenue, Milpitas , CA 95035</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>	
                </section>
            </main>    
        </div>
        )
    }
}

export default Contact;