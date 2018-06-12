import React, { Component } from 'react';
import _ from 'underscore';
import {getDateFromStr, getMonthFromDate, getDayFromDate, getEventCountDown} from '../utils/datetimeutil';
import { Link } from "react-router-dom";


const url = "http://52.191.119.42:1337"

class EventCard1 extends Component {
    
    render(){ 
        var eventDate = ""
        var day = ""
        var month = ""
        var imageUrl = ""
        var dateCountDownStr = ""
    
        if(_.isEmpty(this.props.event.StartDate)) {
            return <div />
        }


        if(!_.isEmpty(this.props.event.Images)) {
            imageUrl = `${url}${this.props.event.Images[0].url}`
        }
        
        if(!_.isEmpty(this.props.event.StartDate)) {
            eventDate = getDateFromStr(this.props.event.StartDate)
            day =  getDayFromDate(this.props.event.StartDate);
            month =  getMonthFromDate(this.props.event.StartDate);
            dateCountDownStr = getEventCountDown(this.props.event.StartDate);
            //dateCountDownStr = getEventCountDown("2018-05-22T18:00:00.000Z");
        }
        
        return (
            <div className="col-lg-4 col-md-6">
            <div className="xs-box-shadow xs-single-journal xs-mb-30">
                <div className="entry-thumbnail ">
                    <img src={imageUrl} alt="" />
                </div>
                <div className="entry-header">
                    <div className="entry-meta">
                        <span className="date">
                            <div  className="entry-date">
                                {day} {month}
                            </div>
                        </span>
                    </div>
                    
                    <h4 className="entry-title">
                    <Link to={{ pathname: `/events/${this.props.event.ID}`,
                                    state: {
                                        event: this.props.event,
                                        eventDate: eventDate,
                                        eventDay: day,
                                        eventMonth: month
                                    } }}>{this.props.event.Title}</Link>
                    </h4>
                </div>
                <div className="xs-event-content">
                <div className="xs-countdown-timer" data-countdown={eventDate}>
                        <span className="timer-count">{dateCountDownStr.split(':')[0]}<span className="timer-title">Days</span></span> 
                        <span className="timer-count">{dateCountDownStr.split(':')[1]}<span className="timer-title">Hours</span></span>
                </div>
                </div>
                <span className="xs-separetor"></span>
                <div className="post-meta meta-style-color">
                    <span className="view-link">
                        <i className="fa fa-eye"></i>
                        <Link to={{ pathname: `/events/${this.props.event.ID}`}} className="btn btn-primary">Learn More</Link>
                    </span>
                </div>
            </div>
        </div>
    )
}
}
  export default EventCard1;