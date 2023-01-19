import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BrandLogo } from "../../assets";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isEntered, setIsEntered] = useState(false);
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  const handleMouseEnterHover = () => {
    setIsEntered(true);
  };
  const handleMouseLeaveHover = () => {
    setIsEntered(false);
  };
  useEffect(() => {
    window.addEventListener("click", () => {
      setIsEntered(false);
    });
  }, []);

  return (
    <div className="top-navbar w-nav">
      <div className="nav-container w-container">
        <Link to="/" className="brand w-nav-brand">
          <img src={BrandLogo} width="100px" alt="" />
        </Link>
        <nav role="navigation" className="nav-menu w-nav-menu">
          <Link to="/#" className="nav-link coaching-nav-link w-nav-link">
            Coaching
          </Link>
          <div
            data-w-id="c1db626c-1c8c-86f2-b15d-c89ea0e7829a"
            className="dropdown-wrapper resources"
          >
            <div className="dropdown-trigger">
              <Link to="/#" className="nav-link w-nav-link">
                Resources
              </Link>
            </div>
            <div className="resources-dropdown">
              <Link to="/#" className="drodown-link-item w-inline-block">
                <div className="small-course-icon ultimate-job-list-icon"></div>
                <div className="text-block-4 left">Ultimate Job List</div>
              </Link>
              <Link to="/#" className="drodown-link-item w-inline-block">
                <div className="small-course-icon insight-videos-icon"></div>
                <div className="text-block-4 left">Product Insight Videos</div>
              </Link>
              <Link to="/#" className="drodown-link-item w-inline-block">
                <div className="small-course-icon strategy-report-icon"></div>
                <div className="text-block-4 left">Strategy Reports</div>
              </Link>
              <Link to="/#" className="drodown-link-item w-inline-block">
                <div className="small-course-icon blog-icon"></div>
                <div className="text-block-4 left">Blog</div>
              </Link>
            </div>
          </div>
          <div
            data-w-id="e4c78731-a1e8-01bf-981d-4eb336ad504b"
            className="dropdown-wrapper"
          >
            <div
              className="dropdown-trigger"
              onMouseEnter={handleMouseEnterHover}
            >
              <Link to="/#" className="nav-link selected w-nav-link">
                Courses
              </Link>
            </div>
            <div
              className={`courses-dropdown ${isEntered && "opened"}`}
              onMouseLeave={handleMouseLeaveHover}
            >
              <div className="div-block-247">
                <div className="text-block-53">CLASSIC Courses</div>
                <div className="div-block-246">
                  <Link to="/#" className="drodown-link-item w-inline-block">
                    <div className="small-course-icon breaking colored micro"></div>
                    <div className="text-block-4">Breaking into Product</div>
                  </Link>
                  <Link to="/#" className="drodown-link-item w-inline-block">
                    <div className="small-course-icon hacking colored micro"></div>
                    <div className="text-block-4">Hacking the PM Interview</div>
                  </Link>
                  <Link to="/#" className="drodown-link-item w-inline-block">
                    <div className="small-course-icon core colored micro"></div>
                    <div className="text-block-4">
                      Specific Company Deep Dives
                    </div>
                  </Link>
                </div>
              </div>
              <div className="div-block-244">
                <div className="text-block-53">Flagship Courses</div>
                <div className="div-block-245">
                  <Link to="/#" className="drodown-link-item w-inline-block">
                    <div className="small-course-icon google micro"></div>
                    <div className="text-block-4">
                      Flagship Google PM Course
                    </div>
                  </Link>
                  <Link to="/#" className="drodown-link-item w-inline-block">
                    <div className="small-course-icon facebook colored micro"></div>
                    <div className="text-block-4">Flagship Meta PM Course</div>
                  </Link>
                  <Link
                    to="/#"
                    className="drodown-link-item uber w-inline-block"
                  >
                    <div className="small-course-icon uber micro"></div>
                    <div className="text-block-4">Flagship Uber PM Course</div>
                  </Link>
                  <Link to="/#" className="drodown-link-item w-inline-block">
                    <div className="small-course-icon amazon micro"></div>
                    <div className="text-block-4">
                      Flagship Amazon PM Course
                    </div>
                  </Link>
                  <Link to="/#" className="drodown-link-item w-inline-block">
                    <div className="small-course-icon microsoft micro"></div>
                    <div className="text-block-4">
                      Flagship Microsoft PM Course
                    </div>
                  </Link>
                  <Link to="/#" className="drodown-link-item w-inline-block">
                    <div className="small-course-icon apple micro"></div>
                    <div className="text-block-4">Flagship Apple PM Course</div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <Link to="/#" className="nav-link w-nav-link">
            FAQ
          </Link>
          <Link to="/#" className="nav-link w-nav-link">
            Sign in
          </Link>
          <Link to="/checkout" className="button-3 w-button">
            Enroll now
          </Link>
        </nav>
        <div className="menu-button w-nav-button" onClick={handleOpen}>
          <div className="icon w-icon-nav-menu"></div>
        </div>
      </div>
      <div className="navbar-sticky-background"></div>

      <div
        className="w-nav-overlay"
        id="w-nav-overlay-0"
        style={{
          height: "",
          display: `${isOpen ? "block" : "none"}`,
          overflow: `${isEntered ? "visible" : "hidden"}`,
        }}
      >
        <nav
          role="navigation"
          className="nav-menu w-nav-menu"
          style={{
            transform: "translateY(0px) translateX(0px)",
            transition: "transform 400ms ease !important",
            display: `${isOpen ? "block" : "none"}`,
          }}
        >
          <Link
            to="/coaching"
            className="nav-link coaching-nav-link w-nav-link w--nav-link-open"
            style={{ maxWidth: "1100px" }}
          >
            Coaching
          </Link>
          <div
            data-w-id="c1db626c-1c8c-86f2-b15d-c89ea0e7829a"
            className="dropdown-wrapper resources"
          >
            <div className="dropdown-trigger">
              <a
                href="/"
                className="nav-link w-nav-link w--nav-link-open"
                style={{ maxWidth: "1100px" }}
              >
                Resources
              </a>
            </div>
            <div
              className="resources-dropdown"
              style={{
                transform:
                  "translate3d(0px, 10px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                transformStyle: "preserve-3d",
                opacity: "0",
                display: "none",
              }}
            >
              <Link to="/" className="drodown-link-item w-inline-block">
                <div className="small-course-icon ultimate-job-list-icon"></div>
                <div className="text-block-4 left">Ultimate Job List</div>
              </Link>
              <Link to="/" className="drodown-link-item w-inline-block">
                <div className="small-course-icon insight-videos-icon"></div>
                <div className="text-block-4 left">Product Insight Videos</div>
              </Link>
              <Link
                to="/strategy-reports"
                className="drodown-link-item w-inline-block"
              >
                <div className="small-course-icon strategy-report-icon"></div>
                <div className="text-block-4 left">Strategy Reports</div>
              </Link>
              <Link to="/" className="drodown-link-item w-inline-block">
                <div className="small-course-icon blog-icon"></div>
                <div className="text-block-4 left">Blog</div>
              </Link>
            </div>
          </div>
          <div
            data-w-id="e4c78731-a1e8-01bf-981d-4eb336ad504b"
            className="dropdown-wrapper"
            onMouseEnter={handleMouseEnterHover}
          >
            <div className="dropdown-trigger">
              <Link
                to="/"
                className="nav-link selected w-nav-link w--nav-link-open"
                style={{ maxWidth: "1100px" }}
              >
                Courses
              </Link>
            </div>
            <div
              className={`courses-dropdown ${isEntered && "opened"}`}
              onMouseLeave={handleMouseLeaveHover}
            >
              <div className="div-block-247">
                <div className="text-block-53">CLASSIC Courses</div>
                <div className="div-block-246">
                  <Link to="/" className="drodown-link-item w-inline-block">
                    <div className="small-course-icon breaking colored micro"></div>
                    <div className="text-block-4">Breaking into Product</div>
                  </Link>
                  <Link to="/" className="drodown-link-item w-inline-block">
                    <div className="small-course-icon hacking colored micro"></div>
                    <div className="text-block-4">Hacking the PM Interview</div>
                  </Link>
                  <Link to="/#" className="drodown-link-item w-inline-block">
                    <div className="small-course-icon core colored micro"></div>
                    <div className="text-block-4">
                      Specific Company Deep Dives
                    </div>
                  </Link>
                </div>
              </div>
              <div className="div-block-244">
                <div className="text-block-53">Flagship Courses</div>
                <div className="div-block-245">
                  <Link to="/" className="drodown-link-item w-inline-block">
                    <div className="small-course-icon google micro"></div>
                    <div className="text-block-4">
                      Flagship Google PM Course
                    </div>
                  </Link>
                  <Link href="/" className="drodown-link-item w-inline-block">
                    <div className="small-course-icon facebook colored micro"></div>
                    <div className="text-block-4">Flagship Meta PM Course</div>
                  </Link>
                  <Link
                    to="/"
                    className="drodown-link-item uber w-inline-block"
                  >
                    <div className="small-course-icon uber micro"></div>
                    <div className="text-block-4">Flagship Uber PM Course</div>
                  </Link>
                  <Link to="/" className="drodown-link-item w-inline-block">
                    <div className="small-course-icon amazon micro"></div>
                    <div className="text-block-4">
                      Flagship Amazon PM Course
                    </div>
                  </Link>
                  <Link to="/" className="drodown-link-item w-inline-block">
                    <div className="small-course-icon microsoft micro"></div>
                    <div className="text-block-4">
                      Flagship Microsoft PM Course
                    </div>
                  </Link>
                  <Link to="/" className="drodown-link-item w-inline-block">
                    <div className="small-course-icon apple micro"></div>
                    <div className="text-block-4">Flagship Apple PM Course</div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <Link
            to="/"
            className="nav-link w-nav-link w--nav-link-open"
            style={{ maxWidth: "1100px" }}
          >
            FAQ
          </Link>
          <Link
            to="/"
            className="nav-link w-nav-link w--nav-link-open"
            style={{ maxWidth: "1100px" }}
          >
            Sign in
          </Link>
          <Link to="/checkout" className="button-3 w-button">
            Enroll now
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
