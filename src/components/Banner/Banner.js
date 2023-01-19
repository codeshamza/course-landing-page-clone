import React from "react";
import { Link } from "react-router-dom";
import {
  Affirm,
  ExploreCoursesDownArrow,
  Lifetime,
  PageNavy,
  StarShield,
  TimeNavy,
  USDollar,
} from "../../assets";

const Banner = () => {
  return (
    <div className="course-section-1 course-2 wf-section">
      <div className="container w-container">
        <div className="w-row">
          <div className="column-68 w-col w-col-6">
            <div className="div-block-203">
              <div className="course-icon course-page-icon hacking-transparent"></div>
              <h1 className="course-h1">
                Hacking the Product Management Interview
              </h1>
            </div>
            <div className="chip navy course-header-desktop">
              <div className="text-block-40 last-updated-hacking">
                Course last updated:
              </div>
            </div>
            <p className="text course-subtitle">
              This course will teach you how to answer ANY interview question
              thrown your way.
              <br />
            </p>
            <Link to="/offers" className="hero-button courses w-inline-block">
              <div className="text-block-41">Explore the course</div>
              <img src={ExploreCoursesDownArrow} alt="" className="image-84" />
            </Link>
            <div className="chip navy course-header-mobile">
              <div className="text-block-40 last-updated-hacking">
                Course last updated:
              </div>
            </div>
          </div>
          <div className="column-63 w-col w-col-6">
            <div className="course-sidebar">
              <Link to="/#" className="topbigvideo course-2 w-inline-block">
                <div className="div-block-206">
                  <div className="text-preview-block">
                    <div className="text-block-42">
                      <strong>
                        Convert your PM interviews into offer letters
                      </strong>
                      <br />
                      Step-by-step walkthroughs to give 10/10 answers to any PM
                      interview question that might be thrown your way.
                    </div>
                  </div>
                </div>
              </Link>
              <div className="div-block-185">
                <div className="text-block-43">$489</div>
                <Link to="/checkout" className="button navy full-width w-button">
                  Buy now
                </Link>
              </div>
              <Link
                to="/#"
                className="div-block-258 link-block-11 w-inline-block"
              >
                <div className="text-block-54">
                  Pay in 4 interest-free installments of
                  <strong>$122</strong>
                  with
                </div>
                <img
                  src={Affirm}
                  loading="lazy"
                  width="59"
                  alt=""
                  className="image-143"
                />
              </Link>
              <div className="course-sidebar-divider-line"></div>
              <div className="created-by-course">
                <img
                  src={StarShield}
                  loading="lazy"
                  alt=""
                  className="image-119"
                />
                <p className="reviewed-by-text">
                  Created by a team of nearly 2 dozen PMs from Google, Meta,
                  Microsoft, and more
                  <br />
                </p>
              </div>
              <div className="course-detail-bullets">
                <div className="detail-bullet bullets-on-course-page">
                  <img src={TimeNavy} width="24" alt="" className="image-14" />
                  <p className="text small">18 hours of video lessons</p>
                </div>
                <div className="detail-bullet bullets-on-course-page">
                  <img src={PageNavy} width="24" alt="" className="image-14" />
                  <p className="text small">
                    62 pages of interview strategy guides
                  </p>
                </div>
                <div className="detail-bullet bullets-on-course-page">
                  <img src={Lifetime} width="24" alt="" className="image-14" />
                  <p className="text small">Lifetime access</p>
                </div>
                <div className="detail-bullet bullets-on-course-page">
                  <img src={USDollar} width="24" alt="" className="image-14" />
                  <p className="text small">
                    Tax-deductible expense under the US&#x27;s continuing
                    education category
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
