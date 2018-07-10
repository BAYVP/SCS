import React, { Component } from 'react';
import _ from 'underscore';
import {getDateFromStr, getMonthFromDate, getDayFromDate, getEventCountDown} from '../utils/datetimeutil';
import { Link } from "react-router-dom";
import config from '../../config';

const url = config.getStrapiUrl()
class EventCard extends Component {
    
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
            imageUrl = `${url}/${this.props.event.Images.url}`
        }
        
        if(!_.isEmpty(this.props.event.StartDate)) {
            eventDate = getDateFromStr(this.props.event.StartDate)
            day =  getDayFromDate(this.props.event.StartDate);
            month =  getMonthFromDate(this.props.event.StartDate);
            dateCountDownStr = getEventCountDown(this.props.event.StartDate);
            //dateCountDownStr = getEventCountDown("2018-05-22T18:00:00.000Z");
        }
        
        const dateCountDownDiv = (dateCountDownStr["days"] > 0 && dateCountDownStr["hours"] > 0)
                            ?  <div className="xs-countdown-timer" data-countdown={eventDate}>
                                    <span className="timer-count">{dateCountDownStr["days"]}<span className="timer-title">Days</span></span> 
                                    <span className="timer-count">{dateCountDownStr["hours"]}<span className="timer-title">Hours</span></span>
                                </div>
                            : <div></div>

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
                    <Link to={{ pathname: `/events/${this.props.event.ID}`,
                                    state: {
                                        event: this.props.event,
                                        eventDate: eventDate,
                                        eventDay: day,
                                        eventMonth: month
                                    } }}>{this.props.event.Title}</Link>
                    <p>{this.props.event.ShortDescription}</p>
                    {dateCountDownDiv}
                    <Link to={{ pathname: `/events/${this.props.event.ID}`}} className="btn btn-primary">Learn More</Link>
                </div>
            </div>
        </div>
    )
}
}
  export default EventCard;