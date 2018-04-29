import React, { Component } from 'react';
import chaptersBackgroundImg from './images/volunteer-bg.jpg';
//import svmLogo from './images/svm-logo.jpg';
//import nysLogo from './images/NYS-logo.jpg';
//import seniorCitizenLogo from './images/SeniorCenter-logo.jpg';
//import womanEmpowerLogo from './images/woman-empower.jpg';


class About extends Component {
    render(){
        return(
            <div>
            <section className="xs-banner-inner-section parallax-window" style={{backgroundImage: `url(${chaptersBackgroundImg})`}}>
            <div className="xs-black-overlay"></div>
            <div className="container">
                <div className="color-white xs-inner-banner-content">
                    <h2>Shreemay Community Services</h2>
                    <p>Shreemay Community Services was established in 2009 with the vision to serve the wider community
                        keeping the neediest , the sick, poor, seniors and youth in mind and promoting activities that contribute
                        to their well being such as through humanitarian and community efforts. Over the years Shreemay
                        Community Services has focused on providing concerted and dedicated resources for seniors through
                        Shreemay Senior Center, an education program through Shreemay Vidya Mandir, and youth volunteer
                        and leadership opportunities through Nikunj Yuva Seva, an educational resource center through the
                        Library and multi-media center called Shreemay Pustak Teerth and humanitarian activities with blood
                        and bone marrow drives, flu clinics, health fairs, food drives etc.</p>
                </div>
            </div>
        </section>
        <main className="xs-main">
            <section className="xs-content-section-padding">
            <div className="container">
                <div className="row">
                    <a href="#svm_section">
                        <div className="col-md-6 col-lg-4">
                            <div className="xs-single-causes">
                                <img src="assets/images/causes/svm-logo.jpg" alt="" />
                                <div className="xs-causes-footer">
                                    <h2 className="color-purple"><a>Shreemay Vidya Mandir </a></h2>
                                    
                                </div>
                            </div>
                        </div>
                    </a>
                    <div className="col-md-6 col-lg-4">
                        <div className="xs-single-causes">
                            <img src="assets/images/causes/NYS-logo.jpg" alt="" />
                            <div className="xs-causes-footer">
                                <h2 className="color-purple">Nikunj Yuva Seva</h2>
                                <p>Nikunj Yuva Seva is a youth or teen volunteer and leadership program offered by Shreemay Community Services to provide a forum for teenagers to earn college and high school required community service hours while learning the meaning of Seva – service. In addition it aims to create lasting bonds with their peers as well as to older generations.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className="xs-single-causes">
                            <img src="assets/images/causes/SeniorCenter-logo.jpg" alt="" />
                            <div className="xs-causes-footer">
                                <h2 className="color-light-red">Shreemay Senior Center</h2>
                                <p>The Shreemay Senior Center recognizes that all seniors still have ambitions, capabilities, creativity and a desire to remain independent in society. Therefore the mission is to provide members 55 years of age and over with an opportunity to participate and enjoy all aspects of the community</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className="xs-single-causes">
                            <img src="assets/images/causes/woman-empower.jpg" alt="" />
                            <div className="xs-causes-footer">
                                <h2 className="color-blue">Women Empowerment</h2>
                                <p>Launched in 2016 February to be a safe place for women to learn how to balance one’s lives, strengthen vision and value and discover the core of being a woman who is authentic. Women gather throughout the year with workshops arranged with inspiring and successful guest speakers.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className="xs-single-causes">
                            <img src="assets/images/causes/library_logo.png" alt="" />
                            <div className="xs-causes-footer">
                                <h2 className="color-yellow">Shreemay Library</h2>
                                <p>The Library called "Shreemay Pushtak Teerth" was established on August 15th, 2009 and has a collection of inspiring books, CDs, DVDs etc for adults and children in English, Hindi, Gujarati and Vrajbhasha languages. We are slowly forging towards developing a larger multi-media center which will be a stop or place of inspiration ("Teerth" in Sanskrit) for higher way of learning and living. We envision the center to be a resource center for all generations.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <section id="svm_section" className="waypoint-tigger xs-section-padding">
                <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-lg-6">
                                <div className="md-archive-content">
                                    <div className="md-heading">
                                        <h2 className="md-line-title">Shreemay Vidya Mandir</h2>
                                    </div>
                                    <p>Shreemay Vidya Mandir is the educational wing of "Shreemay Community Services" serving the needs of all generations.  It's goal is to prepare well-balanced, competent, and compassionate citizens from needy socio-economic backgrounds who can be proud of their skills, culture, history and heritage and who can build a brighter future for themselves and for society.</p>
                                    <h5>Classes Offered 2017-18</h5>
                                    <ul className="xs-unorder-list arrow">
                                        <li>Hindi and Gujarati classes</li>
        
                                        <li>Create a platform to promote humanitarian, educational, cultural,social and spiritual activities centeredon Hindu culture.</li>
                                        <li>Teach, commemorate and celebrate various Hindu Vaishnav festivals,rituals, and events (Utsav).</li>
                                        <li>Promote personal development of youth and children by emphasizing activities that foster the universal values of Vaishnav tradition irrespective of race, caste or religion</li>
                                    </ul>
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
