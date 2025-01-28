import Link from "next/link";
import { useEffect, useState } from "react";
import PageBanner from "../src/components/PageBanner";
import PagginationFuntion from "../src/components/PagginationFuntion";
import Layout from "../src/layouts/Layout";
import { getPagination, pagination } from "../src/utils";

const Events = () => {
  let sort = 3;
  const [active, setActive] = useState(1);
  const [state, setstate] = useState([]);
  useEffect(() => {
    pagination(".sc-event-box", sort, active);
    let list = document.querySelectorAll(".sc-event-box");
    setstate(getPagination(list.length, sort));
  }, [active]);
  return (
    <Layout bodyClass={"pricing"}>
      <PageBanner pageName={"Etkinlikler"} />
      <section className="tf-section tf-event">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="wrap-sc-event">
                <div
                  className="sc-event-box active fx wow fadeIn animated"
                  data-wow-delay="0.3ms"
                  data-wow-duration="1000ms"
                >
                  <div className="image">
                    <img src="assets/images/common/sc-about1.png" alt="" />
                  </div>
                  <div className="content">
                    <h3>
                      <Link href="/event-details">
                        <a>Anneler Günü</a>
                      </Link>
                    </h3>
                    <ul>
                      <li>
                        <span>
                          <i className="far fa-map-marker-alt" />
                          Yeşilköy mah. Bakırköy/İstanbul
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="far fa-calendar-alt" />
                          25 Şubat 2025
                        </span>
                        <span>
                          <i className="far fa-clock" />
                          Cuma, 11:00
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  className="sc-event-box fx wow fadeIn animated"
                  data-wow-delay="0.3ms"
                  data-wow-duration="1000ms"
                >
                  <div className="image">
                    <img src="assets/images/common/sc-about2.png" alt="" />
                  </div>
                  <div className="content">
                    <h3>
                      <Link href="/event-details">
                        <a>Eğlence Festivali</a>
                      </Link>
                    </h3>
                    <ul>
                      <li>
                        <span>
                          <i className="far fa-map-marker-alt" />
                          Yeşilköy mah. Bakırköy/İstanbul
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="far fa-calendar-alt" />
                          25 Mart 2025
                        </span>
                        <span>
                          <i className="far fa-clock" />
                          Cuma, 11:00
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  className="sc-event-box fx wow fadeIn animated"
                  data-wow-delay="0.3ms"
                  data-wow-duration="1000ms"
                >
                  <div className="image">
                    <img src="assets/images/common/sc-about3.jpeg" alt="" />
                  </div>
                  <div className="content">
                    <h3>
                      <Link href="/event-details">
                        <a>Gezi Partisi</a>
                      </Link>
                    </h3>
                    <ul>
                      <li>
                        <span>
                          <i className="far fa-map-marker-alt" />
                          Yeşilköy mah. Bakırköy/İstanbul
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="far fa-calendar-alt" />
                          25 Nisan 2025
                        </span>
                        <span>
                          <i className="far fa-clock" />
                          Cuma, 11:00
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div
                className="themesflat-pagination style m-t30 fx fx-style2"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
              >
                <PagginationFuntion
                  setActive={setActive}
                  active={active}
                  state={state}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default Events;
