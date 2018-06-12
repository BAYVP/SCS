import React, { Component } from 'react';
import chaptersBackgroundImg from './images/volunteer-bg.jpg';


class SvmEvents extends Component {
    render(){
        return(
            <div> 
                <section className="xs-banner-inner-section parallax-window" style={{backgroundImage: `url(${chaptersBackgroundImg})`}}>
                <div className="xs-black-overlay"></div>
                    <div className="container">
                        <div className="color-white xs-inner-banner-content">
                            <h2>Under Construction!!</h2>
                    </div>
                </div>
            </section>
            <section className="bg-gray waypoint-tigger xs-section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-8">
                        <div className="xs-portfolio-grid-item">
                            <a href="https://photos.google.com/share/AF1QipNbhnz_aMjzyPKCVOVLc02jaBtzJ1fa_9ksNVsZtCI7DvImMiW-Aj3dxZZe9L3rdg?key=eHVHSE9NakdfQlZsbVMxM2hMZUpNaHhzWERyRGVn" className="xs-single-portfolio-item xs-image-popup">
                                    
                                <div className="xs-portfolio-content">
                                    <span className="icon-plus-button"></span>
                                </div>
                            </a>
                        </div>
                        </div>
                    </div>
                </div>
            </section>
            </div>
        )
    }
}

export default SvmEvents;