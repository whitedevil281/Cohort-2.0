import React from 'react'
import Header from './header'

const Section1 = () => {
    return (
        <section className="section-view1 ">
            <Header />
            <div className="view1 box-hover-animation z-index-3">
                <div className="view1-left">
                    <div className="date">4 May 2025</div>
                    <div className="time">
                        <div className="day">Sunday,</div>
                        <div className="time-data">12:29:35 AM</div>
                    </div>
                    <div className="line"></div>
                    <div className="city">Bhopal</div>
                </div>
                <div className="view1-right">
                    <div className="view1-right-top">
                        <div className="temp">20°C</div>
                        <div className="weather">Sunny</div>
                    </div>
                    <div className="view1-right-bottom">
                        <div className="humidity weatherinfo">Humidity: 50%</div>
                        <div className="wind weatherinfo">Wind: 10 km/h</div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Section1
