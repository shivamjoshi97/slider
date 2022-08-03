import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import '../App.css';
import photo1 from '../1.jpeg';
import photo2 from '../2.jpeg';
import photo3 from '../3.jpeg';
import pause from '../17550.png';
import playicon from '../61180.png';

export const Old = () => {
  var [state,setState] = useState(false);
  var [icon,setIcon] = useState(pause);
  const setdata=()=>{
    var data1 = document.getElementById("data1").innerHTML;
    document.getElementById("data").innerHTML = data1;
  }
  const play=()=>{
    setState(!state);
    if(state===false)
    {
      setIcon(playicon);
    }
    else
    {
     setIcon(pause);
    }
    console.log(icon);
    console.log(state);
  }
  return (
    <>
    <div>
      <div className="row mt-10">
        <div className="col-lg-8">
          <div className="App">
            <Carousel infiniteLoop={true} autoPlay={state}>
                      <div>
                          <img src={photo1} alt="photo1" onClick={setdata}/>
                      </div>
                      <div>
                          <img src={photo2} alt="photo2"/>
                      </div>
                      <div>
                          <img src={photo3} alt="photo3"/>
                      </div>
            </Carousel>
            <div onClick={play}>
              <img className='button' src={icon} alt='icon'/>
            </div>
          </div>
        </div>
        <div className="col-lg-4" id="data">
        <h1>hello</h1>
                            <p>Bhimtal is a lake city named after Bhima, the charismatic mythological character of 
                              Mahabharata. Revered for its aesthetic beauty, Bhimtal proudly sits at an altitude of 
                              1,370 metres above sea level. This lake city is gaining popularity with each day as it
                              is located in the vicinity of Nainital and features some of the stately hotels that are 
                              comparatively cheaper than that of Nainital.
                              The Bhimtal lake is at a scenic spot with a small island at its centre on which there 
                              is a beautiful large aquarium which was previously a restaurant. Bhimtal affords 
                              splendid views and visual vistas of nature's beauty. Bhimtal is well connected by roads
                              and is a perfect destination to visit in any month.</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default Old;
