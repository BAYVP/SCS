import React, { Component } from 'react';
import EventCard from './EventCard';
//import EventCard1 from './EventCard1';
import eventBackgroundImg from './images/events_bg.jpg';
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
			events: [],
			pastEvents: [],
			upcomingEvents: [],
			isChecked: false
		};
    	this.handleChecked = this.handleChecked.bind(this); 
	}

	componentDidMount() {
		console.log("Getting events using url=", url)
		axios.get(`${url}/events?_sort=StartTime:desc`)
			.then(res => {
				const events = res.data;
				console.log(events);
				const filteredPastEvents = _.filter(events, function(event) {
					if (event.EventType == 'RE') {
						var eventStartDate = getEventCountDown(event.StartDate);
						if (!_.isEmpty(eventStartDate)) {
							if (eventStartDate.split(":")[0] < 0) {
								return event;
							}
						}
					}
				});
				const filteredUpcomingEvents = _.filter(events, function(event) {
					if (event.EventType == 'RE') {
						var eventStartDate = getEventCountDown(event.StartDate);
						if (!_.isEmpty(eventStartDate)) {
							if (eventStartDate.split(":")[0] > 0) {
								return event;
							}
						}
					}
				});
				
				this.setState({ 
					pastEvents: filteredPastEvents,
					upcomingEvents: filteredUpcomingEvents,
					events: filteredUpcomingEvents })
			});
	}

	handleChecked() {
		const that = this;
		if (!that.state.isChecked) {
			that.setState({
				isChecked: !that.state.isChecked,
				events: that.state.pastEvents
			})
		} else {
			that.setState({
				isChecked: !that.state.isChecked,
				events: that.state.upcomingEvents
			})
		}
	}
	  

    render(){
		//console.log("Creating event cards for events", this.state.events)
		const eventCards = this.state.events.length > 0 ? (
			this.state.events.map(e => <EventCard  key={e._id} event={e} />)
		) : (
			<h3>Currently we do not have any events planned!!</h3>	
		)
        return (
		
		<div>
			<section className="xs-banner-inner-section parallax-window" style={{backgroundImage: `url(${eventBackgroundImg})`}}>
                <div className="xs-black-overlay"></div>
                    <div className="container">
                        <div className="color-white xs-inner-banner-content">
                            <h2>Events</h2>
                            <p>Past and upcoming shreemay community events</p>
                        </div>
                </div>
            </section>
			<main className="xs-main">
				<section className="xs-content-section-padding">
					<div className="container">
					<div className="xs-heading row xs-mb-60">
                        <div className="col-md-9 col-xl-9">
                            <h3 className="xs-title">Events</h3>
                        </div>
                        <div className="col-xl-3 col-md-3 ">
							<span>Show Past Events</span>
							<div className="custom-switch custom-switch-label-yesno">
								<input className="custom-switch-input" onChange={this.handleChecked.bind(this)} id="ADD_ID_HERE" type="checkbox"></input>
								<label className="custom-switch-btn" htmlFor="ADD_ID_HERE"></label>
							</div>
                        </div>
                    </div>
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