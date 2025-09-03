import React from 'react';
// import { AboutUs, Chef, Footer, Gallery, Header, Intro, Laurels, SpecialMenu } from './container';
import { Footer, Gallery, Header, Intro, SpecialMenu } from './container';
import { Navbar } from './components';
import './App.css';

const App = () => (
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
);

export default App;
