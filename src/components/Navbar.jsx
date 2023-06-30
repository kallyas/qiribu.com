import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const menu = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Company",
      link: "#",
      hasChildren: true,
      children: [
        {
          name: "Terms & Conditions",
          link: "/terms",
        },
      ],
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className={`header sticky-bar ${isSticky ? "stick" : ""}`}>
        <div className="container">
          <div className="main-header">
            <div className="header-left">
              <div className="header-logo">
                <Link className="d-flex" to="/">
                  <img
                    src="logo_text_coral.svg"
                    sizes="(max-width: 479px) 100vw, 479px"
                    style={{ width: "100px" }}
                    alt="logo"
                  />
                </Link>
              </div>
              <div className="header-nav">
                <nav className="nav-main-menu d-none d-xl-block">
                  <ul className="main-menu">
                    {menu.map((item, index) =>
                      item.hasChildren ? (
                        <li key={index} className="has-children">
                          <Link to={item.link}>{item.name}</Link>
                          <ul className="sub-menu">
                            {item.children.map((child, index) => (
                              <li key={index}>
                                <Link to={child.link}>{child.name}</Link>
                              </li>
                            ))}
                          </ul>
                        </li>
                      ) : (
                        <li key={index}>
                          <Link to={item.link}>{item.name}</Link>
                        </li>
                      )
                    )}
                  </ul>
                </nav>
                <div
                  className={`burger-icon burger-icon-white ${toggle ? "burger-close" : ""}`}
                  onClick={() => setToggle(!toggle)}
                >
                  <span className="burger-icon-top"></span>
                  <span className="burger-icon-mid"></span>
                  <span className="burger-icon-bottom"></span>
                </div>
              </div>
              <div className="header-right">
                <div className="d-none d-sm-inline-block">
                  <Link className="btn btn-brand-1 hover-up" to="/contact">
                    Request Demo
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`mobile-header-active mobile-header-wrapper-style perfect-scrollbar ${
          toggle ? "sidebar-visible" : ""
        }`}
      >
        <div className="mobile-header-wrapper-inner ps ps--active-y">
          <div className="mobile-header-content-area">
            <div className="mobile-logo">
              <a className="d-flex" href="/">
                <img
                  src="logo_text_coral.svg"
                  sizes="(max-width: 479px) 100vw, 479px"
                  style={{ width: "100px" }}
                  alt="logo"
                />
              </a>
            </div>
            <div
              onClick={() => setToggle(!toggle)}
              className={`burger-icon ${toggle ? "burger-close" : ""}`}
            >
              <span className="burger-icon-top"></span>
              <span className="burger-icon-mid"></span>
              <span className="burger-icon-bottom"></span>
            </div>
            <div className="perfect-scroll">
              <div className="mobile-menu-wrap mobile-header-border">
                <div className="tab-content">
                  <div className="tab-pane fade active show" id="mobile-menu">
                    <nav className="mt-15">
                      <ul className="mobile-menu font-heading">
                        {menu.map((item, index) =>
                          item.hasChildren ? (
                            <li key={index} className="has-children">
                              <Link onClick={() => setToggle(!toggle)} to={item.link}>
                                {item.name}
                              </Link>
                              <ul className="sub-menu">
                                {item.children.map((child, index) => (
                                  <li key={index}>
                                    <Link onClick={() => setToggle(!toggle)} to={child.link}>
                                      {child.name}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </li>
                          ) : (
                            <li key={index}>
                              <Link onClick={() => setToggle(!toggle)} to={item.link}>
                                {item.name}
                              </Link>
                            </li>
                          )
                        )}
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
