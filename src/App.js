import React from 'react';
import './App.css';
import nanocgm from "./nanocgm.jpg";
import touchcare from "./touchcare.jpg";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import banner from "./banner.webp";
import image1 from "./image1.png"; 
import image2 from "./image2.png"; 



function App() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <Navbar />
      <div className="App-background">
        <Slider {...settings}>
          <div className="slide-container">
            <img src={nanocgm} alt='' />
            <div className="text-overlay">Touchcare S9 CGM</div>
            <div className="text-overlay2">Sistem za kontinuirano <br></br>praćenje glikemije</div>
          </div>
          <div className="slide-container">
            <img src={touchcare} alt='' />
            <div className="text-overlay">Touchcare S9 CGM</div>
            <div className="text-overlay2">Sistem za kontinuirano <br></br>praćenje glikemije</div>
          </div>
          <div className="slide-container">
  <img src={banner} alt='' />
  <div className="text-banner">Briga o zdravlju putem mobilnih aplikacija</div>
  <div className="text-banner2">Sve informacije o stanju glikemije na vašem telefonu</div>
</div>
        </Slider>
        
        <div className="new-section">
          <div className="new-image">
            <img src={image1} alt='' />
          </div>
          <div className="new-image">
            <img src={image2} alt=' '/>
          </div>
        </div>
        
        <div className="end-section">
          <p>Prije upotrebe pažljivo pročitati uputstvo za upotrebu medicinskog sredstva. Za obavijesti o indikacijama, mjerama opreza i neželjenim djejstvima posavjetujte se sa ljekarom ili farmaceutom</p>
          <p>Kontakt telefon: 032/771-770</p>
        </div>
        <div className="contact-form" id="contact">
          <h2>Kontaktirajte nas</h2>
          <form>
            <label>Ime:</label>
            <input type="text" name="name" />
            <label>Prezime:</label>
            <input type="text" name="surname" />
            <label>Email:</label>
            <input type="email" name="email" />
            <label>Poruka:</label>
            <textarea name="message"></textarea>
            <button type="submit">Pošalji</button>
          </form>
        </div>
        
        <button className="scroll-to-contact" onClick={scrollToContact}>Kontakt</button>
      </div>
    </div>
  );
}

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li className="nav-item nav-item-left">
          <a href="#home">Home</a>
        </li>
        <li className="nav-item nav-item-right">
          <a href="#contact">Kontakt</a>
        </li>
      </ul>
    </nav>
  );
};

const CustomPrevArrow = (props) => {
  return <div className="slick-arrow slick-prev">Previous</div>;
};

const CustomNextArrow = (props) => {
  return <div className="slick-arrow slick-next">Next</div>;
};

export default App;
