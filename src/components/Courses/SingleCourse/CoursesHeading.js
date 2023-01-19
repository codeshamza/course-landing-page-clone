import React from "react";
import { PlayBtnRegular } from "../../../assets";

const CoursesHeading = ({ subItem }) => {
  const { heading, free, time, img } = subItem;
  return (
    <>
      {heading && (
        <div>
          <a
            href="/"
            className={`${
              free ? "free-item navy" : "regular-item"
            } w-inline-block`}
          >
            <div className="video-title-block">
              {free ? (
                <div className="video-image-block">
                  <div className="videoimage"></div>
                  <div className="html-embed-3 w-embed">
                    <div
                      style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: "7px",
                        backgroundImage: `url(${img})`,
                        backgroundSize: "cover",
                        //   backgroundSize: "112%",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "50% 50%",
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
                ></img>
              )}
              <p className="lesson-title">{heading}</p>
            </div>
            <div className="div-block-196">
              {free && (
                <div className="chip navy">
                  <div className="text-block-40"> Free </div>
                </div>
              )}
              <p className="time-pages">{time} </p>
            </div>
          </a>
        </div>
      )}
    </>
  );
};

export default CoursesHeading;
