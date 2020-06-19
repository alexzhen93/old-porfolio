import React from 'react';
import './Style.css';

import Hero from '../components/Hero';
import Carousel from '../components/Carousel';

function HomePage(props) {

    return (
        <div>
            <Hero title={props.title} subTitle={props.subTitle} text={props.text} />
            <Carousel />
        </div>
    );
}

export default HomePage;