import React from "react";
import { HelpQuestion } from "../../assets";
import { PaymentInputsWrapper, usePaymentInputs } from "react-payment-inputs";
import images from "react-payment-inputs/images";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip as ReactTooltip } from "react-tooltip";

const styles = {
  fieldWrapper: {
    base: {
      width: "100%",
    },
  },
  inputWrapper: {
    base: {
      width: "100%",
    },
  },
  input: {
    expiryDate: {
      flex: 1,
      textAlign: "right",
    },
  },
};

const PaymentMethods = () => {
  const {
    wrapperProps,
    getCardImageProps,
    getCardNumberProps,
    getExpiryDateProps,
  } = usePaymentInputs();

  function handleChange() {
    //stuff here
  }
  return (
    <div
      className=""
      bind-show="checkoutPaymentStep.paymentType == 'stripe' || checkoutPaymentStep.paymentType == 'kajabi_payments'"
    >
      <div className="new-credit-card">
        <div className="form-group">
          <div
            className="__PrivateStripeElement"
            style={{
              margin: "0px",
              padding: "0px",
              border: "none",
              display: "block",
              background: "transparent",
              position: "relative",
              opacity: "1",
            }}
          >
            <PaymentInputsWrapper {...wrapperProps} styles={styles}>
              <svg {...getCardImageProps({ images })} />
              <input {...getCardNumberProps({ onChange: handleChange })} />
              <input {...getExpiryDateProps()} />
            </PaymentInputsWrapper>
          </div>
        </div>
      </div>
      <div id="manage_payment_method" className="form-group">
        <div className="checkbox">
          <label className="checkbox__label--group">
            <input
              name="checkout_offer[consent_to_store_payment_method]"
              type="hidden"
              value="0"
            />
            <input
              className="boolean optional"
              type="checkbox"
              value="1"
              name="checkout_offer[consent_to_store_payment_method]"
              id="checkout_offer_consent_to_store_payment_method"
              data-parsley-multiple="checkout_offerconsent_to_store_payment_method"
              data-parsley-id="0935"
            />
            Store this card for future purchases
            <span
              className="checkbox__label__hint"
              data-toggle="tooltip"
              title=""
              data-original-title="Your payment information will be stored on a secure server for future purchases"
            >
              <img
                src={HelpQuestion}
                id="info-helper"
                alt="info"
                width={15}
                height={15}
                style={{ marginLeft: "10px", opacity: "0.5" }}
              />
              <ReactTooltip
                anchorId="info-helper"
                place="top"
                content="Your payment information will be stored on a secure server for future purchases"
                style={{ width: "200px", fontSize: "12px" }}
              />
            </span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethods;
