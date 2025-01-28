import Link from "next/link";
import { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";
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

const Header1 = () => {
  const [sidebarToggle, setSidebarToggle] = useState(false);
  useEffect(() => {
    document.querySelector("body").className =
      "counter-scroll header-fixed main";
  }, []);
  return (
    <header id="site-header" className="header_main d-none d-xl-block">
      
      <div className="container">
        <div className="row">
          <div className="col-xl-12 col-lg-12 col-md-6 col-sm-6 col-6">
            <div className="top-bar-2 fx">
              <div id="site-logo" className="clearfix">
                <Link href="/">
                  <a className="logo st-2">
                    <img src="assets/images/logo/logodark-2.png" alt="Kinco" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-12 col-lg-12 col-md-6 col-sm-6 col-6">
            <div className="site-header-inner st-2 fx">
              <div className="btn-menu">
                <span />
              </div>
              <div className="nav-wrap">
                <nav id="mainnav" className="mainnav st-2">
                  <ul className="menu">
                    <li className="inner">
                      <Home />
                    </li>
                    <li className="menu-item">
                      <About />
                    </li>
                    <li className="menu-item-has-children">
                      <a>Sayfalar</a>
                      <ul className="sub-menu">
                       
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
            </div>
          </div>
        </div>
      </div>
      <Sidebar show={sidebarToggle} close={() => setSidebarToggle(false)} />
    </header>
  );
};
export default Header1;
