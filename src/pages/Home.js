import React from 'react';

import { BrowserRouter, Route, Link } from "react-router-dom";
import Mission from '../components/Mission';
import Info from '../components/Pageinfo';
import Earth from '../components/Earth';
import TheNav from '../components/TheNav';






function Home() {


    return (
        <div>
            <TheNav />

            <h1></h1>

            <Earth />
            {/* <Mission /> */}
            <Info />
            <Mission />


        </div>
    );
}

export default Home;