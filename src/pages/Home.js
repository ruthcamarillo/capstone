import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
// import Slider from '../components/Slider';
import Info from '../components/Pageinfo';
import Earth from '../components/Earth';

function Home() {

    return (
        <div>

            <h1>HOME</h1>
            <Earth />
            <Info />
        {/* <Slider /> */}
        </div>
    );
}

export default Home;