import React from "react";
import { Link } from "react-router-dom";
import { BrandLogo } from "../../assets";

const Footer = () => {
  return (
    <div id="footer" className="footer wf-section">
      <div className="container w-container">
        <div className="w-row">
          <div className="column-6 w-col w-col-6 w-col-stack">
            <Link to="/" className="w-inline-block">
              <img
                src={BrandLogo}
                width="240"
                height={120}
                alt=""
                className="image-9"
              />
            </Link>
            <p className="text subtitle bottom">
              All the tools you need to land your dream product management job
              at
              <em>any</em>
              tech company
            </p>
          </div>
          <div className="column-5 w-col w-col-6 w-col-stack">
            <p className="text subtitle center-mobile">
              Unlock a 32-minute video lesson to learn how to answer the hardest
              PM interview questions for FREE!
            </p>
            <div className="w-form">
              <form
                id="wf-form-Email-Form"
                name="wf-form-Email-Form"
                data-name="Email Form"
                method="get"
                className="form"
              >
                <input
                  type="email"
                  className="text-field w-input"
                  maxLength="256"
                  name="email-2"
                  data-name="Email 2"
                  pattern="^[a-zA-Z0-9\.\-+_]+@[a-zA-Z0-9\.\-_]+\.[a-zA-Z]{2,}$"
                  placeholder="Your email"
                  title="Please enter a valid email address"
                  id="email-2"
                  required=""
                />
                <div className="sourcelogging w-embed">
                  <input
                    type="hidden"
                    className="sourceLogging"
                    id="hiddenKey11"
                    name="formSrc1"
                    data-name="formSrc1"
                    value="footer"
                  />
                  <input
                    type="hidden"
                    className="sourceLogging"
                    id="hiddenKey12"
                    name="formUrl1"
                    data-name="formUrl1"
                    value=""
                  />
                  <input
                    type="hidden"
                    className="sourceLogging"
                    id="hiddenKey13"
                    name="formRef1"
                    data-name="formRef1"
                    value=""
                  />
                </div>
                <input
                  type="submit"
                  value="Get video"
                  data-wait="Please wait..."
                  className="form-button w-button"
                />
              </form>
              <div className="success-message w-form-done">
                <div>
                  Thank you! You&#x27;ll get an email from us soon.
                  <br />
                </div>
              </div>
              <div className="error-message w-form-fail">
                <div className="text-block">
                  Oops! Something went wrong while submitting your email.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="columns-10 w-row">
          <div className="column-76 w-col w-col-4">
            <div>
              <div className="text-block-57">
                <strong>Flagship Courses</strong>
              </div>
              <div>
                <Link to="/" className="link-block-17 w-inline-block">
                  Flagship Google PM Interview Course
                </Link>
                <Link to="/" className="link-block-17 w-inline-block">
                  Flagship Meta PM Interview Course
                </Link>
                <Link to="f/" className="link-block-17 w-inline-block">
                  Flagship Uber PM Interview Course
                </Link>
                <Link to="f/" className="link-block-17 w-inline-block">
                  Flagship Amazon PM Interview Course
                </Link>
                <Link to="/" className="link-block-17 w-inline-block">
                  Flagship Microsoft PM Interview Course
                </Link>
                <Link to="/" className="link-block-17 w-inline-block">
                  Flagship Apple PM Interview Course
                </Link>
              </div>
            </div>
            <div>
              <div className="text-block-57 text-block-58 text-block-59">
                <strong>Classic Courses</strong>
              </div>
              <div>
                <Link to="/" className="link-block-17 w-inline-block">
                  Breaking into Product
                </Link>
                <Link to="/" className="link-block-17 w-inline-block">
                  Hacking the PM Interview
                </Link>
                <Link to="/" className="link-block-17 w-inline-block">
                  Specific Company Deep Dives
                </Link>
              </div>
            </div>
          </div>
          <div className="column-77 w-col w-col-8">
            <div>
              <div className="text-block-57">
                <strong>Companies</strong>
              </div>
              <div className="div-block-259">
                <div className="w-row">
                  <div className="w-col w-col-4">
                    <div>
                      <Link to="/" className="link-block-17 w-inline-block">
                        Adobe PM Interview Toolkit
                      </Link>
                      <Link to="/" className="link-block-17 w-inline-block">
                        Affirm PM Interview Toolkit
                      </Link>
                      <Link to="/" className="link-block-17 w-inline-block">
                        Airbnb PM Interview Toolkit
                      </Link>
                      <Link to="/" className="link-block-17 w-inline-block">
                        Airtable PM Interview Toolkit
                      </Link>
                      <Link to="/" className="link-block-17 w-inline-block">
                        Asana PM Interview Toolkit
                      </Link>
                      <Link to="/" className="link-block-17 w-inline-block">
                        Atlassian PM Interview Toolkit
                      </Link>
                      <Link to="/" className="link-block-17 w-inline-block">
                        Cisco PM Interview Toolkit
                      </Link>
                      <Link to="/" className="link-block-17 w-inline-block">
                        Coinbase PM Interview Toolkit
                      </Link>
                      <Link to="/" className="link-block-17 w-inline-block">
                        Discord PM Interview Toolkit
                      </Link>
                    </div>
                  </div>
                  <div className="w-col w-col-4">
                    <div>
                      <Link tp="/" className="link-block-17 w-inline-block">
                        DoorDash PM Interview Toolkit
                      </Link>
                      <Link tp="/" className="link-block-17 w-inline-block">
                        Dropbox PM Interview Toolkit
                      </Link>
                      <Link tp="/" className="link-block-17 w-inline-block">
                        LinkedIn PM Interview Toolkit
                      </Link>
                      <Link tp="/" className="link-block-17 w-inline-block">
                        Lyft PM Interview Toolkit
                      </Link>
                      <Link to="/" className="link-block-17 w-inline-block">
                        Netflix PM Interview Toolkit
                      </Link>
                      <Link to="/" className="link-block-17 w-inline-block">
                        PayPal PM Interview Toolkit
                      </Link>
                      <Link to="/" className="link-block-17 w-inline-block">
                        Pinterest PM Interview Toolkit
                      </Link>
                      <Link to="/" className="link-block-17 w-inline-block">
                        Robinhood PM Interview Toolkit
                      </Link>
                      <Link to="/" className="link-block-17 w-inline-block">
                        Salesforce PM Interview Toolkit
                      </Link>
                    </div>
                  </div>
                  <div className="w-col w-col-4">
                    <div>
                      <Link to="/" className="link-block-17 w-inline-block">
                        Shopify PM Interview Toolkit
                      </Link>
                      <Link to="/" className="link-block-17 w-inline-block">
                        Spotify PM Interview Toolkit
                      </Link>
                      <Link to="/" className="link-block-17 w-inline-block">
                        Stripe PM Interview Toolkit
                      </Link>
                      <Link to="/" className="link-block-17 w-inline-block">
                        Tesla PM Interview Toolkit
                      </Link>
                      <Link to="/" className="link-block-17 w-inline-block">
                        TikTok PM Interview Toolkit
                      </Link>
                      <Link to="/" className="link-block-17 w-inline-block">
                        Twitter PM Interview Toolkit
                      </Link>
                      <Link to="/" className="link-block-17 w-inline-block">
                        Walmart PM Interview Toolkit
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="div-block-11">
          <p className="text _16">Copyright © Product Alliance 2022.</p>
          <div className="div-block-134">
            <Link to="/" target="_blank" className="link-block w-inline-block">
              <p className="text _16">Enroll</p>
            </Link>
            <Link to="/" className="link-block w-inline-block">
              <p className="text _16">Sign In</p>
            </Link>
            <Link to="/" className="link-block w-inline-block">
              <p className="text _16">FAQ</p>
            </Link>
            <Link to="/" className="link-block w-inline-block">
              <p className="text _16">Terms of Service</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
