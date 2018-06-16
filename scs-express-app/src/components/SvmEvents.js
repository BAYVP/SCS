import React, { Component } from 'react';
import chaptersBackgroundImg from './images/svm_events_bg.jpg';
import SvmEventCard from './SvmEventCard';

const svmEvents = [
    {
        "_id": 1,
        "title": "SVM Graduation Day - 2018",
        "url": "https://photos.app.goo.gl/wYqDYxpvmSSvtAvU6"
    },
    {
        "_id": 2,
        "title": "SVM Gita Jayanti - 2017",
        "url": "https://photos.google.com/share/AF1QipNbhnz_aMjzyPKCVOVLc02jaBtzJ1fa_9ksNVsZtCI7DvImMiW-Aj3dxZZe9L3rdg?key=eHVHSE9NakdfQlZsbVMxM2hMZUpNaHhzWERyRGVn"
    },
    {
        "_id": 3,
        "title": "SVM Gujarat Day - 2017",
        "url": "https://goo.gl/photos/ZeEZyX9XfLUKPBRi6"
    },
    {
        "_id": 4,
        "title": "SVM Annual Day - 2017",
        "url": "https://goo.gl/photos/WRZPKCzJfLrZ3Qc68"
    },
    {
        "_id": 5,
        "title": "SVM Musical Day - 2017",
        "url": "https://goo.gl/photos/g1RAcA9eCgNB6UyY8"
    },
    {
        "_id": 6,
        "title": "SVM Graduation Day - 2017",
        "url": "https://goo.gl/photos/rbBtTbaX5g1UqrTv9"
    },
    {
        "_id": 7,
        "title": "SVM Annual Day - 2016",
        "url": "https://goo.gl/photos/GTeBc8jaWUwmYZ9i9"
    },
    {
        "_id": 8,
        "title": "SVM Gujarat Day - 2016",
        "url": "https://goo.gl/photos/bL8Ren8LA8XqGeqi7"
    },
    {
        "_id": 9,
        "title": "SVM Music Fest - 2016",
        "url": "https://goo.gl/photos/aMCpkCFx2kJRwYHG6"
    }
]

class SvmEvents extends Component {
    render(){
        const svmEventCards = svmEvents.length > 0 ? (
			svmEvents.map(e => <SvmEventCard  key={e._id} svmEvent={e} />)
		) : (
			<h3>Currently we do not have any events planned!!</h3>	
		)

        return(
            <div> 
                <section className="xs-banner-inner-section parallax-window" style={{backgroundImage: `url(${chaptersBackgroundImg})`}}>
                <div className="xs-black-overlay"></div>
                    <div className="container">
                        <div className="color-white xs-inner-banner-content">
                        <h2>Shreemay Vidya Mandir Events</h2>
                        <p>Striving to grow more heart and character</p>
                    </div>
                </div>
            </section>
            <section className="bg-gray waypoint-tigger xs-section-padding">
                <div className="container">
                    <div className="row">
                        {svmEventCards}
                    </div>
                </div>
            </section>
            </div>
        )
    }
}

export default SvmEvents;