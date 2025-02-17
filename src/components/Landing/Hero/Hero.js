import React, { useState, useEffect } from 'react';
import TextTransition, { presets } from 'react-text-transition';
import ReactGA from 'react-ga';
import Portal from '../Login/Portal';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const TEXTS = [
  'local de comidas',
  'restaurante',
  'cafetería',
  'bar',
  'hotel',
];

const HeroSection = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() =>
      setIndex(index => index + 1),
      3250);
    return (() => clearInterval(intervalId));
  });

  const handleOnViewDemo = (e) => {
    e.preventDefault();
    ReactGA.event({ category: 'View', action: 'Demo' });
    ReactGA.pageview('/menu/demo');
    window.location.href = 'https://portal.deminut.com/menu/?id=dee6d2f0-f735-11ed-a86d-8dfaaa361644';
  };

  return (
    <section
      id="home"
      className="section welcome-area bg-overlay d-flex align-items-center"
    >
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-12 col-lg-7">
            <div className="welcome-intro">
              <h1 className="text-white">
                Lleve su
                <TextTransition
                  text={TEXTS[index % TEXTS.length]}
                  springConfig={presets.stiff}
                />
                al siguiente nivel.
              </h1>
              <p
                className="text-white my-4"
                style={{ fontSize: 16 }}
              >
                Ya no es necesario darles el menú de forma tradicional a sus clientes. Permita que escaneen un código QR situado en la mesa de su local de comidas y accedan de forma inmediata al menú en formato digital y brinde un servicio de excelencia.
              </p>
              <div className="button-group store-buttons d-flex">
                <a
                  onClick={handleOnViewDemo}
                  className="btn sApp-btn text-uppercase"
                  target="_blank"
                  href="#"
                >
                  Ver demo
                </a>
                <a
                  className="btn sApp-btn text-uppercase"
                  target="_blank"
                  href="https://wa.me/59892073609"
                >
                  <FontAwesomeIcon
                    icon={faWhatsapp}
                    style={{ marginRight: 8 }}
                  />
                  Hablar con ventas
                </a>
              </div>
            </div>
          </div>
          <Portal />
        </div>
      </div>
      {/* Shape Bottom */}
      <div className="shape-bottom">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
        >
          <path
            className="shape-fill"
            fill="#FFFFFF"
            d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7  c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4  c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
