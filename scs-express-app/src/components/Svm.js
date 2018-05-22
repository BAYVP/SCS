import React, { Component } from 'react';
import chaptersBackgroundImg from './images/volunteer-bg.jpg';
import welcomeImage2 from './images/welcome_background_2.png';
import archieve from './images/archieve.png';
import archieve2 from './images/archieve_2.png';
import archieve3 from './images/archieve_3.png';
import '../index.css';

class Svm extends Component {

  render() {
    return (
        <div>
            <section className="xs-banner-inner-section parallax-window" style={{backgroundImage: `url(${chaptersBackgroundImg})`}}>
                <div className="xs-black-overlay"></div>
                    <div className="container">
                        <div className="color-white xs-inner-banner-content">
                            <h2>Shreemay Vidya Mandir</h2>
                            <p>Shreemay Vidya Mandir is the educational wing of “Shreemay Community Services” serving the needs of all generations. It’s goal is to prepare well-balanced, competent, and compassionate citizens from needy socio-economic backgrounds who can be proud of their skills, culture, history and heritage and who can build a brighter future for themselves and for society.</p>
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
                                        <h4 className="xs-title">Classes Offered (2017-2018)</h4>
                                    </div>
                                </div>
                                <ul className="xs-unorder-list arrow">
                                    <li><b>Hindi and Gujarati classes</b>
                                        <ul>
                                            <li>Emphasis on Reading, Writing and Day to day conversations</li>
                                        </ul>
                                    </li>
                                    <li>Cultural classes based on child's age
                                        <ul>
                                            <li>Starting with me and mom / dad class (0-3) with parents</li>
                                            <li>4 year old till teen</li>
                                            <li> Classes meet weekly and include projects, discussions, debates, plays, dance, community service etc</li>
                                        </ul>
                                    </li>
                                    <li>Computer programming class – For 6th and 7th graders</li>
                                    <li>Music Class – Indian classical music, singing</li>
                                    <li>Book Club – Reading class for all ages – ideal for middle schoolers</li>
                                    <li>SAT Prep Class – For high school students going to college</li>
                                    <li>Yoga for Youth</li>
                                </ul>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
        <section className="waypoint-tigger xs-section-padding">
		<div className="container">
			<div className="xs-heading row xs-mb-60">
				<div className="col-md-9 col-xl-9">
					<h2 className="xs-title">Class Hours and Info</h2>
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
									<li><b>Cultural Class: </b> 
                                        <ul>
                                            <li>Sunday (3:00 pm - 4:15 pm) </li>
                                        </ul>
                                    </li>
									<li><b>Language Class: </b> 
                                        <ul>
                                            <li>Sunday (4:30 pm - 5:30 pm)</li>
                                        </ul>
                                    </li>
									<li><b>Dance (Kathak): </b> 
                                        <ul>
                                            <li>Wednesday (6:30 pm - 7:30 pm) </li>
                                        </ul>
                                    </li>
									<li><b>Music (vocal): </b> 
                                        <ul>
                                            <li>Sunday (2:00 pm - 3:00 pm) </li>
                                        </ul>
                                    </li>
                                    <li><b>SAT</b> 
                                        <ul>
                                            <li>Sunday (3:00 pm - 5:00 pm) </li>
                                        </ul>
                                    </li>
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

export default Svm;