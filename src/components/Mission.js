import React from 'react';
import './mission.css';




function Mission (){
    return(<div>
        <div class="contain-t">
        <h2 class="heading-2">How to Handle a natural disaster</h2>
        <h4 class="heading-4">There are numerous articles available that offer guidance on how to prepare for and respond to natural disasters, including tips for emergency preparedness, advice on disaster recovery, and information on government and community resources.</h4>
        </div>
        <div class="contain-b">
             <div class="card-b">
                <div class="img-b">
                    <img src="https://media.zenfs.com/en/accuweather_297/6c87e016fe0b3af4a57f0c0aa9d713de" alt="">
                    </img>
                </div>
                <div class="content">
                    <h2 class="heading-natural" >Flooding</h2>
                    <p class="parag-n">Floods can cause loss of life, property damage, displacement, health hazards, economic impact, environmental damage, and psychological impact. Mitigating the impact of floods is essential to minimize these outcomes and ensure the safety and well-being of affected individuals and communities. </p>
                    </div>
                <a href="https://www.almanac.com/content/flood-safety-and-survival-tips" class="btn-c">Help</a>
            </div>

            <div class="card-b">
                <div class="img-b">
                    <img src="https://earth.esa.int/web/earth-watching/content/documents/257246/3661841/demo-images-animation.gif" alt="">
                    </img>
                </div>
                <div class="content">
                    <h2 class="heading-natural">Fire</h2>
                    <p class="parag-n">Forest fires can cause destruction of forests, loss of property, economic impact, displacement, 
                        health hazards, environmental damage, and psychological impact. Mitigating the impact of forest 
                        fires is essential to minimize these outcomes and ensure the safety and well-being of affected
                         individuals and communities. </p>
                </div>
                <a href="https://www.readyforwildfire.org/prepare-for-wildfire/go-evacuation-guide/what-to-do-if-trapped/" class="btn-c">Help</a>

            </div>

            <div class="card-b">
                <div class="img-b">
                    <img src="https://www.icegif.com/wp-content/uploads/earthquake-icegif-29.gif" alt="">
                    </img>
                </div>
                <div class="content">
                    <h2 class="heading-natural">Earthquake</h2>
                    <p class="parag-n">Earthquakes can cause loss of life and injury, property damage, displacement, economic impact, 
                        health hazards, environmental damage, and psychological impact. Mitigating the impact of 
                        earthquakes is essential to minimize these outcomes and ensure the safety and well-being of 
                        affected individuals and communities.</p>
                </div>
                <a href="https://www.ready.gov/earthquakes#:~:text=Cover%20your%20head%20and%20neck%20with%20your%20arms.,an%20area%20with%20more%20debris." class="btn-c">Help</a>
            </div>

            <div class="card-b">
                <div class="img-b">
                    <img src="https://thumbs.gfycat.com/PoshMilkyDuckbillcat-size_restricted.gif" alt="">
                    </img>
                </div>
                <div class="content">
                    <h2 class="heading-natural">Tornado</h2>
                    <p class="parag-n">Tornados can cause loss of life and injury, property damage, displacement, economic impact, health hazards, environmental damage, and psychological impact. Mitigating the impact of tornados is essential to minimize these outcomes and ensure the safety and well-being of affected individuals and communities. </p>
                </div>
                <a href="https://www.cdc.gov/nceh/features/tornadosafety/index.html#:~:text=Go%20to%20the%20basement%20or,blanket%2C%20sleeping%20bag%20or%20mattress." class="btn-c">Help</a>
            </div>
        </div>
        </div>
        
    )
}

export default Mission;