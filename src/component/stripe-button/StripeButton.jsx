import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  // Strope want see price as  a SENSE so *100 did it.
  const publishableKey =
    "pk_test_51KtVBtSIdZYVEHlOxqCWKL89DXNFKFKvcgBuViXcR7ETtCyXsEcV74H2m2rjJ5iUaNTiYC0mBit8tu87wB0fJY7300tMfCj1MQ";
  // publishableKey id given in the strip account

  const onToken = (token) => {
    console.log(token);
    alert("Payment Succesful!");
    // i dont want payment function it's jaust alert pop pup
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is ${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
