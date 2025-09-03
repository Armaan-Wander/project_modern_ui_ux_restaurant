import React, { useState } from 'react';

import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { images } from '../../constants';
import './Footer.css';

const Footer = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleCopy = () => {
    const text = '4124 Celanese Rd #156, Rock Hill, SC 29732, United States';
    navigator.clipboard.writeText(text).then(() => {
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 2000);
    });
  };
  return (
    <div className="app__footer section__padding" id="login">

      <div className="app__footer-links">
        <div className="app__footer-links_contact">
          <h1 className="app__footer-headtext">Contact Us</h1>
          <button type="button" className="p__opensans address-text" onClick={handleCopy}>4124 Celanese Rd #156, Rock Hill, SC 29732, United States</button>
          <p className="p__opensans">+1 803-366-7800</p>
          {/* <p className="p__opensans">+1 212-555-1230</p> */}
        </div>

        <div className="app__footer-links_logo">
          <img src={images.ouzo} alt="footer_logo" />
          <p className="p__opensans">&quot;Made with Love, Served with Pride&quot;</p>
          <img src={images.spoon} className="spoon__img" style={{ marginTop: 15 }} />
          <div className="app__footer-links_icons">
            <FiFacebook />
            <FiTwitter />
            <FiInstagram />
          </div>
        </div>

        <div className="app__footer-links_work">
          <h1 className="app__footer-headtext">Dine-In Hours</h1>
          <p className="p__opensans">Tues - Thurs:</p>
          <p className="p__opensans">11:00 am - 9:00 pm</p>
          <p className="p__opensans">Fri - Sat:</p>
          <p className="p__opensans">11:00 am - 9:30 pm</p>
          <p className="p__opensans">Sun:</p>
          <p className="p__opensans">12:00 pm - 8:30 pm</p>
          <p className="p__opensans">Closed on Mondays</p>
        </div>
        <div className="app__footer-links_work">
          <h1 className="app__footer-headtext">Dine-In Hours</h1>
          <p className="p__opensans">Tues - Thurs:</p>
          <p className="p__opensans">11:00 am - 9:00 pm</p>
          <p className="p__opensans">Fri - Sat:</p>
          <p className="p__opensans">11:00 am - 9:30 pm</p>
          <p className="p__opensans">Sun:</p>
          <p className="p__opensans">12:00 pm - 8:30 pm</p>
        </div>
      </div>
      {showPopup && <div className="popup">Address Copied!</div>}
    </div>
  );
};

export default Footer;
