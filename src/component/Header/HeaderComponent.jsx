import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { ReactComponent as Logo } from "../../assets/crown.svg";
// This is a special syntex in react for importing SVG.
import { auth } from "../../firebase/FirebaseUtils";
import CartIcon from "../../component/Cart-Icon/CartIcon";
import CartDropdown from "../Cart-Dropdown/CartDropdown";
import { selectCartHidden } from "../../redux/cart/CartSelectors";
import { selectCurrentUser } from "../../redux/user/UserSelectors";

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
} from "./HeaderStyles";

const HeaderComponent = ({ currentUser, hidden }) => {
  // De-structuring the current uers
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo className="logo" />
      </LogoContainer>
      {/* If click the Logo it's take us to Home page */}
      <OptionsContainer>
        <OptionLink to="/shop">
          SHOP
          {/* If click the Shop it's take us to shop page */}
        </OptionLink>
        <OptionLink to="/shop">
          CONTACT
          {/* If click the CONTACT it's take us to CONTACT page */}
        </OptionLink>
        {currentUser ? (
          // auth.signOut IS dlreacd define method in firebase
          <OptionLink as="div" onClick={() => auth.signOut()}>
            SIGN OUT
          </OptionLink>
        ) : (
          <OptionLink to="/signin">SIGN IN</OptionLink>
        )}
        <CartIcon />
      </OptionsContainer>
      {hidden ? null : <CartDropdown />}
    </HeaderContainer>
  );
};

// it is function that is allows to access the state of reducer (rootReducer)
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(HeaderComponent);

// This naming can be anything but mapStateToprops is standard wirh redux codebase
