import React from 'react';
import logo from './images/logoTmave.png';
import logoBile from './images/logoBile.png';
import people from './images/people.png';
import text from './images/text2.png';
import krivka from './images/krivka.svg';
import './App.sass';
import { Link } from "react-scroll";

function App() {

  window.scroll(function (){
    let scrollValue = this.scrollTop();
    (".sekce1").css("transform", 'translate(0px,-' + scrollValue / 2 + '%)');
  });

  return (
    <div className="App">
      <section className="landing">
      <img src={logo} className="App-logo" alt="logo" />
        <nav>
            <Link activeClass="active"
                  to="info"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration= {500}>
                    <a href="#info" className="hidden">Info</a>
            </Link>
            <Link activeClass="active"
                  to="kontakty"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration= {500}>
                    <a href="#kontakty">Kontakt</a>
            </Link>
        </nav>
        <p className="uvodniText">Kompletní web pro vás teprve připravujeme, zatím si připomeneme, jaký byl největší zlínský open-air roku 2019</p>
        <div className="seskupeni">
          <img src={text} className="text" alt="text" />
          <img src={people} className="people" alt="people" />
        </div>
      </section>
      <section className="info" id="info">
        <p className="font">Majáles 2019 v číslech:</p>
        <div className="flexNaDruhou">
          <div className="sekce1">
            <p className="cisla" style={{color: '#7389E5'}}>3700</p>
            <p>návštěvníků si vyhodilo z kopýtka</p>
            <p className="cisla" style={{color: '#F2BE61'}}>6492</p>
            <p>prodaných piv</p>
            <p className="cisla" style={{color: '#79F28D'}}>9</p>
            <p>prodaných piv</p>
          </div>
          <div className="sekce2">
            <p className="cisla" style={{color: '#7389E5'}}>mooc</p>
            <p>kapel</p>
            <p className="cisla" style={{color: '#F2BE61'}}>150 042</p>
            <p>kroků do Gahurova kopečku</p>
            <p className="cisla" style={{color: '#79F28D'}}>nespočet</p>
            <p className="odsazeni">zážitků, které nevypereš</p>
          </div>
        </div>
        <img src={krivka} className="krivka" alt="krivka" />
      </section>
      <section className="kontakty" id="kontakty">
      <h2>Kontakty</h2>
        <div className="flex">
          <div className="kontakt">
            <p style={{color: 'white'}}>Leona Vyhnálková</p>
            <p style={{color: '#F12551'}}>l_vyhnalkova@utb.cz</p>
          </div>
          <div className="kontakt">
            <p style={{color: 'white'}}>Radim Majda</p>
            <p style={{color: '#F12551'}}>majda@sutb.cz</p>
          </div>
        </div>
        <img src={logoBile} className="App-logo" alt="logo" />
      </section>
    </div>
  );
}

export default App;
