import React, { useState, useEffect } from 'react';
import './Header.css';
import Logo from '../../assets/logo.png';
import Bars from '../../assets/bars.png';
import { Link } from 'react-scroll';

const Header = () => {
  const [mobile, setMobile] = useState(window.innerWidth <= 768);
  const [menuOpened, setMenuOpened] = useState(false);

  useEffect(() => {
    const handleResize = () => setMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="header">
      <img src={Logo} alt="" className="logo" />

      {/* Hamburger button */}
      {mobile && !menuOpened && (
        <div
          style={{
            backgroundColor: 'var(--appColor)',
            padding: '0.5rem',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
          onClick={() => setMenuOpened(true)}
        >
          <img
            src={Bars}
            alt=""
            style={{ width: '1.5rem', height: '1.5rem' }}
          />
        </div>
      )}

      {/* Menu */}
      {menuOpened && (
        <div className="mobile-menu-wrapper">
          {/* Close button */}
          {mobile && (
            <div
              className="close-btn"
              style={{
                color: 'white',
                backgroundColor: 'var(--appColor)',
                padding: '0.5rem',
                borderRadius: '5px',
                cursor: 'pointer',
                position: 'absolute',
                right: '0.5rem',
                top: '1.25rem',
              }}
              onClick={() => setMenuOpened(false)}
            >
              ✖
            </div>
          )}

          <ul className="header-menu">
            <li>
              <Link onClick={() => setMenuOpened(false)} to="home" smooth spy>
                Home
              </Link>
            </li>

            <li>
              <Link
                onClick={() => setMenuOpened(false)}
                to="programs"
                smooth
                spy
              >
                Programs
              </Link>
            </li>

            <li>
              <Link
                onClick={() => setMenuOpened(false)}
                to="reasons"
                smooth
                spy
              >
                Why us
              </Link>
            </li>

            <li>
              <Link onClick={() => setMenuOpened(false)} to="plans" smooth spy>
                Plans
              </Link>
            </li>

            <li>
              <Link
                onClick={() => setMenuOpened(false)}
                to="testimonials"
                smooth
                spy
              >
                Testimonials
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
