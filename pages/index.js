import Link from "next/link";
import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import LatestProgramSlider from "../src/components/LatestProgramSlider";
import PhotoGallerySlider from "../src/components/PhotoGallerySlider";
import TestimonialSlider from "../src/components/TestimonialSlider";
import TfCounter from "../src/components/TfCounter";
import {
  LeftArrow,
  LeftArrowWhite,
  RightArrow,
  RightArrowWhite,
} from "../src/Icons";
import Footer2 from "../src/layouts/Footer2";
import Header1 from "../src/layouts/header/Header1";
import Layout from "../src/layouts/Layout";
import { fourSlider, heroSlider } from "../src/SliderProps";
import { activeNavMenu } from "../src/utils";

const Index = () => {
  useEffect(() => {
    activeNavMenu();
  }, []);

  return (
    <Layout noFooter noHeader bodyClass={"main"}>
      <Header1 />
      <section className="tf-slider-1">
        <div className="overlay" />
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="slider-1">
                <div className="themesflat-carousel clearfix">
                  <Swiper
                    {...heroSlider}
                    className="owl-carousel owl-theme none dots-none"
                  >
                    <SwiperSlide className="owl-item">
                      <div className="item-slider-1">
                        <div className="box-content">
                          <div className="sub clr-pri-2">
                            Çocuklar için buradayız
                          </div>
                          <div className="title clr-pri-2">Bizimle Keşfet</div>
                          <div className="box-custom">
                            <div className="wrap clr-pri-1">
                              Garden Anaokulu
                            </div>
                            <svg
                              data-name="Hero Area"
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              width={112}
                              height={71}
                              viewBox="0 0 112 71"
                            >
                              <g>
                                <image
                                  width={112}
                                  height={71}
                                  xlinkHref="data:img/png;base64,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"
                                />
                              </g>
                            </svg>
                          </div>
                          <ul>
                            <li className="st-1 fx">
                              <i className="fas fa-check" />
                              <p className="clr-pri-2">Bahçe Oyunları</p>
                            </li>
                            <li className="st-2 fx">
                              <i className="fas fa-check" />
                              <p className="clr-pri-2">Spor Aktiviteleri</p>
                            </li>
                            <li className="st-3 fx">
                              <i className="fas fa-check" />
                              <p className="clr-pri-2">Besleyici Yemekler</p>
                            </li>
                          </ul>
                          <div className="box-btn">
                            <Link href="/contact">
                              <a className="fl-btn st-12">
                                <span className="inner">
                                  Bizimle iletişime geç
                                </span>
                              </a>
                            </Link>
                          </div>
                        </div>
                        <div className="box-feature">
                          <div className="image">
                            <img
                              src="assets/images/common/slider-1.jpg"
                              alt="Image"
                            />
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="owl-item">
                      <div className="item-slider-1">
                        <div className="box-content">
                          <div className="sub clr-pri-2">
                            Çocuklar için buradayız
                          </div>
                          <div className="title clr-pri-2">Bizimle Keşfet</div>
                          <div className="box-custom">
                            <div className="wrap clr-pri-1">
                              Garden Anaokulu
                            </div>
                            <svg
                              data-name="Hero Area"
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              width={112}
                              height={71}
                              viewBox="0 0 112 71"
                            >
                              <g>
                                <image
                                  width={112}
                                  height={71}
                                  xlinkHref="data:img/png;base64,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"
                                />
                              </g>
                            </svg>
                          </div>
                          <ul>
                            <li className="st-1 fx">
                              <i className="fas fa-check" />
                              <p className="clr-pri-2">Bahçe Oyunları</p>
                            </li>
                            <li className="st-2 fx">
                              <i className="fas fa-check" />
                              <p className="clr-pri-2">Spor Aktiviteleri</p>
                            </li>
                            <li className="st-3 fx">
                              <i className="fas fa-check" />
                              <p className="clr-pri-2">Besleyici Yemekler</p>
                            </li>
                          </ul>
                          <div className="box-btn">
                            <Link href="/contact" passHref>
                              <a className="fl-btn st-12">
                                <span className="inner">
                                  Bizimle iletişime geç
                                </span>
                              </a>
                            </Link>
                          </div>
                        </div>
                        <div className="box-feature">
                          <div className="image">
                            <img
                              src="assets/images/common/slider-1.jpg"
                              alt="Image"
                            />
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
                {/*/.themesflat-carousel*/}
              </div>
              {/*/.slider-2*/}
            </div>
          </div>
        </div>
      </section>
      <section className="tf-section tf-discovery-2">
        <div className="container">
          <div className="row jus-c-center">
            <div className="col-12">
              <div className="title-heading st-2">
                <div className="sub-heading clr-pri-1 f-mulish">
                  <LeftArrowWhite />
                  <span className="inner-sub st-1">Neden Biz</span>
                  <RightArrowWhite />
                </div>
                <h2 className="title clr-pri-1">
                  Şimdi Garden Anaokulunu Keşfedin
                </h2>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-5 col-sm-5">
              <div
                className="sc-discovery-2 wow fadeInUp animated"
                data-wow-delay="0.3ms"
                data-wow-duration="800ms"
              >
                <div className="box-feature">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width={120}
                    height={100}
                    viewBox="0 0 120 100"
                  >
                    <g data-name={1}>
                      <image
                        width={120}
                        height={100}
                        xlinkHref="data:img/png;base64,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"
                      />
                    </g>
                  </svg>
                </div>
                <div className="box-content">
                  <h4 className="title">
                    <Link href="/about">
                      <a>Eğitimde Yenilik</a>
                    </Link>
                  </h4>
                  <p className="wrap f-mulish">
                    Modern eğitim yöntemleriyle donatılmış sınıflarımızda,
                    çocukların gelişim düzeylerine uygun, eğlenceli ve öğretici
                    etkinlikler düzenliyoruz.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-lg-3 col-md-5 col-sm-5">
              <div
                className="sc-discovery-2 wow fadeInUp animated"
                data-wow-delay="0.3ms"
                data-wow-duration="1200ms"
              >
                <div className="box-feature">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width={128}
                    height={106}
                    viewBox="0 0 128 106"
                  >
                    <g data-name={3}>
                      <image
                        width={128}
                        height={106}
                        xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAABqCAYAAAB04VkvAAAgAElEQVR4nOV9CXxU1b3/99xl9kkyWSGBsAQBQZBFQBCLolCs1lKf9V/bakuXp63a2r7XVtQur2Lxte+1Pn3avlaL2GqttZZHq7ZScEGRRUAUMAhhyUoymUlmvXPX8/+cOzMhk5kkk8lMIL7v5zOEucuZc+/5nd/57Yfg/xD8D827mYiWbxNRnEZ4XjRi0vmer+6q/7/0DvpCOLe6Uxj4H5r3NRCylqrKOPYDnM0GIyatSw6+/7/m1oLjLiGEmwuOjAdIJQjxAGATRAWlbaDGHz237fndh+3dfKg5gP/BOTOJaPmTEYtOMyTJPEZEUeds9teoonSD46aD4yaCUgcMA9QwAEoBasRfDSEgHMfuAV9UDEORn/HcuvPGs/5gecSHlgP4H57/I0K472iBLisb3CSoqvK6qi7Pth3K/pFjIBYLwHH2wvX47OBDRwC+n84UOIfjFaqqS3UlCsLz8ZndB2xG66FgfMb3gXmPrve5ge8ApTeP9PMUGtyH6WE6fzLDzTmdR4xodKkeDoGz2tiMz3itEQlnHHze5QbncKYc42z241RVv0tVdar/4fkVBXuAs4APjQxgDr7dvt+IhOuopuXeEMcBGTgGEpyBCCIgCBrheQkcFyK8oIDAB8Ooh0G3gCN/9nxtdzD3DowsRj0BdL70TQ9ioQg5uXubEY1ekmlWFxpEEECsNsYpwFmtoJrWSTVtMyi9zXPb7tiId2gIGLUyQOdL3ywC8EcAK2GxSwax2kEjI/LbhOPBORwwpKgpKzCOQ7VwfFnhOPDuonLeXfRFqihXApgwIp3KEaNZBviuOfgMnGAn42flr2VPNcjMy0FmrQCKKtPP83zP4PcG0xQ40QI90A09GGDfa7t+ufiy/HUs/xjNBLAs5ZvNDfDi8FsdMwVk8kXx9ix2kEnzAD6VUVJVSdcSGAEQDoYc5/hJuwOosWD4nSocRjMBuHr+F+wAPbQN0DNL/EMB8VSnXi1YgJKxWbWQHHwGqiX6QkjzsDtVQIxeApCjDmamoc2HQY/uBJRoXpqlx/cCRqoWQayOHBqKC6NEELfkpWMFwqgkAO+6uvMRaJ9MGw8C7cfSL3CUAByfW+NyBLTx3ZRDjOUPGRzHbBD+ki9v78ytIyOD0coB7qftx3h4T6SfKa0Bmb40o5Ena/iagUDHmauDHQPeSUQLk/xTjwkC0w425d6JkcGoIwDvujqmVn0CipR+srgKZOJcpqclHDpnwJd4znyxudLv7QPaeCBuEPI3m1xhkKvjZuVeIILoo5r2UNcjCx7senThlFyedSQwGu0A12ck3KTETvqcYpqBroIyqTxh5SPV04BYBLTtg/h5tuYbfaR6RQJtfR/obBy0QxnNzbrhBa/vIg6XlapaDYBPDf1RC4/RSAAfy3TQtAP0VgOTXMBRDIQ6UyR0CFZgbA1I+YQ4cXSeAtob0hvNdCxLGLI0HbJk2gwIL3QN+6kLhFG1BHjX1bH+Lkw74fQAJWNSj4lW8w8ZMyV+PgnG/l1lZ66xuUCq6kzffyFg+g4IztlAktEmA9Sl6P8JkMpJ6VeyQS4dZ1ryyIQL49yBF+NGnr6DLdoAd3neOsk8imb8QNyBFPDcuvP1vDWeZ4y2JWBy2hGm7pVUpx02Bz2pCtqLQC64Ij7w/VgLSek40KA3868SYjp6mPk3G+jRSFzWsFhBde3vw3ngQmO0EUBt2pGiirhw1xd97QCCZeCWM9n8E2CDT/UhuJgT7mTOZosQwt2Z/Y0jj9G2BJT0PUCS6/lwweQBS+aIL9PxowzdGER4/rWSW3a05aeDhcFoIwBn+pE4TRxr6sIPfpF5qW3pCGXXehb2gWxBBIEZD37tf/iiX3Y9umhz16MLs3MojDBGf0gY89oB2Lr7JDr86QabV98+hbv/+9Xs2hpsmRgCKKW6Hgz+UQ903WJI0Y+DcA/mrfE8YnQHhTJdPzFoNguPFYvTZcS975/GuEr3yPdN14uSxmjKjEwE+aOuPGJ0E0CvGfv5j8/OeMmiWdUYV1mU8VwatBycPlmAs1gZS9hakMaHidFGAKk8Xhg8AGTpnPHZty5lKStkAiGm/t/XJ8BAbDaJCOJvcm+8cBhtMkB3yre+dv/hINoNqLnHb/LuYhjRdBmEeQUBHCj50uv5CVjIM0YbB+hSdQqBI3DM/zwsdcugKX5IbbtAdbnfmzjRBcE5BkSwwlAiUEONad5C6j05rI7pwe6MxzmHQ4dh3DWsxguI0UYALS0BDV6Jw9jK06jx+FE2eT4snmlo2/cUujs6MKbaFTf42TywlM2ExTPV/H9v6FEvAu8/BdCEB5DN/s6mvHWS5Q+w5BK2HBDRctDz1V2v5a3xPGO0EUDjxFIR0y+7B75gDEdfexIN25/GojU/x7YtjfC1tWHSlCpc9aV/hqWkrt9GeEcFBFctAs3vgKMabE37k1mAeQFLRTMzk2w2Zj5cO0LvJieMNgJgVjXNNvYCoXZaNWoXXNtzgk94/04ca0cgLKKij80w0FKPkzv/hIivGRFfEwwtBquVR7mgYKwzcyZQzkjGA1osWzxf3fVSgd5FXjCqCODNExK9YKy1PfjOP2qC3iZ0t9RjymU3o2b2Cly08mN48fFfmKlOvJD+WILVicppi+EorYGzbDy0lrcQ2bqu3zSwvuCcLjNohJmEM4WE9wXzAhJB/G4eH78gGG0cYMopvypWnD6C8umXYcqym+HwVJuGlqnzF6KsnKVnVcJTlRob0HZwW5xYPnITRHvcKKQG2rIefCSSSZmLl2YbayiKGitKEXji8s8Wf+GVkc9XyxKjSg1c/Xjr0dnV1g2TxnjMWR/ubMQrD96I5v1xLuu0qXA7z8xOSg3I4S6UT1kIQ1Pxys8/jRM7noWha9C8Q68MYzqEsiQaAlLG2R03GlL0jqH+zkhiNFoCD/vfexEHDtdD1w3Muf5elE6IWwEV3/uIte+Fe+r14G2lkEM+vP7fX8CMq+7AzKu/gUlLbsD7f3sUx994GuMt3SgrYLkHYrUm/3sW7NDZYzQ6g9455o2i3GjH4k+vjQ8+NRBtehVatB2GEkLw8O9M24DVWYSlt/4KDdufwrub/h22onLMu+7bmDbWhdOBGMJKnoW/JFiCKJMZqGEQnv9FYX4kPxh16eHedXWszyxQv5xZAvmSWtMIRKfMT7cMEh5i8UTwogf1W59B0NuI6RU8RDWQ1z5xTidg0J6IIcFTagqNhiQ96fnqzs/n9cdyxI4djQupQT8LoIIQsg+gv1hyyYTIqKwP4F1X9ySAm1IOlo2P5wT0haGBHn7NjO3vCOuIqQZqPXlIIu0FFviZzAVkaeNCaTmTF5qIxTLhbAuAu/c0l1IDT1GdrkLcTW0eJzw5ahh0To75U2cX31leysKsv5DSCSkIqBIIC+1KBn3qGujxPXFLHxMSLRyK7QV45IRgyLQEsayCZQQFqKZOL/nKmxmyV0YOu/c0TzU0+hYMzNM0A7KsQVV0aKrBCKGM44g6Wt3BzLS6i3l7U452NsYDO1mIOKP07tPDcvAMBayUnFheyQa/iyrKDM9tu89qLgAbfKrR1ymlVUpMNwXm3mBEoKnG0lFbIsa7rm4pgNcLLceYBiBiqnU90b59wXIDxQo2+OopqusXer66K79CxhCx5+0Wj64Z+6hOJ8oxDYbR7yrUMKprBHnX1f0EwLcL/Ttm2TjGUTIMPqs6ytZ8Q5H/ytns1w605vsfmmcjovh3YrFeAl0PGXLsS6V37H0+3/3dtavpFUOjl8ViGmj/g89wcrQTAJPm/gzg6rPx+4w78O4ihcryLZ7bdj8x0LX+h+aVcjb7ERBSzhxFLE6As1o7DVn+OIBxpXfsfS4ffdq9u/leXTXuy2LwGd4+KwSwZvVaYnfZqzVFK1MVleluzHznY1bbDZvWD0lq9q6rY9Ubnh1RImDRP8UlOhHEPTD0azxf2+0b6HL/Q/M4zmpropparXV3nXEWWa0xQjgbUyOprn+z9Pa3hxU4untP83xDNd6KSZo4ANvvjWdHTAhc/4PHJykx9TZZUlaGA+E6OSY7NDUt2SKyZvXagwBYhQYWQ/ePDZvWD/hyK+5tiHrX1X2C1QxILAcFNW6x5YB3Fx8Cwbc8t771clb3COKLhhyrZvEBQokHWqDbXE6oLNtown3MO50Th9OvbVsaCNXpE7KsZzv4DHsKzgHWf/+xGikiPyqFY1fHojE+GonCyN4Jwy58AzCTK5/dsGl9j3C1bUsDywi5JJEr8PryFXUt3nV17Pt/AZhfiGfRZEhtJZc/tEe5cS8InIQQKzVoESEko25JQemF1hemTRVe/4Ie6CKEFZsiQN9ClnxxSRconVr69X05VxPZvbv5B3JU+6GqDu6p7IUFBSWA++/51VWhrujvFVUtDnUHkWHGDwVMp37yimtX7Zt43oQbCSHLCAjRNFOvZU/9ewB3zdq1stUsIAF8HcDlw34InYJGdRiReN9PVa3CQdtN8fCRQSYaM0estKyDLXTC5BwsXY2VmzHrDLpcZik5yVqtH7Ld3NxJZpwAwXEC1OuGcSgWUfbectcV7dl0cffu5rGKrNcrMS3L8GcTzDhSXjACuP+eX80O+CM7qWHYu/3dwx18lFdVYOGyJaiprQbHpXZbTxg5ALCw3juWr6jbiLh8wHIJP0E54WpCyEezqiLGBsnqBOwuUN4GeuAwiEhAnAIIMyIRgi3qv6CTZshI7oOZlYcxm8mo3a3mgLMiFSyWgAmPMYngA/0yfEBWgnJW85k4nuv5S1ipeoJOwpF6wuEdwzD+3t0R2fL1H61KC358a0fjU7Go+pkhVsV5bPmKuq8UjADu/ebDL8pR5So2Q7t9udtEBFHEvMULMG3WDNgdovliMoEZOpjOm8CvAdy+fEWdGejf8MyXv+uiwQfMKiBqDERPVAShFC3NEZRVOWF12uKFI0w2TUB4CwiLMjp1GAilTsROOtkkgoEwd8IRnF99Em0dDkinTkJEFAZEhGg5vLQO7cY0GAM4Y5OEwAvsw0MQedYthfDkPY4jL6uK9j9r7lx2aseOxgsUSXvHMOhQTZyXL19R92rBhEBV1sx1mMuUuZsFOMJh3MRJWHTZYtgcNvMGNstFkTdfTl9C4HkOooU3TZ0AvsJqCWzb0nDd8hV1geJi91WgLjMINF46niYkcYpHH3se5aVufP2WFRBFIe5Q6p1ZXDURtA8BlJPjqOSOosM4L+ODXFh71Bz89mApXjs+Hwa9dMjPzwQ5w2DLm25uWhJ/l8QiiPx8wSLMF0T+ricffuO99uM+4i538YxYhoATCSNaQeMBjESnYbFaoMiDZ91YLFZUVtSgtKwcxSWlEAQeXS0BCNYILDYLrE4LrHYLCGea5kziEkXOHHyYQTg8DJ0mzZ5sU4iX6/++4TMw3r3UXJCJkOYwdNotCAQjeK++DfPmpKeWmWnjLAOpT9bQognbUK8DRxtTiWBSRStm1hxHUHJi+5G5MGj+lBJGFIqsmZ+4csHPViQVIX8EzmI7iirdJrfIAj9fvqLOfEkFIwDRKhyQo4oZm2V3OvolADaTy8vGoLq6Fp6y8h4/DntYNpCGbsTX+IiCkC9+vc1lhb3IBrvbZp5nBGCx8uY5xgV0qUfLWNjBXbSl1KjnOGT+/crKYnR5/Wg43g8BsA6x6iFdrSmH3UYTVl70PC6eUYaXdv4TOrs9KHGEsGjyISiagNfq55l/CwnGHdhHiiiIhmWEuiIorixCUbl7oIo3bD3ekPxSMG/giuWrvbKkfA4J9sxkAb1XMCVj8dU1EzFjxhzUjKuFze6AqmiIRRVIYRmypECJqZDZR1LNgeaEuHCkKRqkUAyRrigMzQAv8tDNvX7i48UIJgkDoidKKlFCj4L0FdsNHWNjJ7FqKkGFJQbn+CmZs42Ygynax7wfjoGbWAGnLYyZE/fB4FyYWdkIm0XB9g/mwBdOK2VQUJiTRFLN96JICmwumyk/ZMD32dqfPFwwAnhl+18brlx27aWaqpvTSrSIkGOyaVOvqhqHC2bPx5gx1RB4wex4NBxjcoM50JnAuAEjCPagSQGJtcVYYKQrAl3RwVmEjPUhFVIMHXYU0dTsH3rqANxK3M7kZLWcmADYt+AEm/msnFyGhv/jLxeherwN5SVBlFokCFTE4ZbJONo+hHzEPIO9PykiIxqMwe60Mk7c+wfY2n/zxt8+1DMTCxoPsHL56i2qqn+WGtTFZq7TVYRpUy/E+NqJEHjRnOWMdWlMcMtShWEPyNZAxvrYjl7J9Z8Rj8kRdAMWuxiXE3pBIpWw0ADsSBoWKcDqAvf+YTkCwkrOhLygrD5g80GApYz1o1/9rWUWXtvrwfgqG9y8B4IlgobgFPi781doIlcwLhnyReAosieJgD3Ep5avqDvau8mCWwJ//L1fLwj4wltLS8a4qyprzJLqbCbHJCUbZ8WgYOqRzWEx/ybBuENxpRvOktQizxxUTNV/DwsNmnGEdP+LaTmC2eJ4qAK/PHI5GP1983oZlR4DJZXvI6bZ8MfttyEcLFC84RAhWHjUzanF7u1vbDl+5Bjr1GZmA9iwab2CkQgKramc3nr+1HlNY8eMNyX0UHfUZFH5GHwkBKFwQEIkGOtZ+xkX6GoLwNvog97LNMr08BYusX8D4dBFc5upqsFjc1M8/OzSWRqqPBT/2MeB4xU4rEHMmPhumrHqbCEWlbD56efajh85tgLARwE8AmDfmtVrp6HQBPDbR968hIAcIISfEYso5kD1t8YPF0yA7CGuBG0xzaH9RCek4JmooBCpRYhMQP0HLdj4agciSi9CZEWiBisTo1P84eRCtEZLUOykWHmRhpZODv9424ruUPze2vLDEC1nP9gqKoVQf3QfjUbDfesTzWQ+ljWr155XMAJ46pc7PmvodKuh07JIUDJZ/kiACZRMHUoYhEyC87V0mRwhGRB5Up6NP/zxDXRFdfzqTQmSvQy0rAaYsgioWxAvHJkGDjSkwQiqCCjxhIKPLdLAbEcv7GQGJAq7NW6JdNt9psZyNhEI+nC04R2oqtwfKyp3uBy/KQiZ/vaRN7+qy8bDhmHwjDUXatb3B2ZDYERnsYmwOy2m6hjpjkKVVZSPKwHnmABnWS2C3pMYW1sDx4xLUluauRxG58m46kcSnEHSgFgDOLcFxX4J4ysNzDtPR0Mrh6MtHGZP7YbVcm6s+97OFjS3ZthHoRdcbhdsDvsleSeAf7/76Ye6/f7bnY4iEgnF8rbW5wImbDJp2O6ymQYipjK2n/SjdKwTS1Zdibf+dyNWXjEnvWVeAFfVp8J7oB20O65GukQZly6Oz/bt7wnmwN+w8lTPpUGp/GzsXmdyuNa24+jo7H+XGmY9dRW5TOusxS7uzysBPHD3Uz/w+U/fcVptRjQYRUlJBSrLx0EUrVncXRgkuYHVJsLmtJpCoa85hOmTavDDdVOhSlHIESfoYCbbXrLB5BoOE8cYiMQIGtqA2z99BGPKz0SAN3XOGHGux+ALNEHnJBSXlkDXdDPuguVHMgWQDTwvCrBYmIrMRexO65/tLuvX8yaq/vs9v7/V72t/VNUUEvAHeoI+GPv1lFRiTGUtrLnsvZNHMPXQ7rKaPgOBU7H0/D+gpuwIqMFDjpZBjpbD0PsRAtlWMge3mpqzNHUFHG4b3m+kqJ14FOOqzpT/kRQ3/nf3nfB3qiPO/QxDQ0uHD+FoFLwQabBZ6duUwkoIUQhBiOO54xxH9vE8v3Xdg183PUx5IYCf3PvMQp+/4y1NkTnm+88U8cMIoax0DMZWTYKQRXWvQuKMbABcUPs6Zk/YCkLig6UpLihSCVS5GIbeq58syeSdF80taWjtHLSHJUw77wR4vpeaSXlse+/zONlSYxq5RhqnfRF0djNOZERjQtPUJzfe0zJYF4ZNAA/+25+LvZ2tbTFZsgf83SbrGQg8L2Bc9RSUeqpG/AX1BtPT2ZJgsQoodzfj4mnPo9iRWi3c0NmSYTMJgS0RxH8CcBXB6jFMqb83FM2O7YdvwMmW2hHTeHqj1RuGP6HuaoJv3W82fuN72dw3bFPw4nkrDkmxSGUwy5AvtiYFgp2IxSIocpfmHC8wXDAhjdkOmCFJ1j043r4Amm5FqasNAh/3vxNOBy/IECxR08wrFFsg2GnKtGGEcbLjQmw78P/Q0lZitjnSaOkIoyuU2LCSxI680/76DW0NB7Naf4ZFAOvX/u4/A0Hf1eFQGEpsaFQfk6PoDnjhdnkg5LFG72DgiIHqiiaT+SmqNe5jZ9qCDvijE3Hs9MWQlCLYxAgc1syFIzVDRGewFvUti7D94DU42HA+wmGSffWQPMGgFE3tIQTCySgxqipC+8dfev7BrDerzHkJ+On3/jCz03f6PSkSIaFA7hU2eZ7H5AkXwOUqvPt0cvUHuPTCrXDZgzjWMh1/3/WJtGuYBY/JCKaPwRIxlwWrEJfwZc2OSMyF7mAxFFmHyjjeWdJyNd1AY1sIUflMnKMu+H7y+MZvDKku0aBq4I5WlVW4+Hhir94piTDsYPOBI0vIIYEc2X0gx0dIdFrX0XDyPUyeOAvuIRKBRWROmNNo7hh4g26bJYbL5v4NdTVHeo5FY+mV55EwKbOPaTwSOHQLY83/s9nNfA3xEK3+i1KOBGRVx6m2IJTefg4S2dMWOTHkknT9coDEwLMKl3cMVOYkFo7gwJY38f7ru0xLW65gssDUurmw27Nz0JQWdeKaJc+B5zRsePH2fq+r8rRh1cWbzFnfG8+9ehPa/elbzZzrCEUUk+0bvZYbCs0f4RovfPq33x/yPsUZZYAdreqCRGYOK8Q3oBVHsFhw3qzJuPKahTh1tAWBzswlUwcDm2HBkN/UDrhBtn31uH24btnTZjSObgjY/8GijNddMGk/Vi3aBKslNUW8tXM83q5fklM/zya8XVG0eMN9Vh2qqkL7Db998u59uXQtTQTf0apekci/HzzwPdkIAVwOEbfccxOmzT8/51ekqDIam48MeI3DFsa1S5+FzRJfl8NSOnNigt6yOS9j2dyXwXHpNokd7w0/X2QkoRvUZPnt/vR60yrv/f4TG7+TczHKFAJIzPy/sDjOoTSScLyZwRGf/+anUFM3LufXw7xY/q7MCTECr+Hqxc+nsPO+bJyt99cu/QMumLw/Yxvvn5yN9q5zcveWjIjGNHM7nFA0XcvSuK6NG5781gPDab+HAHa0qiyt6LmhDj7MAAnC3OQmGBF8ce1NZgxgrmg9fSKjNfGK+S+g0pO6B9PpXgTA5IJPXb4RNRWZt3uNKTa8dWhZxnOlRV4snb0VNyx/Ah+Zc27s+M5Y/omWbqha+rvQudDLp6WGLw73N3prAeszbss2CKw8hawTSBqBS4xTAVsOPnnrP+HZh57JqVOqKqPT32o6kpKYN20npoxLL+542ldj/p1SU4/l81+CKPRvj3j9wApIcqo/osgZwOKZr6a0bRmgjXyByTxd3R2w252w99msikn3ze3hFBWvNygX3XNa+uATLz734LA9TiYB7GhVWXbDLUO9uchioNJhoCvGpRAAw9xFU/FyuQfdnbmlhTGfdpIAxlWcwsUzMu8IxtZ4NmNnTR5YBmpomYajTTN6vjNr38Lz38TsKW+D51LN100dw8rUHhCqqsDfdRqd/jYoSiyeF1E6FmPHTDLN5L5ADO3+SL9lXTRE3u6Qjix/4bmf56X4UZID/EsuVsFk2JvHZqAvl2LnPvq5VfjDg7/PqWPs5YTC3RhbwWPlws09zpq+uPHKxwdtKxpz4dX9H+35Xl3ehOXzXkKxK504KSU40HBRxnaYIWnOeXtM7eOpl7+SddYPS/HqDnSaMz4U7kqxGLL/e32t8Hd7YbGPhUb7Lyyqk8j+jtiRy//63M/CWf1wFhB2tKpszb8xl5vDKodye3zkM0VAzZzbf83+bMB8Bjd/bDfs1uHttrJlzzWIKXZTiFwy65UBucWhk3PQHSpNOVbi9uPyuS+hujyuZjNZgg5iRGUDGwr54e/uMJ9jsJoIuq5CCjeC8E7w1moQkmoe10n4jS7t5Kq/Pvez9H1phgHGAa5k3DyXJtisZ6zfLmSenVaRQ93s89Dw7tGM5weDKreYs3U42HfkYjR7J6Cs2IuVCzabgmJ/YGbenQfPCImM68yu24uLZ75mEk8Se48sNjlFJoQjAXOmMz+Hpg3dMEb1CLRoA3hLJTix1LTVaSTwgoSOTz7/zAO5W9r6ASOAy4ZyA0/i6VdJlp9BQE3BnI/MzZkAAmHmNOJhsw6p6kUPWjvHYdfhSzGrbh8umbUtba3vi217r4Ksxu1eLnsIKxZs7pn1SbT5xuHdY6lLBBv07m4vuoNec40fPgzoymkYWgDU5nj6yf2PfU4/XF8QrwMjgMwLXj8ot+twihTNYR4GJXD0EvzCKjGXAht/5tjY8f1vyjwY2FLZ3O7AlNqhO5uishOv7l9lyg+9fQD94Z2jC9DYHk8OnVB1HFcu+GuPsSkJpkG8vPtac+3P/6CngxoSi+1effPUT96CqfifoRbQygZCwsGTNRgHYAJerTt9NnmjPHiOppwrKR1empQvYMUUDI0AGHveW78YVy95DsXOwU3T3u4x2HlomcnymbbBVM70NoFntqzAByfa0R08WLBBzwCmt7KK41evWb32Sxs2re/IZ+NCtVMfG9MJumQuq0jWgeoQMGOQrhNWOLtHQxDF4cWcsP1/hoqO7jFYfMFrPYEdA4EJhy/t/KRpP/joov81Vc4k2Ps41ujGnkNl2PVeFSJSViV7CoVrABxcs3rt5zZsWp9VdbJsIDhEShgbZwadtkjmwTqx/xDqt+/B0utXwjrjDEtvCfNwCNRUA3uDEZQjIRjyw4z4YTLAUFHlyW7HdsYp/rZrNWyWKD75kT/D7QjGB72pCHsOlmLv+2UIhM5u/GIfVLCc1DWr164D8G8bNq3PTTjqBS456dm67rbEvwG3rrcAAAfvSURBVLE1fGKRhmJrfGAPbt2BQJsXr2w8U9VUSVj/Akp8gHtzD1k7IyGfs5vlsE2o3ltu6vT/tOwp2Cxh/OnV2bh/40o8/sJHsPfYdESkAm4pkjvYy2Xxfi+uWb3WM9zGOFaKJvmFCXgiR+GyUFOYq7AbKLUZoKoMFvXT3tSBSDCuk8sJ2mNaQFQliPQadMYBkuhbpXrIHezHADRcHDoxBw5bBCsW/AU8z1K8DFwwuQ2aEe87qxdUXFYCp9vVb2Gqs4yVrCzwmtVrc3e/xgmA9EgzTMCrcek97JuBEcCUGQnTKCFoVyzoiHLwSmdYc2uEx+leywfjDMkWurrDOOVvgS/SDTmH3bmt1vwnWDD/gcsRxLypqcLetFovbrtuO6pK40InG3a7wwZPeSms9rOX3DIAmAn/rTWr134k2xs6olJKKBSnGUiRbNjMt/Cps27Fpy7D1EUXYsHHr4Ah2BBUOAyU88DOMYLwxzj8fctOxLQYOiM+nPQ3ocHXiPZQJ8JyBHoWuflFzvzaPpjQx2Y+U/UyoaIkituuewPzp5/xKLIQcneR28y4YWXrzjEUM2PnmtVrP5Vlt1JszaShO/ZHt4VeP9hdJ4PCoEafTPjNA/+Jw2/3Z3olsAlWOCw22MX4h+8TDXT3lw9i8ri8mb5Nwa8/v0JfHDg6Fpu2z4Ykpw66HGOVTSIpNY/OAbDRuXnDpvVPDdSVjqgkVjrsPbOKHOmSr/BYjX8M1v/GEG8KfkOBIsv4wZpboSrZs36RE2ETrbAK7GPBY/cehCvfW7v2B3NPAI0JLjCriuoqukIO/GnXJTjWlh5EIkUlRMPREQ8HHwDsRd20YdP6p7O9wRzR5lAsbOFpWphsb32+KcSbfv+h4J03d+J3P38456cpKlLwwj3H47ZnxhmSRRy5eMlW83vvv9mALTvMMUMTH/Z/VjU0+ekHu46eh7/tvwiSkuqkYcGZUjhqEsM5Aja7r9qwaf3WbLpjuoNjOvmdhacp8QAhhZiCXoWpGQCKMXRJePsLw9s3eV51wgvIZpieRcZNkgjMUm+JWZms6jzMWbrovKOYXtOMzXsuxqGmM3EzHCt+5XayXHuwSuiyNDJ7FA0Atl49v2b12oUbNq0f1AZuKvGagTtVg6RIWyTBAdqjvGn3H+r7O/reIZz6YOAiBYNh6awhuoFpYqDN2dx7pueHRRc7JNy07BV8cfnLKC9KDTNn1crcRS54yj2w2s66xsC8u79fs3rtoClXJgFML7XGoir5Ye8T/bl4s4Gh69j8xO+G9QSiSHH5hfkT/vKJKWNP4/pL3gxNGX/6OOFIypRnmU7uYve5QAhzEwajAdFjpz3PY/1xRCXvJL8zmz+fo/2j9Xjj4yFvKPd8MQBLJgdhEc+NkiuIVwajH3jHdL56bPrTLx6ZMq1u9T+Kbrn3p3WllcV1Drf9GUJIyhrVmxBs9kw1h0YE/7pm9dqagX4oZYjr/bLNIdBGm0Ar2Pw/ERAG1Pf7AavVv+bem77ElbrGPtvua/6kbqhDJqWNd57A5LFnNwVLUqy0wVfZ1BZ0Px/WIuuuv/Uv/W5fc/+9v5oRiyoPxiLKlUB6tAiLCJKiMbNs2whrDfdt2LT++/2dTOtovV922Xj6bkQjkwLykB05zG15x5JqsUecvuG6b0+Nydrmzu62adkWZZw9PoxHbh9yllNe4A0XxZoDpe/7IvYnGwMnH/nKt3YNyRJ1/72/mhOLKg/EosqKTHVn2OCzkrlMaxislkKesG/DpvX9bqGTcWbuaDVnLEu4+zELjsmiH6yywp1LqsV+9c9PX/fdyyNS7HFf8PSkgYQy5jx84hvHMWnMyPjbo4rVaOoqa/dG3dskXf2PVWs2vZPFbYOCEYIsqffFIvJHKaUZzYeqokKSWI1kpWBcwV3sDj+08e5+I00HZM07WtXyxN47N/YTOHIYANsv79dLqsWskgJ/eteXr+/wyo/sO6FUSrH0h756ThfuurFwfveIajVOBzxeb6Rod1AmG0Ja0+YbbtlZsKm4/nu/HifHtLulSOwzhm4UZ7qG2RKUmIyYFBv21jpJsHpITAax2W1dDzxyZ2l/12W9Nu9oVZkwMdHctj2+x9/RJdViziP1m/WfKWnz2h9v8cZW1TdrjphMTcPP8985CWuehD/N4Gl7qCjiCxc1d8Xsb0uasXHVRb6t/JyR39H7vrt+ybaIu12WlJuVmDqrv+vMquiybO6vwDhELmA7rDhdzvjeCk7rlvt+dvvK/po5J/yc9//rjRYrb/vX2qrYFdNqgpPLXOGqElvUZrf0W+WyBywuMSzbtaDskMIxqz8g2ZsjqriPCNJfxpR2vXbBNdtHvmDPIPjx9x67UIkp35Ci8rWGZpT1dzXjDCzlXlNVkzNomtbvUsEGm+2q4nA4enYNIRwnlZS7F99935f7LeJwTm8d2/nmsqJ2X9UEWS2aYBGVIl3nLDyn64pmC4pitLWipOlURRHv5+e8MvKFefIAtoPqlJmTVimyepMsqVfomj5oBC3jEMwJFS9BR82Bj28uJaQMJsdzEbfH+Zl77//nzQO1N6r3Dv6w4cffe+wSTdGuVWR1mSJrF1LDGLoBgRDD5rBstbtst979oy9n9nn3vvz/+ks/V/GzHz9pkaLyfF3TF+u6MU9T9alUN8oNnZbqulGUtDWwIpC8wHsFkW8QLPwbokX4zd33faUhq+cC8P8BPrdiRYjAmRsAAAAASUVORK5CYII="
                      />
                    </g>
                  </svg>
                </div>
                <div className="box-content">
                  <h4 className="title">
                    <Link href="/about">
                      <a>Özgür Düşünce</a>
                    </Link>
                  </h4>
                  <p className="wrap f-mulish">
                    Çocuklarımızın özgürce düşünmelerini, fikirlerini ifade
                    etmelerini teşvik ediyoruz. Takım çalışması, empati ve saygı
                    gibi sosyal becerilerin gelişmesini sağlıyoruz.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-5 col-sm-5">
              <div
                className="sc-discovery-2 wow fadeInUp animated"
                data-wow-delay="0.3ms"
                data-wow-duration="1400ms"
              >
                <div className="box-feature">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width={110}
                    height={107}
                    viewBox="0 0 110 107"
                  >
                    <g data-name={4}>
                      <image
                        width={110}
                        height={107}
                        xlinkHref="data:img/png;base64,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"
                      />
                    </g>
                  </svg>
                </div>
                <div className="box-content">
                  <h4 className="title">
                    <Link href="/about">
                      <a>Sevgi ve Güven</a>
                    </Link>
                  </h4>
                  <p className="wrap f-mulish">
                    Anaokulumuzda, her çocuk güvenli ve sevgi dolu bir ortamda
                    eğitim alır. Çocuklarımızın gelişimlerini destekleyerek
                    kendilerini ifade edebilmelerini sağlıyoruz.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TfCounter />

      <section className="tf-section tf-service-2">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="fl-services fx">
                <div
                  className="box-feature fx wow fadeIn animated"
                  data-wow-delay="0.3ms"
                  data-wow-duration="1300ms"
                >
                  <img src="assets/images/pattern/service-2.jpg" alt="Image" />
                </div>
                <div className="box-content">
                  <div className="title-heading">
                    <div className="sub-heading clr-pri-3 f-mulish">
                      <span className="inner-sub st-2">Neden Biz</span>
                      <RightArrow />
                    </div>
                    <h2 className="title clr-pri-2">Tanıtım </h2>
                  </div>
                  {/*/.title-heading*/}
                  <p className="wrap f-mulish">
                    Garden Anaokulu, geleceğin üretken ve özgüvenli bireylerini
                    yetiştirmek için çocukların öğrenme yolculuklarını erken
                    yaşlardan itibaren şekillendiren, yenilikçi ve sevgi dolu
                    bir eğitim kurumudur. Çocukların doğal meraklarını ve keşif
                    duygularını destekleyerek, onları hem eğlenceli hem de
                    öğretici bir ortamda gelişimlerine uygun bir biçimde destek
                    sağlıyoruz.
                  </p>
                  <div className="inner fx">
                    <div className="sc-services-2 fx mg-bt-25">
                      <div className="feature">
                        <svg
                          data-name="Why Choose Us"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          width={65}
                          height={64}
                          viewBox="0 0 65 64"
                        >
                          <g data-name={1}>
                            <image
                              id="level"
                              width={65}
                              height={64}
                              xlinkHref="data:img/png;base64,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"
                            />
                          </g>
                        </svg>
                      </div>
                      <div className="content">
                        <h4 className="title">
                          <Link href="/about">
                            <a>Resim &amp; Sanat</a>
                          </Link>
                        </h4>
                        <p className="sub f-mulish"></p>
                      </div>
                    </div>
                    <div className="sc-services-2 fx mg-bt-25">
                      <div className="feature">
                        <svg
                          data-name="Why Choose Us"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          width={64}
                          height={65}
                          viewBox="0 0 64 65"
                        >
                          <g data-name={2}>
                            <image
                              id="experiment"
                              width={64}
                              height={65}
                              xlinkHref="data:img/png;base64,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"
                            />
                          </g>
                        </svg>
                      </div>
                      <div className="content">
                        <h4 className="title">
                          <Link href="/classes">
                            <a>Dijital Eğitim</a>
                          </Link>
                        </h4>
                        <p className="sub f-mulish"></p>
                      </div>
                    </div>
                    <div className="sc-services-2 fx">
                      <div className="feature">
                        <svg
                          data-name="Why Choose Us"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          width={65}
                          height={63}
                          viewBox="0 0 65 63"
                        >
                          <g data-name={3}>
                            <image
                              id="balloons"
                              width={65}
                              height={63}
                              xlinkHref="data:img/png;base64,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"
                            />
                          </g>
                        </svg>
                      </div>
                      <div className="content">
                        <h4 className="title">
                          <Link href="/events">
                            <a>Etkinlik &amp; Partiler</a>
                          </Link>
                        </h4>
                        <p className="sub f-mulish"></p>
                      </div>
                    </div>
                    <div className="sc-services-2 fx">
                      <div className="feature">
                        <svg
                          data-name="Why Choose Us"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          width={63}
                          height={62}
                          viewBox="0 0 63 62"
                        >
                          <g data-name={4}>
                            <image
                              id="open-book"
                              width={63}
                              height={62}
                              xlinkHref="data:img/png;base64,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"
                            />
                          </g>
                        </svg>
                      </div>
                      <div className="content">
                        <h4 className="title">
                          <Link href="/about">
                            <a>Profesyonel Dersler</a>
                          </Link>
                        </h4>
                        <p className="sub f-mulish"></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="tf-section tf-feedback">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="title-heading st-3">
                <div className="sub-heading clr-pri-3 f-mulish">
                  <LeftArrow />
                  <span className="inner-sub st-1">Velilerin Yorumları</span>
                  <RightArrow />
                </div>
                <h2 className="title clr-pri-2">Neden veliler bizi seviyor </h2>
              </div>
            </div>
            <div className="col-12 pd0-135">
              <div className="slider-fb">
                <div className="themesflat-carousel clearfix">
                  <TestimonialSlider />
                </div>
                {/*/.themesflat-carousel*/}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="tf-section tf-feedback">
        <div className="container p-5">
          <div className="row p-5">
            <div className="col-12">
              <div className="title-heading st-3">
                <div className="sub-heading clr-pri-3 f-mulish">
                  <LeftArrow />
                  <span className="inner-sub st-1">Bilgilendirme</span>
                  <RightArrow />
                </div>
                <h2 className="title clr-pri-2">Veliler için bilgilendirme </h2>
              </div>
            </div>
            <div className="box-content p-5">
              <h3 className="title-article-post">
                <a className="p-5">Sevgili Ebeveynler,</a>
              </h3>
              <p className="sub f-rubik p-5">
                Öncelikle Garden Anaokulu’nu tercih ettiğiniz için teşekkür
                eder, çocuğunuzun eğitim yolculuğunda bizimle birlikte
                olacağınız için büyük bir mutluluk duyduğumuzu belirtmek
                isteriz. Bu süreçte, çocuklarınızın gelişimi ve mutluluğu her
                zaman önceliğimiz olacaktır. Siz Değerli Ailelerimizle güçlü bir
                işbirliği içinde çalışmaya özen göstereceğiz.
              </p>
              <p className="sub f-rubik p-5">
                Okulumuz, tüm çocuklarınızın duygusal, bilişsel, fiziksel ve
                sosyal gelişimlerini dengeli bir şekilde destekleyen, sevgi dolu
                ve güvenli bir eğitim ortamı sunar. Okulumuzda tüm çocuklarımız,
                kendi benzersiz yetenekleri, ilgileri ve öğrenme hızlarıyla bir
                birey olarak kabul edilmektedir. Bizler öğrencilerimizi en iyi
                şekilde yetiştirmeyi amaçlıyoruz.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="tf-section tf-register">
        <img
          src="assets/images/background/bg-register.png"
          alt="Image"
          className="feature-register"
        />
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="title-heading st-5">
                <div className="sub-heading clr-pri-3 f-mulish">
                  <LeftArrow />
                  <span className="inner-sub st-1">Bilgi Al</span>
                  <RightArrow />
                </div>
                <h2 className="title clr-pri-2">
                  Hemen bilgileri doldur sizi arayalım
                </h2>
              </div>
            </div>
            <div className="col-12">
              <div
                className="fl-register wow fadeInUp animated"
                data-wow-delay="0.3ms"
                data-wow-duration="1000ms"
              >
                <form
                  action="/"
                  method="post"
                  id="commentform"
                  className="comment-form"
                >
                  <div className="row-form st-1 mg-bt-20">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Ad.........."
                    />
                  </div>

                  <div className="row-form st-1 mg-bt-20">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Telefon NO.........."
                    />
                  </div>
                  {/* <div className="row-form">
                    <button className="fl-btn st-14">
                      <span className="inner">Gönder</span>
                    </button>
                  </div> */}
                  <div className="row-form">
                    <button className="fl-btn st-14">
                      <a className="inner">Gönder</a>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer2 />
    </Layout>
  );
};
export default Index;
