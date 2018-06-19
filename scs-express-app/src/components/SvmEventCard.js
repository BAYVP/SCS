import React, { Component } from 'react';
import _ from 'underscore';

class SvmEventCard extends Component {
    
    render(){ 
        if(_.isEmpty(this.props.svmEvent.title)) {
            return <div />
        }

        return (
            <div className="col-lg-4 col-md-6">
            <div className="xs-box-shadow xs-single-journal xs-mb-30">
                <div className="entry-header">
                    <h3 className="entry-title">{this.props.svmEvent.title}</h3>
                </div>
                <span className="xs-separetor"></span>
                <div className="post-meta meta-style-color">
                    
                <a href={this.props.svmEvent.url} className="btn btn-primary" target="_blank">Event Photos</a>
                    
                </div>
            </div>
        </div>
    )
}
}
  export default SvmEventCard;