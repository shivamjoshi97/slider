import React,{useEffect,useState} from 'react';
import photo1 from '../p1.jpg';//img_5terre_wide
import photo2 from '../p2.jpg';//img_lights_wide
import photo3 from '../p8.jpg';//img_mountains_wide
import photo4 from '../p10.jpg';//img_nature_wide.jpg
import photo5 from '../p5.jpg';//img_snow_wide.jpg
import photo6 from '../p6.jpg';//img_woods_wide.jpg
import pause from '../17550.png';
import playicon from '../61180.png';
import '../App.css';
import {details} from './details';
export const New = () => 
{
  var [state,setState] = useState(false);
  var [icon,setIcon] = useState(pause);
  var [autopaly,setAutoplay] = useState();
  var play_slideIndex =0;
  let slideIndex = 1;
  function play_Slides()
  {
    let j;
    let play_slides = document.getElementsByClassName("mySlides");
    let data_slides = document.getElementsByClassName("user");
    let dots = document.getElementsByClassName("demo");
    for (j = 0; j < play_slides.length; j++) {
      play_slides[j].style.display = "none";
      data_slides[j].style.display = "none";
    }
    play_slideIndex++;
    for (j = 0; j < dots.length; j++) {
      dots[j].className = dots[j].className.replace(" active", "");
    }
    if (play_slideIndex > play_slides.length) {play_slideIndex = 1}
    dots[play_slideIndex-1].className += " active";
    play_slides[play_slideIndex-1].style.display = "block";
    data_slides[play_slideIndex-1].style.display = "block";
  }
  function play(){
    setState(!state);
    if(state ===false)
    {
      setIcon(playicon);
      setAutoplay(setInterval(play_Slides, 3000));
    }
    else
    {
     setIcon(pause);
     clearInterval(autopaly);
    }
  }
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("demo");
    let data_slides = document.getElementsByClassName("user");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
      data_slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    data_slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
  }
  useEffect(() => {
  showSlides(slideIndex);
  }, []);
  
  return (
    <>
    <div className="row">
      <div className="col-lg-12">
        <h2 style={{textAlign:"center"}}>Demo</h2>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-1"></div>
      <div className="col-lg-8">
        <div className="containers">
          <div className="mySlides">
              <img src={photo1} style={{width:"100%"}}  alt="image1"/>
          </div>
          <div className="mySlides">
              <img src={photo2} style={{width:"100%"}} alt="image2" />
          </div>
          <div className="mySlides">
              <img src={photo3} style={{width:"100%"}} alt="image3" />
          </div>
          <div className="mySlides">
              <img src={photo4} style={{width:"100%"}} alt="image4" />
          </div>
          <div className="mySlides">
              <img src={photo5} style={{width:"100%"}} alt="image5" />
          </div>
          <div className="mySlides">
              <img src={photo6} style={{width:"100%"}} alt="image6" />
          </div>
          <a className="prev"  onClick={()=>plusSlides(-1)}>❮</a>
          <a className="next" id="next" onClick={()=>plusSlides(1)}>❯</a>

        <div className="row_s">
            <div className="column_s">
            <img className="demo cursor" src={photo1} style={{width:"100%"}}  onClick={()=>currentSlide(1)} alt="The Woods"/>
            </div>
            <div className="column_s">
            <img className="demo cursor" src={photo2} style={{width:"100%"}}  onClick={()=>currentSlide(2)} alt="Cinque Terre"/>
            </div>
            <div className="column_s">
            <img className="demo cursor" src={photo3} style={{width:"100%"}}  onClick={()=>currentSlide(3)} alt="Mountains and fjords"/>
            </div>
            <div className="column_s">
            <img className="demo cursor" src={photo4} style={{width:"100%"}} onClick={()=>currentSlide(4)} alt="Northern Lights"/>
            </div>
            <div className="column_s">
            <img className="demo cursor" src={photo5} style={{width:"100%"}} onClick={()=>currentSlide(5)} alt="Nature and sunrise"/>
            </div>    
            <div className="column_s">
            <img className="demo cursor" src={photo6} style={{width:"100%"}} onClick={()=>currentSlide(6)} alt="Snowy Mountains"/>
            </div>
        </div>
        </div>
      </div>
      <div className="col-lg-3">
        {details.map((user) => (
          <div className="user">
            <h2>{user.head}</h2>
            <p>{user.para}</p>
          </div>
        ))}
      </div>
    </div>
    <div className="row">
      <div className="d-flex align-items-center justify-content-center col-lg-10">
      <div onClick={play}>
              <img className="button" src={icon} alt='icon'/>
      </div>
      </div>
    </div>
    <div className="row">
    </div>
    </>
  )
}

export default New;