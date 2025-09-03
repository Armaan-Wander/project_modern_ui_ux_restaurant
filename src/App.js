import React from 'react';
// import { AboutUs, Chef, Footer, Gallery, Header, Intro, Laurels, SpecialMenu } from './container';
import { BrowserRouter as Router } from 'react-router-dom';
import { Footer, Gallery, Header, Intro, SpecialMenu } from './container';
import { Navbar } from './components';
import './App.css';
// , Route, Link, Routes
const App = () => (

  <Router>
    <div>
      <Navbar />
      <Header />
      {/* <AboutUs /> */}
      <SpecialMenu />
      <Gallery />
      {/* <Chef /> */}
      <Intro />
      {/* <Laurels /> */}
      <Footer />
    </div>
  </Router>
);

export default App;
