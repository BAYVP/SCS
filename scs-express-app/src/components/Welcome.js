import React, { Component } from 'react';
import welcomeImage from './images/welcome_background.png';
import welcomeImage2 from './images/welcome_background_2.png';
import archieve from './images/archieve.png';
import archieve2 from './images/archieve_2.png';
import archieve3 from './images/archieve_3.png';
import '../index.css';

class Welcome extends Component {

  render() {
    return (
        <div>
            <section className="xs-welcome-slider">
                <div className="xs-banner-slider owl-carousel">
                    <div className="xs-welcome-content" style={{backgroundImage: `url(${welcomeImage})`}}>
                        <div className="container">
                            <div className="xs-welcome-wraper color-white">
                                <h2>Cultivate a "Parivar" that lives, promotes and enhancesVaishnav values and our way of worship</h2>
                            </div>
                        </div>
                        <div className="xs-black-overlay"></div>
                    </div>
                    <div className="xs-welcome-content" style={{backgroundImage: `url(${welcomeImage2})`}}>
                        <div className="container">
                            <div className="xs-welcome-wraper color-white">
                                <h2>Propagate and understand the life and teachings of Lord Krishna as envisioned by Vallabhacharya Mahaprabhuji in the "Path of Grace- Pushtimarg"</h2>
                            </div>
                        </div>
                    <div className="xs-black-overlay"></div>
                    </div>
                    </div>
            </section>
            <section className="waypoint-tigger xs-section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-6">
                            <div className="md-archive-content">
                                <div className="md-heading">
                                    <h2 className="md-line-title">Goals and Objectives</h2>
                                </div>
                                <h5>Our strategic priorities up to 2018 are:</h5>
                                <ul className="xs-unorder-list arrow">
                                    <li>Establish a Haveli and Cultural Center to serve the growing needs of the vaishnav community</li>
                                    <li>Create a platform to promote humanitarian, educational, cultural,social and spiritual activities centeredon Hindu culture.</li>
                                    <li>Teach, commemorate and celebrate various Hindu Vaishnav festivals,rituals, and events (Utsav).</li>
                                    <li>Promote personal development of youth and children by emphasizing activities that foster the universal values of Vaishnav tradition irrespective of race, caste or religion</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-6 row xs-archive-image">
                            <div className="col-md-12 xs-mb-30">
                                <img src={archieve} alt="" className="rounded" />
                            </div>
                            <div className="col-md-6 col-sm-6">
                                <img src={archieve2} alt="" className="rounded" />
                            </div>
                            <div className="col-md-6 col-sm-6">
                                <img src={archieve3} alt="" className="rounded" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-gray waypoint-tigger xs-section-padding">
                <div className="container">
                    <div className="xs-heading row xs-mb-60">
                        <div className="col-md-9 col-xl-9">
                            <h2 className="xs-title">Our activites</h2>
                        <div className="col-xl-3 col-md-3 xs-btn-wraper">
                            <a href="" className="btn btn-primary">all Causes</a>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="xs-popular-item xs-box-shadow">
                                <div className="xs-item-header">
                                    <img src="assets/images/annakut.png" alt="" />
                                </div>
                                <div className="xs-item-content">
                                    <ul className="xs-simple-tag xs-mb-20">
                                        <li><a href="">Religious/Spiritual</a></li>
                                    </ul>
                                    <p className="xs-post-title xs-mb-60">Annakut, Mahaprabhuji Prakotsav, Janmastmi, Monthly and Ekadashi Satsangs, Spiritualdiscourses by visiting Acharyas,Philosophers, Scholars</p>            
                                    <span className="xs-separetor"></span>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="xs-popular-item xs-box-shadow">
                                <div className="xs-item-header">
                                    <img src="assets/images/uttrayana.png" alt="" />
                                </div>
                                <div className="xs-item-content">
                                    <ul className="xs-simple-tag xs-mb-20">
                                        <li><a href="">Cultural & Social</a></li>
                                    </ul>
                                    <p className="xs-post-title xs-mb-30">Makarsankranti (KiteFlying), Holi (Festival of colors), Picnic,Raas/Garba, “Pushti Sandhya” musicalconcerts</p>
                                    <span className="xs-separetor"></span>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="xs-popular-item xs-box-shadow">
                                <div className="xs-item-header">
                                    <img src="assets/images/svm_graduation.png" alt="" />
                                </div>
                                <div className="xs-item-content">
                                    <ul className="xs-simple-tag xs-mb-20">
                                        <li><a href="">Educational</a></li>
                                    </ul>
                                    <a className="xs-post-title xs-mb-30">Gujarati classes, Bal PushtiVidyalaya, skits / dramas, folk dances,elocutions</a>
                                    <span className="xs-separetor"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
    );
  }
}

export default Welcome;