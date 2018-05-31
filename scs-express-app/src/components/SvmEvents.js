import React, { Component } from 'react';
import chaptersBackgroundImg from './images/volunteer-bg.jpg';
import welcomeImage2 from './images/welcome_background_2.png';


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
            </div>
        )
    }
}

export default SvmEvents;