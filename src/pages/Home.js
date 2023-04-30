import React from 'react';

import { BrowserRouter, Route, Link } from "react-router-dom";
import Mission from '../components/Mission';
import Info from '../components/Pageinfo';
import Earth from '../components/Earth';






function Home() {


    return (
        <div>

            <h1></h1>

            <Earth />
            {/* <Mission /> */}
            <Info />
            <Mission />
       

        </div>
    );
}

export default Home;