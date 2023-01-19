import React from "react";
import { Link } from "react-router-dom";
import {
  Affirm,
  ArrowCircledRight,
  BlueCircledArrow,
  Lifetime,
  PageNavy,
  StarShield,
  TimeNavy,
  USDollar,
} from "../../../assets";

const CoursesRight = () => {
  return (
    <>
      <div className="div-block-198">
        <div className="course-sidebar explore-section">
          <Link
            to="/"
            className="topbigvideo inline-video course-2 w-inline-block"
          >
            *
          </Link>
          <div className="div-block-185">
            <div className="text-block-43">$489</div>
            <Link to="/" className="button navy full-width w-button">
              Buy now
            </Link>
          </div>
          <Link to="/" className="div-block-258 link-block-11 w-inline-block">
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
            <img src={StarShield} loading="lazy" alt="" className="image-119" />
            <p className="reviewed-by-text">
              Created by a team of nearly 2 dozen PMs from Google, Meta,
              Microsoft, and more
              <br />
            </p>
          </div>
          <div className="course-detail-bullets">
            <div className="detail-bullet bullets-on-course-page">
              <img src={TimeNavy} width="24" alt="" className="image-14" />
              <p className="text small">16 hours of video lessons</p>
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
          </div>
        </div>
        <div className="course-sidebar explore-section upsell-sidebar">
          <Link
            to="/"
            //   target="_blank"
            className="w-inline-block"
          >
            <div className="div-block-250">
              <img src={USDollar} alt="" className="image-139" />
              <p className="text small">
                Want to get
                <strong>free lifetime access</strong>
                to all 9 Product Alliance courses through your employer?
                <strong className="bold-text-3">Learn more →</strong>
              </p>
            </div>
          </Link>
        </div>
        <div className="course-sidebar explore-section">
          <p className="paragraph-8">
            More Product Management courses:
            <br />
          </p>
          <div className="div-block-191">
            <Link to="/" className="more-course-block google w-inline-block">
              <div className="div-block-207">
                <div className="small-course-icon google micro"></div>
                <p className="more-courses-text google">
                  Flagship Google PM Course
                  <br />
                </p>
              </div>
              <img
                src={ArrowCircledRight}
                loading="lazy"
                width="25"
                alt=""
                className="more-courses-icon"
              />
            </Link>
            <Link to="/" className="more-course-block facebook w-inline-block">
              <div className="div-block-207">
                <div className="small-course-icon facebook colored micro"></div>
                <p className="more-courses-text facebook">
                  Flagship Meta PM Course
                  <br />
                </p>
              </div>
              <img
                src={BlueCircledArrow}
                loading="lazy"
                width="25"
                alt=""
                className="more-courses-icon"
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoursesRight;
