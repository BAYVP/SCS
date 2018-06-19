import moment from 'moment';
import 'moment-timezone';
import _ from 'underscore';

const DAYS = 24;

export function getDateFromStr(dateStr) {
    var eventDate = ""
    if (!_.isEmpty(dateStr)) {
        eventDate = moment(dateStr).format('YYYY/MM/DD')
    }
    return eventDate;
}

export function getDayFromDate(dateStr) {
    var eventDay = ""
    if (!_.isEmpty(dateStr)) {
        eventDay = moment(dateStr).format('D')
    }
    return eventDay;
}

export function getMonthFromDate(dateStr) {
    var eventMonth = ""
    if (!_.isEmpty(dateStr)) {
        eventMonth = moment(dateStr).format('MMM')
    }
    return eventMonth;
}

export function getEventStartTime(dateStr) {
    var startTime = ""
    if(!_.isEmpty(dateStr)) {
        startTime = moment(dateStr).format("hh:mm a");
    }
    return startTime;
}

export function getEventCountDown(dateStr) {
    var eventDate = ""
    var currentDate = moment.tz(new Date(),"America/Los_Angeles").format('MM/DD/YYYY');
    var days = "";
    var hours = "";
    if (!_.isEmpty(dateStr)) {
        eventDate = moment(dateStr);
        var totalHours = eventDate.diff(currentDate, 'hours');
        days =  Math.round(totalHours/DAYS);
        hours = totalHours%DAYS;
        //console.log("** Days=", days );
        //console.log("** Hours=", hours );
    }
    return days + ":" + hours ;
}
