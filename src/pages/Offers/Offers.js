import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  OfferMetaTestimentials,
  OffersFullAccess,
  OffersGroupCompare,
} from "../../assets";
import PaymentMethods from "./PaymentMethods";

const Offers = () => {
  const [isCardChecked, setIsCardChecked] = useState(false);
  const [isPaypalChecked, setIsPaypalChecked] = useState(false);
  const handleCheckCard = () => {
    setIsCardChecked(true);
  };
  const handleCheckPaypal = () => {
    setIsPaypalChecked(true);
  };
  const removeCheckedOptions = () => {
    setIsCardChecked(false);
    setIsPaypalChecked(false);
  };
  return (
    <div className="content offers">
      <div className="container">
        <div className="row">
          <div className="col-md-12"></div>
        </div>
        <div className="row">
          <div className="col-md-12 col-lg-6">
            <div className="checkout-content">
              <img
                className="img-responsive checkout-content-img hasShadow"
                kjb-settings-id="offer-image-section"
                src={OffersFullAccess}
                alt=""
              />
              <h1
                className="checkout-content-title"
                kjb-settings-id="offer-title-section"
              >
                Product Alliance Full Library Access Pass (Includes All 9
                Courses)
              </h1>
              <div
                className="checkout-content-body"
                kjb-settings-id="checkout-copy-section"
              >
                <h3 className="p1" style={{ textAlign: "left" }}>
                  <img src={OffersGroupCompare} alt="" />
                </h3>
                <p>
                  Ready to land your dream product management job, from Director
                  of Product all the way down to APM? The Full Library Access
                  Pass gets you<strong>&nbsp;</strong>
                  <strong>
                    unlimited, lifetime access to every single resource
                  </strong>{" "}
                  in Product Alliance's library, plus free updates forever.{" "}
                  <strong>Pay once and you're done — n</strong>
                  <strong>o monthly fees, no subscription BS.</strong>
                </p>
                <p>
                  This bundle includes <strong>all 9</strong> of our premium
                  courses:
                </p>
                <ul>
                  <li>🔍&nbsp;The Flagship Google PM Interview Course</li>
                  <li>♾ The Flagship Meta PM Interview Course</li>
                  <li>📦 The Flagship Amazon PM Interview Course</li>
                  <li>🖇 The Flagship Microsoft PM Interview Course</li>
                  <li>🍎 The Flagship Apple PM Interview Course</li>
                  <li>🚕 The Flagship Uber PM Interview Course</li>
                  <li>🤿 Company-Specific Deep Dives</li>
                  <li>🧱 Breaking into Product Management</li>
                  <li>🚀 Hacking the PM Interview</li>
                </ul>
                <p>
                  <span style={{ color: "#0f5be5" }}>
                    <strong>And within those, you'll get:</strong>
                  </span>
                </p>
                <ul>
                  <li>
                    <strong>🍿 60+ sample interview answers</strong> from expert
                    PMs, with voiceover commentary from our panel of calibrated
                    interviewers
                  </li>
                  <li>
                    🧩 Step-by-step interview tactics guides for mastering{" "}
                    <strong>the 17 types of PM interview questions</strong>,
                    taught by a Google PM
                  </li>
                  <li>
                    <strong>🔮 1300+ </strong>
                    <strong>interview questions</strong> asked in the last month
                    at 28 companies (from FAANG to Stripe, Coinbase, Twitter,
                    Tesla, and more)
                  </li>
                  <li>
                    📚 <strong>30+ exclusive strategy videos </strong>breaking
                    down the 10-year product roadmaps of Google, Meta, Amazon,
                    Microsoft, Apple, Uber, and more
                  </li>
                  <li>
                    🎭 Our famous "breaking the script" series for{" "}
                    <strong>standing out at senior+ PM interviews</strong>,
                    taught by a Director of Product
                  </li>
                  <li>
                    ⏳ <strong>37+ hours</strong> of unique video content across
                    the 9 courses
                  </li>
                  <li>
                    💫 <strong>Lifetime access to everything</strong> in our
                    entire library, plus free updates for life. No monthly fees,
                    no annual fees — this material is yours forever.
                  </li>
                </ul>
                <p>
                  <img src={OfferMetaTestimentials} alt="" />
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-offset-1 col-md-5 checkout-content-left">
            <div className="panel checkout-panel js-checkout-panel-discounted">
              <div className="panel-heading">
                <h1 className="checkout-panel-title js-checkout-panel-price-discountable">
                  $2,319.00 USD
                </h1>
              </div>
              <div>
                {" "}
                <div className="price-breakdown">
                  <table className="table price-breakdown-table">
                    <tbody>
                      <tr>
                        <th className="price-breakdown-title">
                          <span className="price-breakdown-title-specific hide">
                            Product Alliance Full Library Access Pass (Includes
                            All 9 Courses):
                          </span>
                          <span className="price-breakdown-title-generic">
                            Subtotal:
                          </span>
                        </th>
                        <td
                          className="nowrap text-right"
                          data-kjb-element="subtotal"
                        >
                          $2,319.00 USD
                        </td>
                      </tr>

                      <tr className="price-breakdown-coupon coupon-row">
                        <th className="price-breakdown-title">Discount:</th>
                        <td className="nowrap text-right">
                          <span className="price-breakdown-description coupon-description">
                            $1,740.00 USD off
                          </span>
                          <a style={{paddingLeft:"6px"}} className="remove-coupon" href="/#">
                            X
                          </a>{" "}
                        </td>
                      </tr>

                      <tr className="price-breakdown-total due-now">
                        <th className="price-breakdown-title">Due Now:</th>
                        <td className="nowrap text-right">
                          <span
                            className="price-breakdown-price due-now-price text-nowrap"
                            data-kjb-element="due-now-price"
                          >
                            $579.00 USD
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="panel-body">
                <div id="main-flash-messages"></div>
                <div className="checkout-personal-info-container">
                  <div className="form-group email required checkout_offer_member_email">
                    <input
                      className="form-control string email required form-control required"
                      autoComplete="email"
                      data-parsley-required-message="* Required"
                      data-parsley-type-message="is invalid"
                      data-parsley-group="account_information"
                      data-parsley-remote="true"
                      data-parsley-remote-validator="kjb_offer_checkout_email_validator"
                      placeholder="Email Address"
                      type="email"
                      name="checkout_offer[member][email]"
                      id="checkout_offer_member_email"
                      data-parsley-id="1280"
                    />
                    <ul
                      className="parsley-errors-list"
                      id="parsley-id-1280"
                    ></ul>
                  </div>

                  <input type="hidden" name="frictionless" id="frictionless" />

                  <div className="account-check-spinner">
                    <div className="bounce1"></div>
                    <div className="bounce2"></div>
                    <div className="bounce3"></div>
                  </div>
                </div>
                <div>
                  <div className="div">
                    <div
                      className=""
                      bind-show="checkoutPaymentStep.paymentType == null"
                      // onClick={isCardChecked}
                    >
                      {!isCardChecked && !isPaypalChecked && (
                        <div className="payment-types">
                          <div
                            className="payment-types-item"
                            onClick={handleCheckCard}
                          >
                            <label>
                              <input type="radio" name="payment_type" />
                              Card
                            </label>
                            <ul
                              className="parsley-errors-list"
                              id="parsley-id-multiple-payment_type"
                            ></ul>
                          </div>
                          <div
                            className="payment-types-item"
                            onClick={handleCheckPaypal}
                          >
                            <label>
                              <input type="radio" name="payment_type" />
                              PayPal
                            </label>
                          </div>
                        </div>
                      )}
                      {isCardChecked && (
                        <PaymentMethods isPaypalChecked={isPaypalChecked} />
                      )}
                      {(isCardChecked || isPaypalChecked) && (
                        <div
                          className=""
                          bind-show="checkoutPaymentStep.paymentType != null"
                          style={{
                            cursor: "pointer",
                            color: "#556370",
                            fontSize: "13px",
                            marginBottom: "15px",
                          }}
                          onClick={removeCheckedOptions}
                        >
                          Change payment method
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="service-agreement">
                  <div className="form-group boolean required checkout_offer_service_agreement">
                    <div className="checkbox">
                      <input
                        type="hidden"
                        name="checkout_offer[service_agreement]"
                      />
                      <label
                        className="boolean required"
                        htmlFor="checkout_offer_service_agreement"
                      >
                        <input
                          className="boolean required"
                          required="required"
                          aria-required="true"
                          type="checkbox"
                          name="checkout_offer[service_agreement]"
                          id="checkout_offer_service_agreement"
                          data-parsley-multiple="checkout_offerservice_agreement"
                          data-parsley-id="2903"
                        />
                        I have read and agree to the terms and conditions of
                        this page as follows:
                      </label>
                      <ul
                        className="parsley-errors-list"
                        id="parsley-id-multiple-checkout_offerservice_agreement"
                      ></ul>
                    </div>
                  </div>

                  <div className="form-control service-agreement-text">
                    <p>
                      Per our <a href="/">terms of service</a>, all sales are
                      final. We do not offer refunds on our courses, given that
                      a large portion of their value proposition is the over-300
                      pages of downloadable content they come with in addition
                      to lifetime video access. We are proud of our content, so
                      we feature full-length sample videos on{" "}
                      <a href="/">productalliance.com</a> to help you gauge if
                      our materials are right for your needs before you make a
                      purchasing decision.
                    </p>
                  </div>
                </div>
                <div className="checkout-panel__btn-wrapper">
                  <a href="/">
                    <input
                      type="submit"
                      name="commit"
                      value="Complete my purchase"
                      className="btn-block"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div
              className="checkout-footer"
              kjb-settings-id="footer-nav-section"
            >
              <Link className="footer-link" to="/">
                Home
              </Link>
              <Link className="footer-link" to="/">
                Resources
              </Link>
              <Link className="footer-link" to="/">
                Terms and Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offers;
