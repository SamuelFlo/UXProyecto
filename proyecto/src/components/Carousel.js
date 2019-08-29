import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

class DemoCarousel extends Component {
    render() {
        return (
            <Carousel>
                <div>
                    <img src={require("../img/Don Futbol.jpg")} />
                    <p className="legend">Cancha Don Futbol</p>
                </div>
                <div>
                    <img src={require("../img/Futeca.jpg")} />
                    <p className="legend">Cancha FUTECA</p>
                </div>
                <div>
                    <img src={require("../img/Los Amigos.jpg")}  />
                    <p className="legend">Cancha Los Amigos</p>
                </div>
                <div>
                    <img src={require("../img/Soccer City.jpg")} />
                    <p className="legend">Cancha Soccer City</p>
                </div>

            </Carousel>
        );
    }
};

export default DemoCarousel;
