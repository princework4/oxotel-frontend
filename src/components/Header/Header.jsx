import * as React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

import "./Header.css";

import { Logo } from "../../assets";

const Header = () => {
  const location = useLocation();
  const [colorChange, setColorchange] = React.useState(false);
  const [notHomePage, setNotHomePage] = React.useState(false);
  const [openMenu, setOpenMenu] = React.useState(false);
  const [showHam, setShowHam] = React.useState(false);
  const [size, setSize] = React.useState({
    width: undefined,
    height: undefined,
  });

  const changeNavbarColor = () => {
    if (window.location.pathname === "/") {
      if (window.scrollY >= 80) {
        setColorchange(true);
      } else {
        setColorchange(false);
      }
    }
  };

  React.useEffect(() => {
    if (location.pathname === "/") {
      window.addEventListener("scroll", changeNavbarColor);
      setNotHomePage(false);
    } else {
      setNotHomePage(true);
    }

    return () => {
      window.removeEventListener("scroll", () => changeNavbarColor);
    };
  }, [location]);

  React.useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [size.width]);

  React.useEffect(() => {
    if (size.width > 768 || window.innerWidth > 768) {
      setShowHam(false);
    } else {
      setShowHam(true);
    }
  }, [size.width]);

  const handleCheck = () => {
    openMenu ? setOpenMenu(false) : setOpenMenu(true);
  };

  return (
    <>
      {!showHam ? (
        <header
          className={
            notHomePage
              ? "header desktop_not_homepage"
              : colorChange
              ? "color_change header"
              : "header"
          }>
          <div className='wrapper'>
            <h1>
              <Link to='/'>
                <img src={Logo} alt='Oxotel Logo' />
              </Link>
            </h1>
            <nav>
              <ul>
                <li>
                  <NavLink to='/' activeclassname='active'>
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/about-us' activeclassname='active'>
                    About Us
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/our-pact' activeclassname='active'>
                    Our PACT
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/partner' activeclassname='active'>
                    Partner With Us
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/explore-residences' activeclassname='active'>
                    Explore Residences
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </header>
      ) : (
        <header
          className={
            notHomePage ? "mobile_header mobile_not_homepage" : "mobile_header"
          }>
          <div className='wrapper'>
            <h1>
              <Link to='/'>
                <img src={Logo} alt='Oxotel Logo' />
              </Link>
            </h1>
            <nav role='navigation'>
              <div id='menuToggle'>
                <input
                  type='checkbox'
                  className={openMenu ? "checked" : "unchecked"}
                  onClick={handleCheck}
                />
                <span></span>
                <span></span>
                <span></span>
                <ul id='menu'>
                  <li>
                    <NavLink
                      to='/'
                      activeclassname='active'
                      onClick={() => setOpenMenu(false)}>
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to='/about-us'
                      activeclassname='active'
                      onClick={() => setOpenMenu(false)}>
                      About Us
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to='/our-pact'
                      activeclassname='active'
                      onClick={() => setOpenMenu(false)}>
                      Our PACT
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to='/partner'
                      activeclassname='active'
                      onClick={() => setOpenMenu(false)}>
                      Partner With Us
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to='/explore-residences'
                      activeclassname='active'
                      onClick={() => setOpenMenu(false)}>
                      Explore Residences
                    </NavLink>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </header>
      )}
    </>
  );
};

export default Header;
