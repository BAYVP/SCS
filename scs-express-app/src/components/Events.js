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
import eventType from './EventType';

const url = config.getStrapiUrl()
const eventsUri="events?_sort=EndDate:desc"

class Events extends Component {

	
	constructor(props) {
		super(props);
		
		this.state = {
			displaySvmEvents: [],
			displayScsEvents: [],
			pastSvmEvents: [],
			upcomingSvmEvents: [],
			pastScsEvents: [],
			upcomingScsEvents: [],
			showPastSvmEvents: false,
			showPastScsEvents: false
		};
		this.handleEventsSlider = this.handleEventsSlider.bind(this);		
	}

	getEventCards(events) {
		//console.log("Events length in getEventCards", events.length)
		const eventCards = events.length > 0 ? (
			events.map(e => <EventCard  key={e._id} event={e} />)
		) : (
			<h3>No upcoming events!!</h3>	
		)
		return eventCards;
	}

	buildEventCards(events) {
		return this.getEventCards(events);
	}


	getPastEvents(events) {
		const pastEvents = _.filter(events, function(event) {	
		var eventStartDate = getEventCountDown(event.StartTime);
			if (!_.isEmpty(eventStartDate)) {
				if (eventStartDate["days"] < 0) {
					//console.log("Event start date",eventStartDate);
					return event;
				}
			}
		});
		return pastEvents;
	}

	getUpcomingEvents(events) {
		const upcomingEvents = _.filter(events, function(event) {	
			var eventStartDate = getEventCountDown(event.StartTime);
			if (!_.isEmpty(eventStartDate)) {
				if (eventStartDate["days"] > 0) {
					//console.log("Event start date",eventStartDate);
					return event;
				}
			}
			});
			return upcomingEvents;
	}


	componentDidMount() {
		var events = []
		console.log("Getting events using url=", url)
		axios.get(`${url}/${eventsUri}`)
			.then(res => {
				events = res.data;
				//console.log("SVM Events",events);
				const pastSvmEvents = _.filter(events, function(event) {
					if (event.EventType === eventType.SVM_EVENTS) {
						var eventStartDate = getEventCountDown(event.StartTime);
						if (!_.isEmpty(eventStartDate)) {
							if (eventStartDate["days"] < 0) {
								//console.log("Event start date",eventStartDate);
								return event;
							}
						}
					}
				});
				const upcomingSvmEvents = _.filter(events, function(event) {
					if (event.EventType === eventType.SVM_EVENTS) {
						var eventStartDate = getEventCountDown(event.StartTime);
						if (!_.isEmpty(eventStartDate)) {
							if (eventStartDate["days"] > 0) {
								return event;
							}
						}
					}
				});
				
				this.setState({ 
					pastSvmEvents: pastSvmEvents,
					upcomingSvmEvents: upcomingSvmEvents,
					displaySvmEvents: upcomingSvmEvents
				})

				//console.log("upcoming svm events",this.state.upcomingScsEvents)
			})
			
			axios.get(`${url}/${eventsUri}`)
			.then(res => {
				events = res.data;
				//console.log("SVM Events",events);
				const pastScsEvents = _.filter(events, function(event) {
					if (event.EventType === eventType.SCS_EVENTS) {
						var eventStartDate = getEventCountDown(event.StartTime);
						if (!_.isEmpty(eventStartDate)) {
							if (eventStartDate["days"] < 0) {
								//console.log("Event start date",eventStartDate);
								return event;
							}
						}
					}
				});
				const upcomingScsEvents = _.filter(events, function(event) {
					if (event.EventType === eventType.SCS_EVENTS) {
						var eventStartDate = getEventCountDown(event.StartTime);
						if (!_.isEmpty(eventStartDate)) {
							if (eventStartDate["days"] > 0) {
								return event;
							}
						}
					}
				});
				
				this.setState({ 
					pastScsEvents: pastScsEvents,
					upcomingScsEvents: upcomingScsEvents,
					displayScsEvents: upcomingScsEvents
				})

				//console.log("upcoming scs events",this.state.upcomingScsEvents)
			})
	}

	handleEventsSlider(e) {
		const that = this;
		if (e.target.id === 'svmEventsBtn') {
			if (!that.state.showPastSvmEvents) {
				that.setState({
					showPastSvmEvents: !that.state.showPastSvmEvents,
					displaySvmEvents: that.state.pastSvmEvents
				})
			} else {
				that.setState({
					showPastSvmEvents: !that.state.showPastSvmEvents,
					displaySvmEvents: that.state.upcomingSvmEvents
				})
			}
		} else {
			if (!that.state.showPastScsEvents) {
				that.setState({
					showPastScsEvents: !that.state.showPastScsEvents,
					displayScsEvents: that.state.pastScsEvents
				})
			} else {
				that.setState({
					showPastScsEvents: !that.state.showPastScsEvents,
					displayScsEvents: that.state.upcomingScsEvents
				})
			}
		}
		
	}
	  

    render(){
		const displaySvm = this.buildEventCards(this.state.displaySvmEvents)
		const displayScs = this.buildEventCards(this.state.displayScsEvents)
		
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
				<section className="bg-gray xs-content-section-padding">
					<div className="container">
					<div className="xs-heading row xs-mb-60">
                        <div className="col-md-9 col-xl-9">
                            <h3 className="xs-title">Community Events</h3>
                        </div>
                        <div className="col-xl-3 col-md-3 ">
							<span>Show Past Events</span>
							<div className="custom-switch custom-switch-label-yesno">
								<input className="custom-switch-input" onChange={this.handleEventsSlider.bind(this)} id="scsEventsBtn" type="checkbox"></input>
								<label className="custom-switch-btn" htmlFor="scsEventsBtn"></label>
							</div>
                        </div>
                    </div>
						<div className="row">
							{displayScs}
						</div>
					</div>						
				</section>
				<section className="xs-content-section-padding">
					<div className="container">
					<div className="xs-heading row xs-mb-60">
                        <div className="col-md-9 col-xl-9">
                            <h3 className="xs-title">Events</h3>
                        </div>
                        <div className="col-xl-3 col-md-3 ">
							<span>Show Past Events</span>
							<div className="custom-switch custom-switch-label-yesno">
								<input className="custom-switch-input" onChange={this.handleEventsSlider.bind(this)} id="svmEventsBtn" type="checkbox"></input>
								<label className="custom-switch-btn" htmlFor="svmEventsBtn"></label>
							</div>
                        </div>
                    </div>
						<div className="row">
							{displaySvm}
						</div>
					</div>						
				</section>
				
			</main>
		</div>
        )
    }
}

export default Events;
