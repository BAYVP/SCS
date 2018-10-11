import React, { Component } from 'react';

class Event extends Component {
    render() {
        return (
            <div className="card card-cascade">
                <div className="view overlay">
                    <img className="card-img-top" src="https://mdbootstrap.com/img/Photos/Others/men.jpg" alt="Card image cap" />
                    <a>
                        <div className="mask rgba-white-slight"></div>
                    </a>
                </div>
                <div className="view">
                    <h3 className="card-header-title mb-3">{this.props.event.title}</h3>
                    <p className="mb-0"><i className="fa fa-calendar mr-2"></i>{this.props.event.date}</p>
                </div>
                <div className="card-body text-center">
                    <p className="card-text">{this.props.event.shortDescription}</p>
                    <a href="#!" className="orange-text d-flex flex-row-reverse p-2">
                        <h5 className="waves-effect waves-light">Details<i className="fa fa-angle-double-right ml-2"></i></h5>
                    </a>
                </div>
            </div>
        )
    }
}

export default Event;