import React from 'react';
import "./banner.css";
import mainBanner from "../images/main_banner.png";

function Banner() {
    return (
        <section className='banner'>
            <img src={mainBanner} alt="배너"/>
            <ul>
                <li><div/></li>
                <li><div/></li>
                <li><div/></li>
            </ul>
        </section>
    );
}

export default Banner;