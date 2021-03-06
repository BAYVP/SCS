import React, { Component } from 'react';
import team2Img from './images/team_2.png';
import team3Img from './images/team_3.png';
import team4Img from './images/team_4.png';
import team5Img from './images/team_5.png';
import team6Img from './images/team_6.png';
import team7Img from './images/team_7.png';
import aboutBackgroundImage from './images/about_bg.png';

class About extends Component {
    render(){
        return(
        <div>
            <section className="xs-banner-inner-section parallax-window" style={{backgroundImage: `url(${aboutBackgroundImage})`}}>
	            <div className="xs-black-overlay"></div>
	            <div className="container">
                    <div className="color-white xs-inner-banner-content">
                        <h2>About Us</h2>
                        <p>Enhaning the quality of life of the local and global community by building cultural and generational bridges</p>
                    </div>
	            </div>
            </section>
            <main className="xs-main">
	            
	            <section className="xs-content-section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-11 content-center">
                                <div className="xs-heading xs-mb-100 text-center">
                                    <h2 className="xs-mb-0 xs-title">Shreemay Community Services was established in 2009 with the vision to serve the wider community  keeping the neediest , the sick, poor, seniors and youth in mind and promoting activities that contribute to  their well being such as through humanitarian and community  efforts.</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="xs-about-feature">
                                    <h3>Our Mission</h3>
                                    <ul className="xs-unorder-list play green-icon">
                                        <li>Create a platform to promote humanitarian, educational, cultural, social and spiritual activities</li>
                                        <li>To serve seniors and youth in providing healthy, active and meaningful activities to enrich their lives and so they can be active members in society.</li>
                                        <li>Promote personal development of youth and children by emphasizing activities that foster the universal values irrespective of race, caste   or religion</li>
                                        <li>Service to and opportunities for Seniors and Youth are promoted  steeped in the ideals of “Seva” or Selfless Service.</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="xs-about-feature">
                                    <h3>Our Values</h3>
                                    <ul className="xs-unorder-list play green-icon">
                                        <li>Accountability</li>
                                        <li>Reliability</li>
                                        <li>Cost-effectiveness</li>
                                        <li>Personal service</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="xs-section-padding bg-gray">
                <div className="container">
                    <div className="xs-heading row xs-mb-60">
                        <div className="col-md-9 col-xl-9">
                            <h2 className="xs-title">Board of Directors</h2>
                        </div>
                    </div>
                    <div className="row xs-mb-60">
                        <div className="col-md-6 col-lg-3">
                            <div className="xs-single-team">
                                <img src={team2Img} alt="" />
                                <div className="xs-team-content">
                                    <h4>Dr. Divyang Patel</h4>
                                    <svg className="xs-svgs" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 270 138">
                                        <path className="fill-purple" d="M375,3294H645v128a10,10,0,0,1-10,10l-250-20a10,10,0,0,1-10-10V3294Z" transform="translate(-375 -3294)"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="xs-single-team">
                                <img src={team3Img} alt="" />
                                <div className="xs-team-content">
                                    <h4>Nitin Parekh</h4>
                                    <svg className="xs-svgs" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 270 138">
                                        <path className="fill-blue" d="M375,3294H645v128a10,10,0,0,1-10,10l-250-20a10,10,0,0,1-10-10V3294Z" transform="translate(-375 -3294)"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="xs-single-team">
                                <img src={team4Img} alt="" />
                                <div className="xs-team-content">
                                    <h4>Saumil Shah</h4>
                                    <svg className="xs-svgs" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 270 138">
                                        <path className="fill-orange" d="M375,3294H645v128a10,10,0,0,1-10,10l-250-20a10,10,0,0,1-10-10V3294Z" transform="translate(-375 -3294)"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="xs-single-team">
                                <img src={team5Img} alt="" />
                                <div className="xs-team-content">
                                    <h4>Subodh Toprani</h4>
                                    <svg className="xs-svgs" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 270 138">
                                        <path className="fill-blue" d="M375,3294H645v128a10,10,0,0,1-10,10l-250-20a10,10,0,0,1-10-10V3294Z" transform="translate(-375 -3294)"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="xs-single-team">
                                <img src={team6Img} alt="" />
                                <div className="xs-team-content">
                                    <h4>Manish Patel</h4>
                                    <svg className="xs-svgs" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 270 138">
                                        <path className="fill-purple" d="M375,3294H645v128a10,10,0,0,1-10,10l-250-20a10,10,0,0,1-10-10V3294Z" transform="translate(-375 -3294)"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="xs-single-team">
                                <img src={team7Img} alt="" />
                                <div className="xs-team-content">
                                    <h4>Nitin Matani</h4>
                                    <svg className="xs-svgs" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 270 138">
                                        <path className="fill-green" d="M375,3294H645v128a10,10,0,0,1-10,10l-250-20a10,10,0,0,1-10-10V3294Z" transform="translate(-375 -3294)"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    </div>)
    }
}
export default About;