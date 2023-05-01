import React from 'react';
import './style.css';



function Info() {
    return (
        <div class="containment">
            <h1 class="title-c">More About Us</h1>
            <div>
                <div class="wrapper-c">
                    <div class="card-c">
                        <img src="https://images.squarespace-cdn.com/content/v1/5b1ef8ace17ba327f322c714/acf99119-8fb5-402a-a40b-1b85d71b8953/FBC+with+Amelia.png" class="card-img" alt=""></img>
                        <div class="info">
                            <h2>Come Volunteer</h2>
                            <p>Volunteering for natural disasters can be an incredibly rewarding experience that allows individuals to make a significant impact in their community. When natural disasters strike,                  they can leave a devastating aftermath, leaving communities struggling to recover. By volunteering, individuals can offer their time and skills to assist in various tasks such as
                                clearing debris, providing food and shelter, and even emotional support. Volunteering for natural disasters also provides an opportunity for individuals to learn new skills, make
                                new connections, and gain a sense of purpose by helping others. It's essential to ensure that individuals are adequately trained and prepared to handle the challenges that come
                                with volunteering for natural disasters, but the benefits of giving back to those in need are immeasurable.
                            </p>
                            <a href="https://www.habitat.org/volunteer" class="btn">Volunteer</a>
                        </div>
                    </div>
                    <div class="card-c">
                        <img src="https://i0.wp.com/publicintegrity.org/wp-content/uploads/2020/04/AP_19282564397986.jpg?fit=1200%2C774&ssl=1" class="card-img" alt=""></img>
                        <div class="info">
                            <h2>Why are we here</h2>
                            {/* <p>People help clean up after natural disasters because they recognize the immense impact that these events can have on communities and the individuals affected by them. Natural disasters
//                  can leave a trail of destruction and debris, making it difficult for those affected to recover and return to their daily lives. By helping to clean up, individuals can make a meaningful
//                   contribution towards restoring normalcy and providing much-needed support. Additionally, volunteering for clean-up efforts can provide individuals with a sense of purpose, community
//                    involvement, and the opportunity to make a positive impact in the lives of others.</p> */}

                        </div>
                    </div>
                    <div class="card-c">
                        <img src="https://www.isolutionsfl.com/zupload/library/11/-11-2048x1070-0.jpg?ztv=20180129170451" class="card-img" alt=""></img>
                        <div class="info">
                            <h2>Read All About It</h2>
                            <p> Natural disaster articles are an essential way to inform and connect readers with the latest news and updates on the impact of natural disasters. These articles cover a wide range of
                                topics, including the causes of natural disasters, their effects on people, and the response efforts to mitigate their impact. Through these articles, readers can learn about the                  science behind natural disasters, understand how they affect different communities, and access information about resources and support available to those affected. Additionally, natural
                                disaster articles can serve as a tool to connect readers with one another, providing a platform for people to share their experiences, offer support and resources, and create a sense of community in the wake of a natural disaster. Click our button down below to learn more about what's going on around the world.</p>

                            <a href="/read" className="btn" Link to="/read">Read More</a>
                        </div>
                    </div>

                </div>
            </div>



        </div>
        // </div>
        // </div>
    )
};


export default Info;