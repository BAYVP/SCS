import React, { Component } from 'react';
import _ from 'underscore';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
//import { ReactTinyLink } from 'react-tiny-link'

class SvmLearnCard extends Component {
    render() {
        if(_.isEmpty(this.props.svmLearn.title)) {
            return <div />
        }
        return (
            <div className="col-lg-3 col-md-6">
            <div className="xs-box-shadow xs-single-journal xs-mb-30" style={{'text-align': 'center'}}>
                <Flippy
                    flipOnHover={true} // default false
                    flipOnClick={true} // default false
                    flipDirection="horizontal" // horizontal or vertical
                    ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
                    // if you pass isFlipped prop component will be controlled component.
                    // and other props, which will go to div
                     /// these are optional style, it is not necessary
                     style={{ width: '260px', height: '260px' }} 
                    >
                    <FrontSide style={{
                        display: 'inline-block'
                    }}>
                        <h5 class="card-title">{this.props.svmLearn.title}</h5>
                        
                   
                    </FrontSide>
                    <BackSide style={{ display: 'inline-block'}}>
                        <a style={{ 'text-align' : "center" }} href={this.props.svmLearn.url} className="btn btn-primary" target="_blank">Take Quiz</a>
                    </BackSide>
                </Flippy>
            </div>
            </div>
        )
    }
}
export default SvmLearnCard;