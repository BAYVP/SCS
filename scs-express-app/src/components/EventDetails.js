import React, { Component } from 'react';
import axios from 'axios';
import _ from 'underscore';
import {getDateFromStr, getMonthFromDate, getDayFromDate, getEventStartTime, getEventCountDown} from '../utils/datetimeutil';

const url = "http://52.191.119.42:1337"
class EventDetails  extends Component {
    constructor(props) {
        super(props);
        this.state = {
			eventDetail: {}
		};
    }

    componentDidMount() {
        const eventId = this.props.match.params.id;
        console.log("*** Event id", this.props.match.params.id)
		axios.get(`${url}/events?ID=${eventId}`)
			.then(res => {
				const eventDetail = res.data[0];
                this.setState({ eventDetail })
                console.log("Event details from strapi: ", this.state.eventDetail);
			});
	}

    render(){
        var eventDate = "";
        var eventDay = "";
        var eventMonth = "";
        var imageUrl = "";
        var startTime = ""
        var dateCountDownStr = ""
        var eventDescription = "";
        if(!_.isEmpty(this.state.eventDetail.StartDate)) {
            eventDate = getDateFromStr(this.state.eventDetail.StartDate);
            eventDay =  getDayFromDate(this.state.eventDetail.StartDate);
            eventMonth =  getMonthFromDate(this.state.eventDetail.StartDate);
            startTime = getEventStartTime(this.state.eventDetail.StartTime);
            dateCountDownStr = getEventCountDown(this.state.eventDetail.StartDate);
            eventDescription = this.state.eventDetail.Description.split('\n').map((item, i) => <p key={i}>{item}</p>);
        }
        if(!_.isEmpty(this.state.eventDetail.Images)) {
            imageUrl = `${url}/${this.state.eventDetail.Images[0].url}`;
        }
        
    
        return(
            <div>
                <section className="xs-banner-inner-section parallax-window" style={{backgroundImage: `url(${imageUrl})`}}>
                    <div className="xs-black-overlay"></div>
                    <div className="container">
                        <div className="color-white xs-inner-banner-content">
                            <h2>{this.state.eventDetail.Title}</h2>
                        </div>
                    </div>
                </section>
                <main className="xs-main">
                    <section className="xs-content-section-padding">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="row">
                                        <div className="col-lg-8 xs-event-wraper">
                                            <div className="xs-event-content">
                                                <h4>Event Details</h4>
                                                {eventDescription}
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="xs-event-schedule-widget">
                                                <div className="media xs-event-schedule">
                                                    <div className="d-flex xs-evnet-meta-date">
                                                        <span className="xs-event-date">{eventDay}</span>
                                                        <span className="xs-event-month">{eventMonth}</span>
                                                    </div>
                                                    <div className="media-body">
                                                        <h5>{this.state.eventDetail.Title}</h5>
                                                    </div>
                                                </div>
                                                <ul className="list-group xs-list-group">
                                                    <li className="d-flex justify-content-between">
                                                        Organized by: 
                                                        <span>{this.state.eventDetail.OrganizerName}</span>
                                                    </li>
                                                    <li className="d-flex justify-content-between">
                                                        Start: 
                                                        <span>{startTime}</span>
                                                    </li>
                                                    <li className="d-flex justify-content-between">
                                                        Venue: 
                                                        <span style={{textAlign:"right"}}>{this.state.eventDetail.EventAddress}</span>
                                                    </li>
                                                    <li className="d-flex justify-content-between">
                                                        Phone:  
                                                        <span>{this.state.eventDetail.OrganizerPhone}</span>
                                                    </li>
                                                    <li className="d-flex justify-content-between">
                                                        Email: 
                                                        <span>{this.state.eventDetail.OrganizerEmail}</span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="xs-countdown-timer timer-style-2 xs-mb-30" data-countdown={eventDate}>
                                                <span className="timer-count">{dateCountDownStr.split(':')[0]}<span className="timer-title">Days</span></span> 
                                                <span className="timer-count">{dateCountDownStr.split(':')[1]}<span className="timer-title">Hours</span></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
            )}
}
export default EventDetails;