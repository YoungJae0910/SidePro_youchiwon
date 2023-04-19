import React from 'react';
import ScrollDown from '../include/ScrollDown';
import Banner from '../include/Banner';
import MainComment from '../include/MainComment';
import ApplicationProcess from '../include/ApplicationProcess';
import UsageGuide from '../include/UsageGuide';
import Footer from '../include/Footer';

import "./Main.css";


function Main() {
    return (
        <div>
            <div className='top'>
                <ScrollDown/>
            </div>
            <div className='main'>
                <Banner/>
                <MainComment/>
                <ApplicationProcess/>
                <UsageGuide/>
            </div>
            <div className="footer">
                <Footer/>
            </div>
        </div>
    );
}

export default Main;