import React, { useRef, useState } from "react";
import { executionQuestions } from "../../../data";

const Course3 = () => {
  const [toggleOpen, setToggleOpen] = useState(false);
  const handleToggle = () => {
    setToggleOpen(!toggleOpen);
  };
  const courseContentRef = useRef();
  const courseRef = useRef();

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
                    src="https://uploads-ssl.webflow.com/5ea4a389088154f012b2dee8/603725ef9e0be6bbb871b393_Product.png"
                    loading="lazy"
                    alt=""
                    className="course-section-image"
                  />
                  <h2 className="heading-12">
                    Product Questions
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
                    <strong>13 videos</strong>
                  </p>
                  <div className="div-block-204">
                    <p className="paragraph-11">2.7 hrs</p>
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
                id="toggle-open1"
                className={`course-content w-dropdown-list ${
                  toggleOpen ? "w--open" : ""
                }`}
              >
                <a href="/" className="regular-item w-inline-block">
                  <div className="video-title-block">
                    <img
                      src="https://uploads-ssl.webflow.com/5ea4a389088154f012b2dee8/601f5790ba960cc92211853e_Play button regular.svg"
                      loading="lazy"
                      alt=""
                      className="image-121"
                    />
                    <p className="paragraph-10">
                      Overview of Execution questions
                    </p>
                  </div>
                  <div className="div-block-196">
                    <p className="time-pages">5:33</p>
                  </div>
                </a>
                {executionQuestions.map((item, index) => (
                  <div
                    className="dropdown w-dropdown"
                    key={index}
                    ref={courseRef}
                  >
                    <div className="course-subsection w-dropdown-toggle">
                      <div className="text-block-49">{item.title}</div>
                      <div className="div-block-208">
                        <div className="text-block-50">
                          <strong>{item.videoNumber} videos</strong>
                        </div>
                        <img
                          src="https://uploads-ssl.webflow.com/5ea4a389088154f012b2dee8/6037284729d47964f264faa4_Chevron down.svg"
                          loading="lazy"
                          alt=""
                        />
                      </div>
                    </div>
                    <nav
                      id="toggle-open2"
                      className="course-content w-dropdown-list "
                      ref={courseContentRef}
                    >
                      <div className="collection-list-wrapper w-dyn-list">
                        <div
                          role="list"
                          className="collection-list-2 w-dyn-items"
                        >
                          {item.subContent.map((quest, i) => (
                            <div
                              role="listitem"
                              className="collection-item-2 w-dyn-item"
                              key={i}
                            >
                              <div>
                                <a
                                  href="/"
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
                                      {quest.subtitle}
                                    </p>
                                  </div>
                                  <div className="div-block-196">
                                    <p className="time-pages">{quest.time}</p>
                                  </div>
                                </a>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </nav>
                  </div>
                ))}
              </nav>
            </div>
    </div>
  )
}

export default Course3
