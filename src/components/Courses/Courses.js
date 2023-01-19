import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  BigChevronDown,
  ChevronDown,
  Dropdown,
  PlayBtnRegular,
} from "../../assets";
import { coursesData } from "../../data";
import CoursesHeading from "./SingleCourse/CoursesHeading";
import CoursesRight from "./SingleCourse/CoursesRight";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const itemsRef = useRef([]);

  const handleSubDropDown = () => {};

  useEffect(() => {
    setCourses(coursesData);
    itemsRef.current = itemsRef.current.slice(0, courses.length);
    itemsRef.current.map((item, i) =>
      item.addEventListener("click", function () {
        if (item.parentNode.lastChild.classList.contains("w--open")) {
          item.nextElementSibling.classList.remove("w--open");
        } else {
          item.nextElementSibling.classList.add("w--open");
        }
      })
    );

    const allDropDownItems = document.querySelectorAll(".subDropDown");
    allDropDownItems.forEach((item, index) => {
      item.addEventListener("click", function () {
        if (this.lastElementChild.classList.contains("w--open")) {
          this.lastElementChild.classList.remove("w--open");
        } else {
          this.lastElementChild.classList.add("w--open");
        }
      });
    });
  }, [courses]);

  return (
    <div id="explore" className="course-section-3 wf-section">
      <div className="container w-container">
        <h2 className="heading-2 navy no-bottom-margin">
          Explore the Course
          <br />
        </h2>
        <div className="div-block-201">
          <div className="column-65">
            {courses.map((item, i) => (
              <div className="big-section w-dropdown" key={item.bigTitle}>
                <div
                  id="toggle"
                  className="course-header navy w-dropdown-toggle"
                  ref={(el) => (itemsRef.current[i] = el)}
                >
                  <div className="div-block-194">
                    <img
                      src={item.img}
                      loading="lazy"
                      alt=""
                      className="course-section-image"
                    />
                    <h2 className="heading-12">
                      {item.bigTitle}
                      <br />
                    </h2>
                    <img
                      src={Dropdown}
                      loading="lazy"
                      width="39"
                      alt=""
                      className="image-125"
                    />
                  </div>
                  <div className="section-button">
                    <p className="paragraph-11">
                      <strong> {item.videoNumber} Videos </strong>
                    </p>
                    <div className="div-block-204">
                      <p className="paragraph-11">{item.time}</p>
                      <img
                        src={BigChevronDown}
                        loading="lazy"
                        width="19"
                        alt=""
                        className="image-127"
                      />
                    </div>
                  </div>
                </div>
                {item.subData.map((subItem, index) => (
                  <nav
                    id="toggle-open25"
                    className="course-content w-dropdown-list"
                    key={subItem.time}
                  >
                    <div className="collection-list-wrapper w-dyn-list">
                      <div
                        role="list"
                        className="collection-list-2 w-dyn-items"
                      >
                        <div
                          role="listitem"
                          className="collection-item-2 w-dyn-item"
                        >
                          <CoursesHeading subItem={subItem} />
                        </div>
                        {subItem?.first === true
                          ? subItem?.content1?.map((subItemTwo, index) => (
                              <div
                                role="listitem"
                                className="collection-item-2 w-dyn-item"
                                key={index}
                              >
                                <div>
                                  <Link
                                    to=""
                                    className="regular-item w-inline-block"
                                  >
                                    <div className="video-title-block">
                                      <img
                                        src={PlayBtnRegular}
                                        loading="lazy"
                                        alt=""
                                        className="image-121"
                                      />
                                      <p className="paragraph-10">
                                        Technique {index + 1}:{" "}
                                        {subItemTwo.title}
                                      </p>
                                    </div>
                                    <div className="div-block-196">
                                      <p className="time-pages">
                                        {subItemTwo.time}
                                      </p>
                                    </div>
                                  </Link>
                                </div>
                              </div>
                            ))
                          : subItem?.content2?.map((subItemTwo, index) => (
                              <div
                                onClick={handleSubDropDown}
                                className="dropdown w-dropdown subDropDown"
                                key={subItemTwo.title}
                              >
                                <div className="course-subsection w-dropdown-toggle">
                                  <div className="text-block-49">
                                    {subItemTwo.title}
                                  </div>
                                  <div className="div-block-208">
                                    <div className="text-block-50">
                                      <strong>
                                        {subItemTwo.videoNumber} videos
                                      </strong>
                                    </div>
                                    <img
                                      src={ChevronDown}
                                      loading="lazy"
                                      alt=""
                                    />
                                  </div>
                                </div>
                                <nav
                                  id="toggle-open2"
                                  className="course-content w-dropdown-list "
                                >
                                  <div className="collection-list-wrapper w-dyn-list">
                                    <div
                                      role="list"
                                      className="collection-list-2 w-dyn-items"
                                    >
                                      {subItemTwo?.subContent.map(
                                        (subItem, i) => (
                                          <div
                                            role="listitem"
                                            className="collection-item-2 w-dyn-item"
                                            key={i}
                                          >
                                            <div>
                                              <Link
                                                to="/"
                                                className={`${
                                                  subItem.free
                                                    ? "free-item navy"
                                                    : "regular-item"
                                                } w-inline-block`}
                                              >
                                                <div className="video-title-block">
                                                  {subItem.free ? (
                                                    <div className="video-image-block">
                                                      <div className="videoimage"></div>
                                                      <div className="html-embed-3 w-embed">
                                                        <div
                                                          style={{
                                                            width: "100%",
                                                            height: "100%",
                                                            borderRadius: "7px",
                                                            backgroundImage: `url(${subItem.img})`,
                                                            backgroundSize:
                                                              "cover",
                                                            backgroundRepeat:
                                                              "no-repeat",
                                                            backgroundPosition:
                                                              "50% 50%",
                                                          }}
                                                        ></div>
                                                      </div>
                                                    </div>
                                                  ) : (
                                                    <img
                                                      src={PlayBtnRegular}
                                                      loading="lazy"
                                                      alt=""
                                                      className="image-121"
                                                    />
                                                  )}
                                                  <p
                                                    className={
                                                      subItem.free
                                                        ? "lesson-title"
                                                        : "paragraph-10"
                                                    }
                                                  >
                                                    {subItem.subtitle}
                                                  </p>
                                                </div>
                                                <div className="div-block-196">
                                                  {subItem.free && (
                                                    <div className="chip navy">
                                                      <div className="text-block-40">
                                                        Free
                                                      </div>
                                                    </div>
                                                  )}
                                                  <p className="time-pages">
                                                    {subItem.time}
                                                  </p>
                                                </div>
                                              </Link>
                                            </div>
                                          </div>
                                        )
                                      )}
                                    </div>
                                  </div>
                                </nav>
                              </div>
                            ))}
                      </div>
                    </div>
                  </nav>
                ))}
              </div>
            ))}
          </div>
          <div className="column-64">
            <CoursesRight />
          </div>
        </div>
      </div>
      <div className="slanted-background"></div>
    </div>
  );
};

export default Courses;
