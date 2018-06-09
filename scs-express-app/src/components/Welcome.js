import React, { Component } from 'react';
import welcomeImage from './images/scs_welcome.png';
import welcomeImage2 from './images/welcome_background_2.png';
import archieve from './images/archieve.png';
import archieve2 from './images/archieve_2.png';
import archieve3 from './images/archieve_3.png';
import '../index.css';
import { Link } from "react-router-dom";


class Welcome extends Component {

  render() {
    return (
        <div>
            <section className="xs-welcome-slider">
                <div className="xs-banner-slider owl-carousel">
                    <div className="xs-welcome-content" style={{backgroundImage: `url(${welcomeImage})`}}>
                        <div className="container">
                            <div className="xs-welcome-wraper color-white">
                                <h2>Create a platform to promote humanitarian, educational, cultural, social and spiritual activities</h2>
                            </div>
                        </div>
                        <div className="xs-black-overlay"></div>
                    </div>
                    </div>
            </section>
            <section className="waypoint-tigger xs-section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-8">
                            <div className="md-archive-content">
                                <div className="xs-heading row xs-mb-60">
                                    <div className="col-md-9 col-xl-9">
                                        <h3 className="xs-title">Goals & Objectives</h3>
                                    </div>
                                </div>
                                <h5>Our strategic priorities up to 2018 are:</h5>
                                <ul className="xs-unorder-list arrow">
                                    <li>Create a platform to promote humanitarian, educational, cultural, social and spiritual activities</li>
                                    <li>To serve seniors and youth in providing healthy, active and meaningful activities to enrich their lives and so they can be active members in society.</li>
                                    <li>Promote personal development of youth and children by emphasizing activities that foster the universal values irrespective of race, caste   or religion.</li>
                                    <li> Service to and opportunities for Seniors and Youth are promoted  steeped in the ideals of “Seva” or Selfless Service.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-4 row xs-archive-image">
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
                                        <li><Link to="/svm">Educational</Link></li>
                                    </ul>
                                    <a className="xs-post-title xs-mb-30">Gujarati classes, Bal PushtiVidyalaya, skits / dramas, folk dances,elocutions</a>
                                    <span className="xs-separetor"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
        <section className="waypoint-tigger xs-section-padding">
		<div className="container">
			<div className="xs-heading row xs-mb-60">
				<div className="col-md-9 col-xl-9">
					<h2 className="xs-title">Haveli hours & Aarti timings</h2>
				</div>
			</div>
			<div className="row">
				<div className="col-lg-4 col-md-6">
					<div className="xs-popular-item xs-box-shadow">
						<div className="xs-item-header">
							<img src="assets/images/aarti.png" alt="" />
						</div>
						<div className="xs-item-content">
							<ul className="xs-unorder-list arrow">
									<li><b>Monday-Friday</b> 7:30 pm</li>
									<li><b>Saturday</b> 6:30 pm</li>
									<li><b>Sunday</b> 5:30 pm to 6 pm</li>
									<li><b>Sunday Prasad</b> 5:30 pm</li>
							</ul>
							<span className="xs-separetor"></span>
						</div>
					</div>
				</div>
				<div className="col-lg-4 col-md-6">
						<div className="xs-popular-item xs-box-shadow">
							<div className="xs-item-header">
								<img src="" alt="" />
							</div>
							<div className="xs-item-content">
									<ul className="xs-unorder-list arrow">
											<li><b>Monday-Saturday</b> 9:00 am to 1:30 pm & 3:00 pm to 8:00 pm</li>
											(Darshan will be closed from 1.30 pm to 3:00 pm)	
											<li><b>Sunday</b> 9:00 am to 8:00 pm</li>
										</ul>
								<span className="xs-separetor"></span>
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