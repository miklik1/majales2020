import React from 'react';
import logo from './images/logoTmave.png';
import people from './images/people.png';
import './App.sass';

function App() {
  return (
    <div className="App">
      <section className="landing">
      <img src={logo} className="App-logo" alt="logo" />
        <nav>
            <a href="#" className="hidden">Info</a>
            <a href="#">Kontakt</a>
        </nav>
        <p className="uvodniText">ahoj, kompletni web pro vas zatim pripravujeme, zatim lorem ipsum</p>
        <div className="seskupeni">
          <p>letos to vypukne<br /></p>
          <p className="datum">7. 5. 2020</p>
          <img src={people} className="people" alt="people" />
        </div>
      </section>
      <section className="info">
        <p>Majales 2019 v cislech</p>
        <div className="grid">
          <div className="sekce1">
            <p>Majales 2019 v cislech</p>
            <p>Majales 2019 v cislech</p>
            <p>Majales 2019 v cislech</p>
            <p>Majales 2019 v cislech</p>
          </div>
          <div className="sekce2">
            <p>Majales 2019 v cislech</p>
            <p>Majales 2019 v cislech</p>
            <p>Majales 2019 v cislech</p>
            <p>Majales 2019 v cislech</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
