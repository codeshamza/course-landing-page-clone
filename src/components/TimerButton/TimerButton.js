import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Union } from "../../assets";
import "./button.css";

const TimerButton = () => {
  const [hide, setHide] = useState(false);
  return (
    <>
      <div
        style={{ display: hide ? "none" : "block" }}
        className="toast bg-white toast-clickable fade show"
        id="toast-1673507262080"
      >
        <div className="toast-body">
          <div className="row no-gutters">
            <div className="col-3 rowOFF align-items-centerOFF">
              <div className="row align-items-center full-height">
                <Link to="/#" className="mx-auto" data-dismiss="toast">
                  <div
                    className="pulsar mx-auto row align-items-center"
                    data-dismiss="toast"
                  >
                    <div className="text-white mx-auto toast-icon">
                      <svg
                        width="25px"
                        height="25px"
                        viewBox="0 0 16 16"
                        className="bi bi-file-play-fill"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM6 5.883v4.234a.5.5 0 0 0 .757.429l3.528-2.117a.5.5 0 0 0 0-.858L6.757 5.454a.5.5 0 0 0-.757.43z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            <div className="col-8 rowOFF align-items-centerOFF toast-text">
              <div>
                <Link to="/#" data-dismiss="toast">
                  <span className="text_dark">
                    <strong>209 candidates watched</strong>
                    &nbsp;our free,
                    <br />
                    32-minute PM interview lesson today.
                  </span>
                </Link>

                <div className="toast-separator">
                  <br />
                </div>

                <span className="small verified">
                  <svg
                    style={{ marginRight: "2px" }}
                    width="1em"
                    height="1em"
                    viewBox="0 0 16 16"
                    className="bi bi-check-circle-fill"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"
                    ></path>
                  </svg>
                  <span className="word-spaced">Verified</span>
                </span>
                <span className="word-spaced"> · </span>
                <span className="small text-muted">in the last 24 hours</span>
              </div>
            </div>

            <div className="col-1 dismiss-x rowOFF align-items-centerOFF">
              <div className="toast-closerOFF clickable text-muted">
                <span
                  onClick={() => setHide(true)}
                  className="dismiss"
                  data-dismiss="toast"
                >
                  ×
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{ display: hide ? "none" : "block" }}
        data-w-id="5e5818fc-c289-4f14-4967-80d622388be1"
        className="mobile-bar-2"
      >
        <div className="text-block-48">GET&nbsp;STARTED&nbsp;FOR&nbsp;FREE</div>
        <img
          src={Union}
          loading="lazy"
          width="25"
          alt=""
          className="image-124"
        />
      </div>
    </>
  );
};

export default TimerButton;
