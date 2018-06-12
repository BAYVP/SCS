import React, { Component } from 'react';
import videoImg from './images/video_img.jpg';
import team1Img from './images/team_1.png';
import team2Img from './images/team_2.png';
import team3Img from './images/team_3.png';
import team4Img from './images/team_4.png';
import aboutBackgroundImage from './images/abt_us_bg.jpg';

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
	            <div className="xs-video-popup-section">
	                <div className="container">
		                <div className="row">
                            <div className="col-lg-8 content-center">
                                <div className="xs-video-popup-wraper">
                                    <img src={videoImg} alt="" />
                                    <div className="xs-video-popup-content">
                                        <a href="https://www.youtube.com/watch?v=yjMiuVDwnCc&feature=youtu.be" className="xs-video-popup xs-round-btn">
                                            <i className="fa fa-play"></i>
                                        </a>
                                    </div>
                                </div>
	            		    </div>
    		            </div>
	                </div>
                </div>	
	            <section className="xs-content-section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-11 content-center">
                                <div className="xs-heading xs-mb-100 text-center">
                                    <h2 className="xs-mb-0 xs-title">Bay Area Youth Vaishnav Parivar (BAYVP) is an organization with the purpose of bringing together all Vaishnavs of the bay area</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="xs-about-feature">
                                    <h3>Our Mission</h3>
                                    <p className="lead">We will pursue a better understanding of Dharma, selfless actions (service), worship, justice and morality as propounded in the Gita thereby determining the true value and purpose of life. In the process we hope to participate in the in the uplift of mankind.</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="xs-about-feature">
                                    <h3>Our Vission</h3>
                                    <p className="lead">
                                            BayVp is a volunteer driven organization. Over the past couple of years we have organized various festivals and cultural events including Saptahs, Mahaprabhiji Utsav and Annakut. We also have a yearly picnic in summer for all Vaishnavs and we conduct cultural activities for kids, including weekly Shreemay Vidya Mandir.
                                            The purpose of the Bay Area Youth Vaishnav Parivar is to propagate and understand the life and teachings of Lord Krishna as envisioned by Vallabhacharaya Mahaprabhuji.</p>
                                </div>
                            </div>
                            <div className="col-md-4">
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
                            <h2 className="xs-title">Our Team</h2>
                        </div>
                    </div>
                    <div className="row xs-mb-60">
                        <div className="col-md-6 col-lg-3">
                            <div className="xs-single-team">
                                <img src={team1Img} alt="" />
                                <div className="xs-team-content">
                                    <h4>Shruti Desai</h4>
                                    <small>Cultural - 4</small>
                                    <svg className="xs-svgs" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 270 138">
                                        <path className="fill-red" d="M375,3294H645v128a10,10,0,0,1-10,10l-250-20a10,10,0,0,1-10-10V3294Z" transform="translate(-375 -3294)"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="xs-single-team">
                                <img src={team2Img} alt="" />
                                <div className="xs-team-content">
                                    <h4>Kanan Mandalia</h4>
                                    <small>Cultural - 5</small>
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
                                    <h4>Rupali Mehta</h4>
                                    <small>Cultural - 6/7</small>
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
                                    <h4>Trupti Kotecha</h4>
                                    <small>Cultural - 8</small>
                                    <svg className="xs-svgs" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 270 138">
                                        <path className="fill-orange" d="M375,3294H645v128a10,10,0,0,1-10,10l-250-20a10,10,0,0,1-10-10V3294Z" transform="translate(-375 -3294)"/>
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