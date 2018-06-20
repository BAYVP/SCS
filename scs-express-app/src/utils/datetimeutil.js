import moment from 'moment';
import 'moment-timezone';
import _ from 'underscore';

const DAYS = 24;

export function getDateFromStr(dateStr) {
    var eventDate = ""
    if (!_.isEmpty(dateStr)) {
        eventDate = moment(Date.parse(dateStr.split(".")[0])).format('YYYY/MM/DD')
    }
    return eventDate;
}

export function getDayFromDate(dateStr) {
    var eventDay = ""
    if (!_.isEmpty(dateStr)) {
        eventDay = moment(Date.parse(dateStr.split(".")[0])).format('D')
    }
    return eventDay;
}

export function getMonthFromDate(dateStr) {
    var eventMonth = ""
    if (!_.isEmpty(dateStr)) {
        eventMonth = moment(Date.parse(dateStr.split(".")[0])).format('MMM')
    }
    return eventMonth;
}

export function getEventStartTime(dateStr) {
    var startTime = ""
    if(!_.isEmpty(dateStr)) {
        startTime = moment(Date.parse(dateStr.split(".")[0])).format("hh:mm a");
    }
    return startTime;
}

export function getEventCountDown(dateStr) {
    var eventDate = ""
    var totalDays = "";
    
    var hours = "";
    if (!_.isEmpty(dateStr)) {
        eventDate = moment(Date.parse(dateStr.split(".")[0]));
        var currentDate = moment(new Date());
        totalDays = eventDate.diff(currentDate, 'd');
        var totalHours = eventDate.diff(currentDate, 'h');
        hours = totalHours%DAYS;
        //console.log(totalDays + ":" + hours);
    }
    return {
        "days" : totalDays,
        "hours": hours
    }
}
