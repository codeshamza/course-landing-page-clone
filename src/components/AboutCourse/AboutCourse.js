import React from "react";
import {
  Blob,
  CourseContentGif,
  GroupLogos,
  TotalCompGif,
  TotalCustomerGif,
} from "../../assets";

const AboutCourse = () => {
  return (
    <div className="course-section-2 course-2 wf-section">
      <div className="container w-container">
        <div className="columns-7 w-row">
          <div className="column-69 w-col w-col-6">
            <h2 className="heading-2 navy no-bottom-margin">
              About the Course
              <br />
            </h2>
            <p className="course-description">
              Overwhelmed by all the different questions you may get asked
              during the product management interview?
              <br />
              <br />
              Your time is limited and valuable so no
              <strong>there&#x27;s no fluff content</strong>
              in our course. We filmed PMs from various top companies answering
              the
              <strong>85 interview questions</strong>
              below to show you what
              <strong>10-out-of-10 responses look like.</strong>
              All our
              <strong>HD videos</strong>
              are
              <strong>professionally annotated</strong>
              with graphics &amp; notes to aid visual learners and show you
              exactly what to whiteboard. We explain the nuances of being an
              exceptional interviewee—from adding strategic framing in your
              answers to the body language you should exhibit.
              <br />
            </p>
            <img
              src={GroupLogos}
              loading="lazy"
              width="382"
              sizes="(max-width: 479px) 86vw, (max-width: 767px) 382px, (max-width: 991px) 46vw, 382px"
              srcSet={`${GroupLogos} 500w,
            ${GroupLogos}      724w`}
              alt=""
              className="image-126"
            />
          </div>
          <div className="w-col w-col-6">
            <img
              src={Blob}
              loading="lazy"
              srcSet={`
            ${Blob} 500w,
            ${Blob}  800w,
            ${Blob}       1174w
            `}
              sizes="(max-width: 767px) 100vw, (max-width: 1439px) 52vw, 572px"
              alt=""
              className="image-120"
            />
          </div>
        </div>
        <div className="div-block-189">
          <h3 className="heading-11">
            Our Metrics
            <br />
          </h3>
          <div className="div-block-188">
            <div className="div-block-190">
              <img
                src={TotalCustomerGif}
                loading="lazy"
                width="252"
                alt=""
                className="course-gif"
              />
              <p className="metrics-header navy">
                6,000+
                <br />
              </p>
              <p className="paragraph-7">
                total customers
                <br />
              </p>
            </div>
            <div className="div-block-190">
              <img
                src={CourseContentGif}
                loading="lazy"
                alt=""
                className="course-gif"
              />
              <p className="metrics-header navy">
                16 hours
                <br />
              </p>
              <p className="paragraph-7">
                of HD video lessons
                <br />
              </p>
            </div>
            <div className="div-block-190">
              <img
                src={TotalCompGif}
                loading="lazy"
                alt=""
                className="course-gif"
              />
              <p className="metrics-header navy">
                38%
                <br />
              </p>
              <p className="paragraph-7">
                avg. increase in TC
                <br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCourse;
