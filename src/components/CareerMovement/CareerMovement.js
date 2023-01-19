import React from "react";
import {
  Amazone,
  Amazone1080,
  Amazone1600,
  Amazone2000,
  Amazone500,
  Amazone800,
  Experdia,
  GoogleColoredIcon,
  LocationVector,
  Meta1080,
  Meta1280,
  Meta500,
  Meta800,
  MetaPlatform,
  MicrosoftLogo,
  Oracle,
  Oracle1080,
  Oracle1600,
  Oracle2000,
  Oracle500,
  Oracle800,
  Splunk,
  TcSmallArrow,
  UpArrowIncrease,
} from "../../assets";

const CareerMovement = () => {
  return (
    <div id="TC-Tiles" className="career-movements wf-section">
      <div className="container w-container">
        <div className="div-block-218">
          <h3 className="heading-3">
            Career movements by Product Alliance members
          </h3>
          <div className="w-layout-grid grid">
            <div className="movement-container">
              <img
                src={TcSmallArrow}
                loading="lazy"
                width="29"
                alt=""
                className="tc-arrow"
              />
              <div className="movement-grid">
                <div className="movement-section">
                  <div className="movement-top">
                    <img
                      src={Experdia}
                      loading="lazy"
                      width="92"
                      alt=""
                      className="grayscale"
                    />
                  </div>
                  <div className="movement-bottom">
                    <div className="tc light-gray">$282k TC</div>
                    <div className="tc-location-div light-gray">
                      <img
                        src={LocationVector}
                        loading="lazy"
                        alt=""
                        className="image-122"
                      />
                      <div className="tc-location">Seattle, WA</div>
                    </div>
                  </div>
                </div>
                <div className="movement-section gray-background">
                  <div className="movement-top">
                    <img
                      src={GoogleColoredIcon}
                      loading="lazy"
                      width="76"
                      alt=""
                    />
                  </div>
                  <div className="movement-bottom">
                    <div className="tc">$590k TC</div>
                    <div className="tc-location-div">
                      <img
                        src={LocationVector}
                        loading="lazy"
                        alt=""
                        className="image-122"
                      />
                      <div className="tc-location">Seattle, WA</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tc-increase">
                <img
                  src={UpArrowIncrease}
                  loading="lazy"
                  alt=""
                  className="image-129"
                />
                <div>109% Increase</div>
              </div>
            </div>
            <div className="movement-container">
              <img
                src={TcSmallArrow}
                loading="lazy"
                width="29"
                alt=""
                className="tc-arrow"
              />
              <div className="movement-grid">
                <div className="movement-section">
                  <div className="movement-top">
                    <img
                      src={Oracle}
                      loading="lazy"
                      width="92"
                      srcSet={`
                      ${Oracle500}    500w,
                        ${Oracle800}    800w,
                        ${Oracle1080}  1080w,
                        ${Oracle1600}  1600w,
                        ${Oracle2000}  2000w,
                        ${Oracle}        3913w
                      `}
                      sizes="(max-width: 479px) 43vw, 92px"
                      alt=""
                      className="image-131 grayscale"
                    />
                  </div>
                  <div className="movement-bottom">
                    <div className="tc light-gray">$302k TC</div>
                    <div className="tc-location-div light-gray">
                      <img
                        src={LocationVector}
                        loading="lazy"
                        alt=""
                        className="image-122"
                      />
                      <div className="tc-location">Boston, MA</div>
                    </div>
                  </div>
                </div>
                <div className="movement-section gray-background">
                  <div className="movement-top">
                    <img
                      src={Amazone}
                      loading="lazy"
                      width="76"
                      srcSet={`
                      ${Amazone500}   500w,
                      ${Amazone800}   800w,
                      ${Amazone1080} 1080w,
                      ${Amazone1600} 1600w,
                      ${Amazone2000}        2209w`}
                      sizes="(max-width: 479px) 34vw, 76px"
                      alt=""
                    />
                  </div>
                  <div className="movement-bottom">
                    <div className="tc">$473k TC</div>
                    <div className="tc-location-div">
                      <img
                        src={LocationVector}
                        loading="lazy"
                        alt=""
                        className="image-122"
                      />
                      <div className="tc-location">Seattle, WA</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tc-increase">
                <img
                  src={UpArrowIncrease}
                  loading="lazy"
                  alt=""
                  className="image-129"
                />
                <div>57% Increase</div>
              </div>
            </div>
            <div className="movement-container mobile-hidden">
              <img
                src={TcSmallArrow}
                loading="lazy"
                width="29"
                alt=""
                className="tc-arrow"
              />
              <div className="movement-grid">
                <div className="movement-section">
                  <div className="movement-top">
                    <img
                      src={Amazone}
                      loading="lazy"
                      width="76"
                      srcSet={`
                      ${Amazone500}   500w,
                      ${Amazone800}   800w,
                      ${Amazone1080} 1080w,
                      ${Amazone1600} 1600w,
                      ${Amazone2000}        2209w`}
                      sizes="(max-width: 767px) 100vw, 76px"
                      alt=""
                      className="grayscale"
                    />
                  </div>
                  <div className="movement-bottom">
                    <div className="tc light-gray">$338k TC</div>
                    <div className="tc-location-div light-gray">
                      <img
                        src={LocationVector}
                        loading="lazy"
                        alt=""
                        className="image-122"
                      />
                      <div className="tc-location">San Francisco, CA</div>
                    </div>
                  </div>
                </div>
                <div className="movement-section gray-background">
                  <div className="movement-top">
                    <img
                      src={MetaPlatform}
                      loading="lazy"
                      width="91"
                      srcSet={`
                        ${Meta500}   500w,
                        ${Meta800}  800w,
                        ${Meta1080} 1080w,
                        ${Meta1280}       1280w
                      `}
                      sizes="(max-width: 767px) 100vw, 91px"
                      alt=""
                    />
                  </div>
                  <div className="movement-bottom">
                    <div className="tc">$589k TC</div>
                    <div className="tc-location-div">
                      <img
                        src={LocationVector}
                        loading="lazy"
                        alt=""
                        className="image-122"
                      />
                      <div className="tc-location">Menlo Park, CA</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tc-increase">
                <img
                  src={UpArrowIncrease}
                  loading="lazy"
                  alt=""
                  className="image-129"
                />
                <div>74% Increase</div>
              </div>
            </div>
            <div className="movement-container mobile-hidden">
              <img
                src={TcSmallArrow}
                loading="lazy"
                width="29"
                alt=""
                className="tc-arrow"
              />
              <div className="movement-grid">
                <div className="movement-section">
                  <div className="movement-top">
                    <img src={Splunk} loading="lazy" width="104" alt="" />
                  </div>
                  <div className="movement-bottom">
                    <div className="tc light-gray">$334k TC</div>
                    <div className="tc-location-div light-gray">
                      <img
                        src={LocationVector}
                        loading="lazy"
                        alt=""
                        className="image-122"
                      />
                      <div className="tc-location">New York, NY</div>
                    </div>
                  </div>
                </div>
                <div className="movement-section gray-background">
                  <div className="movement-top">
                    <img src={MicrosoftLogo} loading="lazy" width="91" alt="" />
                  </div>
                  <div className="movement-bottom">
                    <div className="tc">$508k TC</div>
                    <div className="tc-location-div">
                      <img
                        src={LocationVector}
                        loading="lazy"
                        alt=""
                        className="image-122"
                      />
                      <div className="tc-location">Redmond, WA</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tc-increase">
                <img
                  src={UpArrowIncrease}
                  loading="lazy"
                  alt=""
                  className="image-129"
                />
                <div>52% Increase</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerMovement;
