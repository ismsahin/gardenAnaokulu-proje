import Link from "next/link";
import { useState } from "react";
import {
  About,
  Blog,
  Classes,
  Contact,
  Event,
  Home,
  Pages,
  Program,
  Shop,
  Teacher,
} from "./Menus";

const MobileMenu = () => {
  const [toggle, setToggle] = useState(false);
  const [activeMenu, setActiveMenu] = useState("");
  const [subMenus, setSubMenus] = useState("");
  const activeMenuSet = (value) =>
      setActiveMenu(activeMenu === value ? "" : value),
    activeBtn = (value) => (value === activeMenu ? "active" : ""),
    activeLi = (value) =>
      value === activeMenu ? { display: "block" } : { display: "none" },
    setSub = (value, motherMenu) =>
      motherMenu === activeMenu && value == subMenus
        ? setSubMenus("")
        : setSubMenus(value),
    activeSub = (value) =>
      value === subMenus ? { display: "block" } : { display: "none" };
  return (
    <header id="header" className="d-block d-xl-none">
      <div id="site-header" className="">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="site-header-inner fx">
                <div id="site-logo" className="clearfix">
                  <Link href="/">
                    <a className="logo">
                      <img src="assets/images/logo/logodark.png" alt="Kinco" />
                    </a>
                  </Link>
                </div>
                <div
                  className="btn-menu"
                  style={{ display: "block" }}
                  onClick={() => setToggle(!toggle)}
                >
                  <span />
                </div>
                <div className="nav-wrap"></div>
                <div className="header-right fx">
                  <div className="header-contact fx">
                    <a href="#" className="menu-bar-right header-menu">
                      <svg
                        data-name="Hero Area"
                        xmlns="http://www.w3.org/2000/svg"
                        width={58}
                        height={58}
                        viewBox="0 0 58 58"
                      >
                        <defs>
                          <style
                            dangerouslySetInnerHTML={{
                              __html:
                                "\n                                                        .cls-1 {\n                                                        fill: #b250fe;\n                                                        }\n                                                \n                                                        .cls-1, .cls-2 {\n                                                        fill-rule: evenodd;\n                                                        }\n                                                \n                                                        .cls-2 {\n                                                        fill: #fff;\n                                                        }\n                                                    ",
                            }}
                          />
                        </defs>
                        <g id="Menu_Area2" data-name="Menu Area">
                          <g id="Menu_bar" data-name="Menu bar">
                            <path
                              id="Bg"
                              className="cls-1"
                              d="M7.853,2.283c14.9-3.89,29.969-1.4,43.467.819a7.923,7.923,0,0,1,5.735,5.422c3.111,14.141-.428,28.636-1.166,42.981a5.157,5.157,0,0,1-4.773,4.875c-13.49.568-23.463,3.285-41.787,0.9C5.948,56.807,2.348,54.2,1.9,51.7-0.683,37.877.2,23.508,2.194,8.757a8.71,8.71,0,0,1,5.66-6.473"
                            />
                            <path
                              id="Bar"
                              className="cls-2"
                              d="M16,17H42a2,2,0,0,1,0,4H16A2,2,0,0,1,16,17Zm0,10H42a2,2,0,0,1,0,4H16A2,2,0,0,1,16,27Zm0,10H42a2,2,0,0,1,0,4H16A2,2,0,0,1,16,37Z"
                            />
                          </g>
                        </g>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <nav
          id="mainnav-mobi"
          className="mainnav st-2"
          style={{ display: toggle ? "block" : "none" }}
        >
          <ul className="menu" id="mainnav">
            <li className="menu-item">
              <Home />
            </li>
            <li className="menu-item">
              <About />
            </li>
            <li className="menu-item-has-children">
              <a>Sayfalar</a>
              <span
                className={`btn-submenu ${activeBtn("PAGES")}`}
                onClick={() => activeMenuSet("PAGES")}
              />
              <ul className="sub-menu" style={activeLi("PAGES")}>
                <Pages />
              </ul>
            </li>

            <li className="inner">
              <Contact />
            </li>
          </ul>
          {/* /.menu */}
        </nav>
      </div>
      <div style={{ display: "none" }} />
    </header>
  );
};
export default MobileMenu;
