import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Made with Love, Served with Pride" />
      <h1 className="app__header-h1">Ouzo&apos;s Pizza</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>At Ouzo’s House of Pizza, we proudly make delicious pizza, burgers, subs, wings, pasta, gyros, salads, and more. Come enjoy some amazing food from one of the best restaurants in Rock Hill, SC. Stop by or give us a call. We can’t wait to serve you!</p>
      <button type="button" className="custom__button">Explore Menu</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.pizza} alt="header_img" />
    </div>
  </div>
);

export default Header;
