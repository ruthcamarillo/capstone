import React from 'react';
import './earth.css';






function Earth(){
    return(<div className="contain">
        
        <div id="earth-c"></div>
        <div className="title-container1">
        <img class="picture-c" src="logo.jpg" alt="logo" ></img>
            <div class="title-5">
            {/* <img class="picture" src="logo.jpg" alt="logo" ></img> */}
                <h2 class="heading-5">Who We Are</h2>
                <p class="parag-5">Disaster Dispatch is an organization that helps to connect people that have been through 
            natural disasters find relief and homes with the help of habitat for humanity. Our team and others 
            come from around the world to come together to help clean and help others with the outcome of these
             disasters.</p>
             {/* <input type="button" class="button" value="Learn more"></input> */}
             <a href="/about" class="button">Learn More</a>

            </div>

        </div>
        </div>
    )
};

export default Earth;