import React, { useState } from "react";
import { braeckingTheScript } from "../../../data";


const Course1 = () => {
  const [toggleOpen, setToggleOpen] = useState(false);
  const handleToggle = () => {
    setToggleOpen(!toggleOpen);
  };
  return (
    <div>
        <div className="big-section w-dropdown">
              <div
                id="toggle"
                className="course-header navy w-dropdown-toggle"
                onClick={handleToggle}
              >
                <div className="div-block-194">
                  <img
                    src="https://uploads-ssl.webflow.com/5ea4a389088154f012b2dee8/5ea4d4670881541fa5b417a5_icons8-collaboration.svg"
                    loading="lazy"
                    alt=""
                    className="course-section-image"
                  />
                  <h2 className="heading-12">
                    Breaking the Script
                    <br />
                  </h2>
                  <img
                    src="https://uploads-ssl.webflow.com/5ea4a389088154f012b2dee8/601f398663e8ed3f54634e3c_Dropdown.svg"
                    loading="lazy"
                    width="39"
                    alt=""
                    className="image-125"
                  />
                </div>
                <div className="section-button">
                  <p className="paragraph-11">
                    <strong>8 videos</strong>
                  </p>
                  <div className="div-block-204">
                    <p className="paragraph-11">38 min</p>
                    <img
                      src="https://uploads-ssl.webflow.com/5ea4a389088154f012b2dee8/5ea5e946c07d787a353e1495_Chevron.svg"
                      loading="lazy"
                      width="19"
                      alt=""
                      className="image-127"
                    />
                  </div>
                </div>
              </div>
              <nav
                id="toggle-open25"
                className={`course-content w-dropdown-list ${
                  toggleOpen ? "w--open" : ""
                }`}
              >
                <div className="collection-list-wrapper w-dyn-list">
                  <div role="list" className="collection-list-2 w-dyn-items">
                    <div
                      role="listitem"
                      className="collection-item-2 w-dyn-item"
                    >
                      <div>
                        <a
                          href="https://www.youtube.com/watch?v=nUaSJJT7Ars"
                          className="free-item navy w-inline-block"
                        >
                          <div className="video-title-block">
                            <div className="video-image-block">
                              <div className="videoimage"></div>
                              <div className="html-embed-3 w-embed">
                                <div
                                  style={{
                                    width: "100%",
                                    height: "100%",
                                    borderRadius: "7px",
                                    backgroundImage: "url(https://i.ytimg.com/vi/nUaSJJT7Ars/hqdefault.jpg)",
                                    backgroundSize: "cover",
                                    backgroundRepeat: "no-repeat",
                                    backgroundPosition: "50% 50%",
                                  }}
                                ></div>
                              </div>
                            </div>
                            <p className="lesson-title">
                              Introduction to Breaking the Script
                            </p>
                          </div>
                          <div className="div-block-196">
                            <div className="chip navy">
                              <div className="text-block-40">Free</div>
                            </div>
                            <p className="time-pages">3:03</p>
                          </div>
                        </a>
                      </div>
                    </div>
                    {braeckingTheScript.map((item, index) => (
                      <div
                        role="listitem"
                        className="collection-item-2 w-dyn-item"
                        key={index}
                      >
                        <div>
                          <a
                            href="https://www.youtube.com/watch?v=5rFiNuq6oG8"
                            className="regular-item w-inline-block"
                          >
                            <div className="video-title-block">
                              <img
                                src="https://uploads-ssl.webflow.com/5ea4a389088154f012b2dee8/601f5790ba960cc92211853e_Play button regular.svg"
                                loading="lazy"
                                alt=""
                                className="image-121"
                              />
                              <p className="paragraph-10">
                                Technique {item.technique}: {item.title}
                              </p>
                            </div>
                            <div className="div-block-196">
                              <p className="time-pages">{item.time}</p>
                            </div>
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </nav>
            </div>
    </div>
  )
}

export default Course1
