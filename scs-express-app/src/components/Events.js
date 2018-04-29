import React, { Component } from 'react';
import eventBackgroundImg from './images/event_bg.jpg';
import currentImg from './images/current.png';
import dashavtaarImg from './images/dashavtaar.png';
//import seniorCitizenLogo from './images/SeniorCenter-logo.jpg';
//import womanEmpowerLogo from './images/woman-empower.jpg';


class Events extends Component {
    render(){
        return (
            <div>
                <section className="xs-banner-inner-section parallax-window" style={{backgroundImage: `url(${eventBackgroundImg})`}}>
                    <div className="xs-black-overlay"></div>
                    <div className="container">
                        <div className="color-white xs-inner-banner-content">
                            <h2>Events</h2>
                            <p>Events main description goes here .....</p>
                            <ul className="xs-breadcumb">
                                <li className="badge badge-pill badge-primary"><a href="/" className="color-white"> Home </a> Events</li>
                            </ul>
                        </div>
                    </div>
                </section>
<main className="xs-main">
	<section className="xs-content-section-padding">
	<div className="container">
		<div className="row">
			<div className="col-lg-6 row xs-single-event event-green">
				<div className="col-md-5">
					<div className="xs-event-image">
						<img src={currentImg} alt="" />
						<div className="xs-entry-date">
							<span className="entry-date-day">20</span>
							<span className="entry-date-month">apr</span>
						</div>
						<div className="xs-black-overlay"></div>
					</div>
				</div>
				<div className="col-md-7">
					<div className="xs-event-content">
						<a href="#">Shri Naamratnakhya</a>
						<p>description goes here...</p>
						<div className="xs-countdown-timer" data-countdown="2018/04/20"></div>
						<a href="#" className="btn btn-primary">
							Learn More
						</a>
					</div>
				</div>
			</div>
			<div className="col-lg-6 row xs-single-event event-purple">
				<div className="col-md-5">
					<div className="xs-event-image">
						<img src={dashavtaarImg} alt="" />
						<div className="xs-entry-date">
							<span className="entry-date-day">26</span>
							<span className="entry-date-month">apr</span>
						</div>
						<div className="xs-black-overlay"></div>
					</div>
				</div>
				<div className="col-md-7">
					<div className="xs-event-content">
						<a href="#">Dashavatar</a>
						<p>Description goes here .....</p>
						<div className="xs-countdown-timer" data-countdown="2018/04/26"></div>
						<a href="#" className="btn btn-primary">
							Learn More
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

</main>
</div>


        )
    }
}

export default Events;