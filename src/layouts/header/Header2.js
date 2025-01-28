import Link from "next/link";
import { useEffect, useState } from "react";
import HeaderSearchForm from "../../components/HeaderSearchForm";
import Sidebar from "../../components/Sidebar";
import {
  About,
  Blog,
  Contact,
  Event,
  Home,
  Pages,
  Program,
  Shop,
  Teacher,
} from "./Menus";

const Header2 = () => {
  useEffect(() => {
    document.querySelector("body").className =
      "counter-scroll header-fixed home2";
  }, []);
  const [form, setForm] = useState(false);
  const [sidebarToggle, setSidebarToggle] = useState(false);

  return (
    <header id="header" className="d-none d-xl-block header_main header2">
      <div className="top-bar">
        <div className="inner jus-ct">
          <p className="clr-pri-1">
            Çalışma Saatleri : Pazartesi - Cuma, 07:00 - 18:00
          </p>
        </div>
      </div>
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
                <div className="btn-menu">
                  <span />
                </div>
                <div className="nav-wrap">
                  <nav id="mainnav" className="mainnav ">
                    <ul className="menu">
                      <li className="menu-item-has-children">
                        <a href="#">Anasayfa</a>
                        <ul className="sub-menu">
                          <Home />
                        </ul>
                      </li>
                      <li className="menu-item">
                        <About />
                      </li>
                      <li className="menu-item-has-children">
                        <a>Sayfalar</a>
                        <ul className="sub-menu">
                          <li className="inner-menu-item">
                            <a href="#">Öğretmenler</a>
                            <ul className="sub-menu">
                              <Teacher />
                            </ul>
                          </li>

                          <li className="inner-menu-item">
                            <a href="#">Events</a>
                            <ul className="sub-menu">
                              <Event />
                            </ul>
                          </li>
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
      </div>
      <div />
    </header>
  );
};
export default Header2;
