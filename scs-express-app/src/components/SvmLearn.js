import React, { Component } from 'react';
import chaptersBackgroundImg from './images/learn.jpg';
import SvmLearnCard from './SvmLearnCard';

const svmQuizlets = [
    {
        "_id": 1,
        "title": "Match the numbers (English and Gujarati from 0 to 10)",
        "url": " https://quizlet.com/506483863/match "
    },
    {
        "_id": 2,
        "title": "Save your planet from asteroids (Numbers edition - 0 to 10)",
        "url": "https://quizlet.com/506483863/gravity"
    },
    {
        "_id": 3,
        "title": "Match the numbers (Gujarati words)",
        "url": "https://quizlet.com/506595538/match"
    },
    {
        "_id": 4,
        "title": "Save your planet from asteroids (Gujarati words)",
        "url": "https://quizlet.com/506595538/gravity"
    },
    {
        "_id": 5,
        "title": "Match the Gujarati letters (Kakko)",
        "url": "https://quizlet.com/505570958/match"
    },
    {
        "_id": 6,
        "title": "Save your planet from asteroids (Kakko edition)",
        "url": "https://quizlet.com/505570958/gravity"
    },
    {
        "_id": 7,
        "title": "Match the numbers (English and Gujarati from 0 to 20)",
        "url": "https://quizlet.com/507164210/match"
    },
    {
        "_id": 8,
        "title": "Save your planet from asteroids (Numbers edition - 0 to 20)",
        "url": "https://quizlet.com/507164210/gravity"
    },
    {
        "_id": 9,
        "title": "Match the Gujarati vowels",
        "url": "https://quizlet.com/507166389/match"
    },
    {
        "_id": 10,
        "title": "Save your planet from asteroids (Gujarati vowels edition)",
        "url": "https://quizlet.com/507166389/gravity"
    },
    {
        "_id": 11,
        "title": "Numbers (0 to 10)",
        "url": "https://quizlet.com/506483863/svm-gujarati-numbers-from-0-10-flash-cards/"
    },
    {
        "_id": 12,
        "title": "Numbers (0 to 20)",
        "url": "https://quizlet.com/507164210/svm-gujarati-numbers-from-0-20-flash-cards/"
    },
    {
        "_id": 13,
        "title": "Numbers in words",
        "url": "https://quizlet.com/506595538/svm-gujarati-numbers-in-words-flash-cards/"
    },
    {
        "_id": 14,
        "title": "Gujarati Kakko",
        "url": "https://quizlet.com/505570958/svm-gujarati-kakko-set-flash-cards/"
    },
    {
        "_id": 15,
        "title": "Gujarati Vowels",
        "url": "https://quizlet.com/507166389/svm-gujarati-vowels-flash-cards/"
    }
]

class SvmLearn extends Component {
    render(){
        const svmEventCards = svmQuizlets.length > 0 ? (
			svmQuizlets.map(e => <SvmLearnCard  key={e._id} svmLearn={e} />)
		) : (
			<h3>Currently we do not have any quiz planned!!</h3>	
		)

        return(
            <div> 
                <section className="xs-banner-inner-section parallax-window" style={{backgroundImage: `url(${chaptersBackgroundImg})`}}>
                <div className="xs-black-overlay"></div>
                    <div className="container">
                        <div className="color-white xs-inner-banner-content">
                        <h2>Shreemay Vidya Mandir Online Learning</h2>
                        <p>We know some people prefer paper to online. Feel free to print question papers from these links and give them to your kids to work on. The links generate different tests every time, so you can use them every week to generate different questions.
</p>
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

export default SvmLearn;