import React, { Component } from 'react';
import EventCard from './EventCard';
import eventBackgroundImg from './images/event_bg.jpg';
import axios from 'axios';
//import seniorCitizenLogo from './images/SeniorCenter-logo.jpg';
//import womanEmpowerLogo from './images/woman-empower.jpg';

const url = "http://52.191.119.42:1337"
class Events extends Component {

	
	constructor(props) {
		super(props);
		this.state = {
			events: []
		};
	}

	componentDidMount() {
		axios.get(`${url}/events?_sort=StartTime:desc`)
			.then(res => {
				const events = res.data;
				this.setState({ events })
			});
			//console.log("Events from strapi: ", this.state.events)
	}

    render(){
        return (
		<div>
			<section className="xs-banner-inner-section parallax-window" style={{backgroundImage: `url(${eventBackgroundImg})`}}>
                <div className="xs-black-overlay"></div>
                    <div className="container">
                        <div className="color-white xs-inner-banner-content">
                            <h2>Events</h2>
                            <p>Upcoming events at BayVP</p>
                        </div>
                </div>
            </section>
			<main className="xs-main">
				<section className="xs-content-section-padding">
					<div className="container">
						<div className="row">
							{this.state.events.map(e => <EventCard  key={e._id} event={e} />)}
						</div>
					</div>
				</section>
			</main>
		</div>
        )
    }
}

export default Events;