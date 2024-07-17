import React, { useState } from 'react';
import '../style/hero.css';
// import img1 from '../images/img1.jpeg';
import img1 from '../images/img1 (2).png'
import img2 from '../images/img2.png';
import img3 from '../images/img3.png';
import img4 from '../images/img4.png';

function Hero() {
  const [currentPic, setCurrentPic] = useState(img3);

  const handleButtonClick = (img) => {
    setCurrentPic(img);
  };

  return (
    <div className='hero-main'>
      <div className="left-half">
        <div className="button-container">
          <button className="blue-button">Disponibm</button>
        </div>
        <div className="box">
          <div className="box-content">
            <h2>GV-01</h2>
            <p className="info-line">
              Tipo de unidad: <span>Tipo C2</span>
            </p>
            <p className="info-line">
              Precio: <span>$1,808,951.00 USD</span>
            </p>
            <p className="info-line">
              Recámaras: <span>4</span>
            </p>
            <p className="info-line">
              Baños: <span>5</span>
            </p>
            <p className="info-line">
              SqFt: <span>3,712.63</span>
            </p>
            <p className="info-line">
              M2: <span>345.04</span>
            </p>
            <div className="button-row">
              <button className="black-button">Calendario de pago</button>
              <button className="red-button">Estoy interesado</button>
              <button className="black-button">Ver plano de planta</button>
              <button className="black-button">Var Plano virtual</button>
            </div>
          </div>
        </div>
      </div>
      <div className='hero-part2'>
        <div className='hero-button'>
          <button onClick={() => handleButtonClick(img1)} className='btn-01'>Todos</button>
          <button onClick={() => handleButtonClick(img2)} className='btn-02'>Vendido</button>
          <button onClick={() => handleButtonClick(img3)} className='btn-03'>Reservado</button>
          <button onClick={() => handleButtonClick(img4)} className='btn-04'>Disponsible</button>
        </div>
        <div className="hero-box">
          <button className='box-01'></button> <p className='para1'>1 Bedroom</p>
          <button className='box-02'></button> <p className='para2'>2 Bedroom</p>
          <button className='box-03'></button> <p className='para3'>3 Bedroom</p>
          <button className='box-04'></button> <p className='para4'>4 Bedroom</p>
        </div>
        <div className='hero-text'>
          <h1>Units with views of the city and the sea</h1>
          <h3>Canal view to the right ></h3>
          <button>Download Price List</button>
        </div>
        <div className='hero-line'>
          <hr style={{ border: 'none', borderTop: '1.4px solid white' }} />
        </div>
        <br />
        <div className='hero-building'>
          <img src={currentPic} alt="Current View" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
