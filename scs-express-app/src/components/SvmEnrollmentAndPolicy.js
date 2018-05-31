import React, { Component } from 'react';
import chaptersBackgroundImg from './images/volunteer-bg.jpg';
import welcomeImage2 from './images/welcome_background_2.png';
import archieve from './images/archieve.png';
import archieve2 from './images/archieve_2.png';
import archieve3 from './images/archieve_3.png';
import '../index.css';

class SvmEnrollmentPolicy extends Component {

  render() {
    return (
        <div>
            <section className="xs-banner-inner-section parallax-window" style={{backgroundImage: `url(${chaptersBackgroundImg})`}}>
                <div className="xs-black-overlay"></div>
                    <div className="container">
                        <div className="color-white xs-inner-banner-content">
                            <h2>Shreemay Vidya Mandir</h2>
                            <p>The Shreemay Vidya Mandir (SVM) program creates an environment where the child feels and become a part of a community with a common culture and tradition which belongs to the family and their friends. A sense of belonging is created and the child learns about his or her culture so that they can share the heritage with their American counterparts of diverse traditions.</p>
                    </div>
                </div>
            </section>
            
            
            <section className="bg-gray waypoint-tigger xs-section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-8">
                            <div className="md-archive-content">
                                <div className="xs-heading row xs-mb-60">
                                    <div className="col-md-9 col-xl-9">
                                        <h3 className="xs-title">Emergency Response</h3>
                                    </div>
                                </div>
                                <ul className="xs-unorder-list arrow">
                                    <li>In the event of an emergency, children will be released only to the individuals identified in the registration form. We reserve the right to ask for government-issued photo identification before releasing children. Children will be released only at designated “Student Release” areas. Please check with your child\s class teacher about the designated “Student Release” area and more details on this.</li>
                                </ul>
                            </div>
                        </div>
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
                                        <h3 className="xs-title">Food and Drinks</h3>
                                    </div>
                                </div>
                                <ul className="xs-unorder-list arrow">
                                    <li>There will be a designated area where SVM volunteers will provide light snacks and refreshments. Please ensure that this area is kept clean as well as ensure that all trash is disposed off into trash bins. Please eat only in designated areas. Food and drinks are not allowed in any of the classrooms or assembly area.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        
                
            </div>
    );
  }
}

export default SvmEnrollmentPolicy;