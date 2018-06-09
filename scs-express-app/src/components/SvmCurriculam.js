import React, { Component } from 'react';
import chaptersBackgroundImg from './images/volunteer-bg.jpg';
import welcomeImage2 from './images/welcome_background_2.png';
import BootstrapTable from 'react-bootstrap-table-next';



const columns = [{
    dataField: 'Level',
    text: 'Level'
  }, {
    dataField: 'name',
    text: 'Teacher'
}];

const curriculumData = [
    {
        'Level' : 'Cultural 04',
        'name' : 'Shruti Desai'
    },
    {
        'Level' : 'Cultural 05',
        'name' : 'Monal Choksi'
    },
    {
        'Level' : 'Cultural 06',
        'name' : 'Keyura Mehta'
    },
    {
        'Level' : 'Cultural 06 - 07',
        'name' : 'Rupali Mehta'
    },
    {
        'Level' : 'Cultural 07',
        'name' : 'Amit Choksi'
    },
    {
        'Level' : 'Cultural 08',
        'name' : 'Hiten Shah'
    },
    {
        'Level' : 'Cultural 09',
        'name' : 'Shefaali Sanghavi	'
    },
    {
        'Level' : 'Cultural 10',
        'name' : 'Ruchita Shah'
    },
    {
        'Level' : 'Cultural 11',
        'name' : 'Vaishali Gandhi'
    },
    {
        'Level' : 'Cultural 12',
        'name' : 'Bhavin Shah'
    }
]


class SvmCurriculam extends Component {
    render(){
        return(
            <div> 
                <section className="xs-banner-inner-section parallax-window" style={{backgroundImage: `url(${chaptersBackgroundImg})`}}>
                    <div className="xs-black-overlay"></div>
                        <div className="container">
                            <div className="color-white xs-inner-banner-content">
                                <h2>Under Construction!!</h2>
                        </div>
                    </div>
                </section>
                <section className="bg-gray waypoint-tigger xs-section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-8">
                            <div className="md-archive-content">
                                <div className="xs-heading row xs-mb-60">
                                    <div className="col-md-9 col-xl-9">
                                        <h3 className="xs-title">Cultural and Heritage Curriculum</h3>
                                    </div>
                                </div>
                                <BootstrapTable keyField='id' data={ curriculumData } columns={ columns } />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            </div>
        )
    }
}

export default SvmCurriculam;