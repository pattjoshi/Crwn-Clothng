import React from "react";

import { SpinnerContainer, SpinnerOverlay } from "./WithSpinnerStyles";

const WithSpinner = (WrappedComponent) => {
  const Spinner = ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    ) : (
      <WrappedComponent {...otherProps} />
    );
  };
  return Spinner;
};

export default WithSpinner;

// HOC :- High order Component
// Concretely, a higher-order component is a function that takes a component and returns a new component.
