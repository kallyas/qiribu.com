import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
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
          name: "About",
          link: "/about",
        },
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
  return (
    <div className="header sticky-bar">
      <div className="container">
        <div className="main-header">
          <div className="header-left">
            <div className="header-logo">
              <Link className="d-flex" to="/">
                <img
                  style={{ maxWidth: "50px" }}
                  src="logo_coral.png"
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
            </div>
            <div className="header-right">
              <div className="d-none d-sm-inline-block">
                <Link className="btn btn-brand-1 hover-up" to="/register">
                  Book a Demo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
