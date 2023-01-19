import React from "react";
import { Link } from "react-router-dom";
import {
  Affirm,
  Lifetime,
  Man360,
  SmallDocIcon,
  TimeNavy,
  USDollar,
} from "../../assets";

const Access = () => {
  return (
    <div id="pricing" className="course-pricing-section wf-section">
      <div className="container w-container">
        <h1 className="heading center pricing-header">
          Get lifetime access. Enroll now.
        </h1>
        <div className="comparison-block">
          <div className="pricing-block-new">
            <div className="course-column">
              <h3 className="heading-3 course-heading">Individual courses</h3>
              <div className="individual-courses">
                <Link to="/" className="small-course w-inline-block">
                  <div className="small-course-icon breaking"></div>
                  <div className="div-block-28">
                    <h4 className="heading-4">Breaking into Product</h4>
                    <div className="div-block-202">
                      <div className="price normal">$489</div>
                    </div>
                  </div>
                </Link>
                <Link to="/" className="small-course navy w-inline-block">
                  <div className="small-course-icon hacking"></div>
                  <div className="div-block-28">
                    <h4 className="heading-4">Hacking the PM Interview</h4>
                    <div className="div-block-202">
                      <div className="price normal">$489</div>
                      <div className="chip small">
                        <div className="chip-text navy">Buy now</div>
                      </div>
                    </div>
                  </div>
                </Link>
                <Link to="/" className="small-course purple w-inline-block">
                  <div className="small-course-icon core"></div>
                  <div className="div-block-28">
                    <h4 className="heading-4">Company Deep Dives</h4>
                    <div className="price normal">$489</div>
                  </div>
                </Link>
                <Link
                  to="/"
                  className="small-course google-green w-inline-block"
                >
                  <div className="small-course-icon google"></div>
                  <div className="div-block-28">
                    <h4 className="heading-4">Flagship Google PM Course</h4>
                    <div className="div-block-202">
                      <div className="price normal">$489</div>
                    </div>
                  </div>
                </Link>
                <Link
                  to="/"
                  className="small-course facebook-blue w-inline-block"
                >
                  <div className="small-course-icon facebook"></div>
                  <div className="div-block-28">
                    <h4 className="heading-4">Flagship Meta PM Course</h4>
                    <div className="price normal">$489</div>
                  </div>
                </Link>
                <Link to="/" className="small-course microsoft w-inline-block">
                  <div className="small-course-icon microsoft"></div>
                  <div className="div-block-28">
                    <h4 className="heading-4">Flagship Microsoft PM Course</h4>
                    <div className="div-block-202">
                      <div className="price normal">$489</div>
                    </div>
                  </div>
                </Link>
                <Link to="/" className="small-course amazon w-inline-block">
                  <div className="small-course-icon amazon"></div>
                  <div className="div-block-28">
                    <h4 className="heading-4">Flagship Amazon PM Course</h4>
                    <div className="div-block-202">
                      <div className="price normal">$489</div>
                    </div>
                  </div>
                </Link>
                <Link to="/" className="small-course uber w-inline-block">
                  <div className="small-course-icon uber"></div>
                  <div className="div-block-28">
                    <h4 className="heading-4">Flagship Uber PM Course</h4>
                    <div className="div-block-202">
                      <div className="price normal">$489</div>
                    </div>
                  </div>
                </Link>
                <Link to="/" className="small-course apple w-inline-block">
                  <div className="small-course-icon apple"></div>
                  <div className="div-block-28">
                    <h4 className="heading-4">Flagship Apple PM Course</h4>
                    <div className="div-block-202">
                      <div className="price normal">$489</div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="or-block">OR</div>
            <div className="course-column second">
              <h3 className="heading-3 course-heading">
                Get all 9 courses and save more
              </h3>
              <div className="courses">
                <div className="bundle">
                  <div className="div-block-30 more-transparency">
                    <div>
                      <div className="course-icons">
                        <div className="small-course-icon breaking colored"></div>
                        <div className="small-course-icon hacking colored"></div>
                        <div className="small-course-icon core colored"></div>
                        <div className="small-course-icon google with-border"></div>
                        <div className="small-course-icon facebook colored"></div>
                        <div className="small-course-icon microsoft"></div>
                        <div className="small-course-icon amazon with-border"></div>
                        <div className="small-course-icon uber with-border"></div>
                        <div className="small-course-icon apple with-border"></div>
                      </div>
                    </div>
                    <div>
                      <h3 className="heading-13">
                        <span className="blue-highlight">Save 75%</span>
                        with the
                        <br />
                        Full Library Access Pass (includes all 9 courses)
                        <br />
                      </h3>
                      <div className="div-block-131">
                        <div className="div-block-132">
                          <img
                            src={TimeNavy}
                            width="20"
                            alt=""
                            className="image-91"
                          />
                          <p className="text no-margins">37 video hrs</p>
                        </div>
                        <div className="div-block-132">
                          <img
                            src={SmallDocIcon}
                            width="20"
                            alt=""
                            className="image-91"
                          />
                          <p className="text no-margins">300+ pages</p>
                        </div>
                        <div className="div-block-132">
                          <img
                            src={Lifetime}
                            width="20"
                            alt=""
                            className="image-91"
                          />
                          <p className="text no-margins">Lifetime access</p>
                        </div>
                      </div>
                      <div className="detail-bullet bullets-on-course-page">
                        <img
                          src={USDollar}
                          width="21"
                          alt=""
                          className="image-91"
                        />
                        <p className="text small">
                          Tax-deductible expense under the US&#x27;s continuing
                          education category
                        </p>
                      </div>
                      <div id="mydate" className="mydate">
                        <p className="text subtitle-card"></p>
                      </div>
                    </div>
                  </div>
                  <div className="div-block-31 extended-version">
                    <div className="div-block-106">
                      <div className="bundle-pricing">
                        <div className="div-block-205">
                          <p className="price-bundle crossed-out red-crossed-out">
                            $2319
                          </p>
                          <p className="price-bundle crossed-out">$2319</p>
                        </div>
                        <p className="price-bundle">$579</p>
                      </div>
                      <Link
                        to="/"
                        target="_blank"
                        className="button white wide w-button"
                      >
                        Buy now
                      </Link>
                    </div>
                    <div className="offer-expires-block">
                      <div id="offer-countdown" className="countholder">
                        <div id="timer" className="timer">
                          <p id="days" className="text small offer-expire">
                            3:45:23 remaining
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Link
                to="/"
                // target="_blank"
                className="div-block-258 link-block-11 tablet w-inline-block"
              >
                <div className="text-block-55">
                  Pay in 4 interest-free installments of
                  <strong>$144.75</strong>
                  with
                </div>
                <img
                  src={Affirm}
                  loading="lazy"
                  width="Auto"
                  alt=""
                  className="image-144"
                />
              </Link>
            </div>
          </div>
          <h3 className="heading-3 course-heading ultimate">
            Ultimate Package
          </h3>
          <div className="ultimate-package">
            <div className="div-block-113">
              <div className="course-icons">
                <div className="small-course-icon breaking colored"></div>
                <div className="small-course-icon hacking colored"></div>
                <div className="small-course-icon core colored"></div>
                <div className="small-course-icon coaching"></div>
                <div className="small-course-icon certificate"></div>
              </div>
              <h3 className="heading-3 left white">360° Ultimate Package</h3>
              <p className="bundle-subtitle-text off-white">
                Get all 3 premium courses,
                <span className="white-highlight">
                  1:1 personalized coaching
                </span>
                , and a verified Product Management certificate.
              </p>
            </div>
            <div className="div-block-37">
              <img src={Man360} width="45" alt="" className="image-88" />
              <div className="div-block-38">
                <div className="bundle-pricing">
                  <p className="price-bundle crossed-out">$2197</p>
                  <p className="price-bundle">$989</p>
                </div>
                <a href="/" className="button white wide black w-button">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Access;
