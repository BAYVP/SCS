import React, { Component } from 'react';
import _ from 'underscore';
import moment from 'moment';
import 'moment-timezone';
import { Link } from "react-router-dom";

const url = "http://52.191.119.42:1337"

class EventCard extends Component {
    
    render(){ 
        var eventDate = ""
        var day = ""
        var month = ""
        var imageUrl = ""
    
        if(_.isEmpty(this.props.event.StartDate)) {
            return <div />
        }


        if(!_.isEmpty(this.props.event.Images)) {
            imageUrl = `${url}${this.props.event.Images[0].url}`
        }
        
        if(!_.isEmpty(this.props.event.StartDate)) {
            eventDate = moment(this.props.event.StartDate).format('YYYY/MM/DD')
            day =  moment(this.props.event.StartDate).format('D');
            month =  moment(this.props.event.StartDate).format('MMM');
        }

        return (
        <div className="col-lg-6 row xs-single-event event-green">
            <div className="col-md-5">
                <div className="xs-event-image">
                    <img src={imageUrl} alt="" />
                    <div className="xs-entry-date">
                        <span className="entry-date-day">{day}</span>
                        <span className="entry-date-month">{month}</span>
                    </div>
                    <div className="xs-black-overlay"></div>
                </div>
            </div>
            <div className="col-md-7">
                <div className="xs-event-content">
                    <Link to={{ pathname: `/events/${this.props.event.id}`,
                                    state: {
                                        event: this.props.event,
                                        eventDate: eventDate,
                                        eventDay: day,
                                        eventMonth: month
                                    } }}>{this.props.event.Title}</Link>
                    <p>{this.props.event.ShortDescription}</p>
                    <div className="xs-countdown-timer" data-countdown="2018/05/20"></div>
                    <Link to={{ pathname: `/events/${this.props.event.ID}`}} className="btn btn-primary">Learn More</Link>
                </div>
            </div>
        </div>
    )
}
}
  export default EventCard;