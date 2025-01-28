import PageBanner from "../src/components/PageBanner";
import { RightArrow, RightArrowPink, RightArrowWhite } from "../src/Icons";
import Layout from "../src/layouts/Layout";

const Calendar = () => {
  return (
    <Layout bodyClass={"calendar"}>
      <PageBanner pageName={"Akademik Takvim"} />
      <section className="tf-section tf-calendar mb-5 ">
        <div className="container  mb-5">
          <div className="row">
            <div className="col-md-12">
              <div className="wrap-calendar jus-bet align-fl-end m-b50">
                <div className="calendar-text fx">
                  <span>
                    <i className="far fa-calendar-alt" />
                  </span>
                  <h2>2024-2025</h2>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-12">
              <div
                className="sc-calendar wow fadeIn animated"
                data-wow-delay="0.3ms"
                data-wow-duration="1000ms"
              >
                <h4>
                  <span>Ocak </span>
                  <RightArrowWhite />
                </h4>
                <ul>
                  <li>
                    <span>
                      <i className="far fa-calendar-alt" />
                    </span>
                    <span>3, Gün tatil var</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-12">
              <div
                className="sc-calendar bg2 wow fadeIn animated"
                data-wow-delay="0.3ms"
                data-wow-duration="1000ms"
              >
                <h4>
                  <span>Şubat</span>
                  <RightArrowWhite />
                </h4>
                <ul>
                  <li>
                    <span>
                      <i className="far fa-calendar-alt" />
                    </span>
                    <span>3 gün tatil var</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-12">
              <div
                className="sc-calendar bg3 st2 wow fadeIn animated"
                data-wow-delay="0.3ms"
                data-wow-duration="1000ms"
              >
                <h4>
                  <span>Mart</span>
                  <RightArrowPink />
                </h4>
                <ul>
                  <li>
                    <span>
                      <i className="far fa-calendar-alt" />
                    </span>
                    <span>Tatil Yok</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-12">
              <div
                className="sc-calendar bg3 st2 wow fadeIn animated"
                data-wow-delay="0.3ms"
                data-wow-duration="1000ms"
              >
                <h4>
                  <span>Nisan</span>
                  <RightArrowPink />
                </h4>
                <ul>
                  <li>
                    <span>
                      <i className="far fa-calendar-alt" />
                    </span>
                    <span>Tatil Yok</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-12">
              <div
                className="sc-calendar bg4 wow fadeIn animated"
                data-wow-delay="0.3ms"
                data-wow-duration="1000ms"
              >
                <h4>
                  <span>Mayıs</span>
                  <RightArrowWhite />
                </h4>
                <ul>
                  <li>
                    <span>
                      <i className="far fa-calendar-alt" />
                    </span>
                    <span>1, Gün tatil var</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-12">
              <div
                className="sc-calendar bg3 st2 wow fadeIn animated"
                data-wow-delay="0.3ms"
                data-wow-duration="1000ms"
              >
                <h4>
                  <span>Haziran</span>
                  <RightArrowPink />
                </h4>
                <ul>
                  <li>
                    <span>
                      <i className="far fa-calendar-alt" />
                    </span>
                    <span>Tatil Yok</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-12">
              <div
                className="sc-calendar bg3 st2 wow fadeIn animated"
                data-wow-delay="0.3ms"
                data-wow-duration="1000ms"
              >
                <h4>
                  <span>Temmuz</span>
                  <RightArrowPink />
                </h4>
                <ul>
                  <li>
                    <span>
                      <i className="far fa-calendar-alt" />
                    </span>
                    <span>Tatil Yok</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-12">
              <div
                className="sc-calendar bg4 wow fadeIn animated"
                data-wow-delay="0.3ms"
                data-wow-duration="1000ms"
              >
                <h4>
                  <span>Ağustos</span>
                  <RightArrowWhite />
                </h4>
                <ul>
                  <li>
                    <span>
                      <i className="far fa-calendar-alt" />
                    </span>
                    <span>1, Gün tatil var</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-12">
              <div
                className="sc-calendar bg3 st2 wow fadeIn animated"
                data-wow-delay="0.3ms"
                data-wow-duration="1000ms"
              >
                <h4>
                  <span>Eylül</span>
                  <RightArrowPink />
                </h4>
                <ul>
                  <li>
                    <span>
                      <i className="far fa-calendar-alt" />
                    </span>
                    <span>Tatil Yok</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-12">
              <div
                className="sc-calendar bg4 wow fadeIn animated"
                data-wow-delay="0.3ms"
                data-wow-duration="1000ms"
              >
                <h4>
                  <span>Ekim</span>
                  <RightArrowWhite />
                </h4>
                <ul>
                  <li>
                    <span>
                      <i className="far fa-calendar-alt" />
                    </span>
                    <span>2 Gün tatil var</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-12">
              <div
                className="sc-calendar bg3 st2 wow fadeIn animated"
                data-wow-delay="0.3ms"
                data-wow-duration="1000ms"
              >
                <h4>
                  <span>Kasım</span>
                  <RightArrowPink />
                </h4>
                <ul>
                  <li>
                    <span>
                      <i className="far fa-calendar-alt" />
                    </span>
                    <span>Tatil Yok</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-12">
              <div
                className="sc-calendar bg3 st2 wow fadeIn animated"
                data-wow-delay="0.3ms"
                data-wow-duration="1000ms"
              >
                <h4>
                  <span>Aralık</span>
                  <RightArrowPink />
                </h4>
                <ul>
                  <li>
                    <span>
                      <i className="far fa-calendar-alt" />
                    </span>
                    <span>Tatil Yok</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default Calendar;
