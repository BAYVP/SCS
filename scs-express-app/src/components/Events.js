import React, { Component } from 'react';
import EventCard from './EventCard';
import eventBackgroundImg from './images/event_bg.jpg';
import {getEventCountDown} from '../utils/datetimeutil';
import _ from 'underscore';
import axios from 'axios';
//import seniorCitizenLogo from './images/SeniorCenter-logo.jpg';
//import womanEmpowerLogo from './images/woman-empower.jpg';
import config from '../../config';


const url = config.getStrapiUrl()
class Events extends Component {

	
	constructor(props) {
		super(props);
		this.state = {
			events: []
		};
	}

	componentDidMount() {
		console.log("Getting events using url=", url)
		axios.get(`${url}/events?_sort=StartTime:desc`)
			.then(res => {
				const events = res.data;
				const filteredEvents = _.filter(events, function(event) {
					var eventStartDate = getEventCountDown(event.StartDate);
					if (!_.isEmpty(eventStartDate)) {
						if (eventStartDate.split(":")[0] > 0) {
							return event;
						}
					}
				});
				//console.log("Filtered Events from strapi: ", filteredEvents)
				if (filteredEvents.length > 0) {
					this.setState({ filteredEvents })
				}
				//this.setState({ events });
			});
	}

    render(){
		const eventCards = this.state.events.length > 0 ? (
			this.state.events.map(e => <EventCard  key={e._id} event={e} />)
		) : (
			<h2>No upcoming events!!</h2>	
		)
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
							{eventCards}
						</div>
					</div>
				</section>
			</main>
		</div>
        )
    }
}

export default Events;